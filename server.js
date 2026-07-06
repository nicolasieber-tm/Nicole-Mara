// Minimaler, abhängigkeitsfreier Static-Server für Railway
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const indexFile = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
  fs.readFile(indexFile, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(port, () => {
  console.log('Nicole Mara läuft auf Port ' + port);
});
