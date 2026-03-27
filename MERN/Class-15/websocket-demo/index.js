const express = require('express');
const {createServer} = require('node:http')
const app = express();
const path = require('node:path');
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

const mp = new Map();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', function (socket) {
    console.log(`connection established via socketId ${socket.id}`);
    socket.on('disconnect', function () {
        console.log(`client with id ${socket.id} got disconnected`);
        mp.delete(socket.id);
    });

    socket.on('send-msg', function (arg) {
        const { message } = arg;
        // this is where we are broadcasting the message to everyone connected to the socket server
        io.emit('recived-msg', { message, username: mp.get(socket.id)});
    });

    socket.on('login-user', function (arg) {
        const { username } = arg;
        mp.set(socket.id, username);
    })
});


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});




