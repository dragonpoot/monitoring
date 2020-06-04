const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

//inicializaciones
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//configuraciones
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.use(require('./routes/'));


//sockets
require('./sockets')(io);

//
app.use(express.static(path.join(__dirname, 'public')));


//iniciar servidor
server.listen(3000, () => {
console.log('server on port 3000');
});