const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const app = express();
const fs = require('fs');
const config = require('config');

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  let filePath;
  if (request.originalUrl === '/') {
    // This is the root file from React. Read it in to memory
    filePath = path.resolve(__dirname, './client/build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      // Replace the placeholder text with actual configuration data
      const result = data.replace('__SERVER_CONFIG__', JSON.stringify({ TEST_PHRASE: config.phrase }));

      response.send(result);
    });
  } else {
    // All other files just get returned directly
    filePath = path.resolve(__dirname, './client/build' + request.originalUrl);
    response.sendFile(filePath);
  }

});

app.listen(port, () => console.log(`Listening on port ${port}`));