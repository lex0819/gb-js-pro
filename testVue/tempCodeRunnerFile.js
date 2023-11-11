const http = require('http');
// console.log(http);

const server = http.createServer((request, response) => {
  if (request.url == '/') {
    response.write('Welcome to server!');
    response.end();
  }
});

server.on('connection', (socket) => {
  console.log(socket, 'Connection to server has setuped');
});
