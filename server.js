const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});
io.on('connection', socket => {
    console.log(`user ${socket.id} connected`);

    socket.on('join_chat', data => {
        socket.join();
        socket.to().emit('get_companion_data', data);
        console.log(`User ${data.userName} joined chat`);
    });

    socket.on('send_message', data => {
        socket.to().emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log(`user ${socket.id} disconnected`);
    });
});

server.listen(3001, err => {
    if (err) {
        throw Error(err);
    }

    console.log('*** SERVER IS RUNNING ***');
});