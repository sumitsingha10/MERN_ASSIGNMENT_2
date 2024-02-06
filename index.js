const http = require('http');
const fs = require('fs');
const multer = require('multer');

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log('Server listening on port 5500');

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('This is home page.');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('This is about page.');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('This is contact page.');
  } else if (url === '/file-write') {
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Internal Server Error');
      } else {
        console.log('File "demo.txt" created and written.');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('File "demo.txt" created and written.');
      }
    });
  } else if (url === '/upload-file') {
    multer.single('file')(req, res, (err) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('File uploaded successfully.');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 Not Found');
  }
});

server.listen(5500, () => console.log('Server is running on port 5500'));



