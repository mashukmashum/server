var cors = require('cors');
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
server.use(cors());
  server.use(function(req, res){ res.sendFile(INDEX);
                                 res.header("Access-Control-Allow-Origin", "*");} );
  server.listen(PORT, () => console.log(`Listening on ${ PORT }`);

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
