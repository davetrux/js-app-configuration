const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  let filePath;
  if (request.originalUrl === '/') {
    filePath = path.resolve(__dirname, './client/build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      const result = data.replace('__SERVER_CONFIG__', JSON.stringify({ TEST_PHRASE: 'I can do this all day' }));
      response.send(result);
    });
  } else {
    filePath = path.resolve(__dirname, './client/build' + request.originalUrl);
    response.sendFile(filePath);
  }

});

app.listen(port, () => console.log(`Listening on port ${port}`));