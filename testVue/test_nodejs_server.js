// console.log('Hi gay!');
// const os = require('os');
// console.log(os.cpus());

const fs = require('fs');
// const users = [
//   { name: 'Lex', id: 1 },
//   { name: 'Bob', id: 0 },
// ];
// fs.writeFile('./users.json', JSON.stringify(users), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File users.json was writen');
//   }
// });
// fs.appendFile('./users.json', JSON.stringify(users), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File users.json was writen');
//   }
// });

const user = '{ "name": "Ann", "id": 2}';
fs.readFile('users.json', 'UTF-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let users = JSON.parse(data);
    users.push(JSON.parse(user));
    fs.writeFile('./users.json', JSON.stringify(users), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File users.json was writen');
      }
    });
  }
});

const moment = require('moment');
console.log(moment().format('DD.MM.YYYY, hh:mm:ss a'));

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

server.listen('3000');
