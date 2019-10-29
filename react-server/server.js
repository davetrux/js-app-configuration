const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  let filePath;
  if (request.originalUrl === '/') {
    filePath = path.resolve(__dirname, './client/build', 'index.html');
  } else {
    filePath = path.resolve(__dirname, './client/build' + request.originalUrl);
  }
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));