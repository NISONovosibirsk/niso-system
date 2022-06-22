import express, { Express, Request, Response } from 'express';
import * as http from 'http';
import * as socketio from 'socket.io';
import cors from 'cors';

import { CLIENT_HOST, PORT } from './config';
import { Message, User } from './types';

const app: Express = express();

const server: http.Server = http.createServer(app);
const io = new socketio.Server(server, {
    cors: {
        origin: CLIENT_HOST,
        methods: ['GET', 'POST'],
    },
});

app.use(cors());

// storage for user list
let users: User[] = [];

io.on('connection', socket => {
    console.log('new client session');

    // listen for user join chat room
    socket.on('join_room', (user: User) => {
        console.log(`user connected: ${user.userName}`);

        user.id = socket.id;

        if (
            !users.some(existingUser => existingUser.userName === user.userName)
        ) {
            users = [...users, user];
            io.emit('update_userList', users);
        }
    });

    // listen for user send message to room
    socket.on('send_message', (message: Message) => {
        io.emit('receive_message', message);
    });

    // listen for user leaves chat room
    socket.on('disconnect', () => {
        console.log(`user ${socket.id} disconnected`);

        users = users.filter(user => user.id !== socket.id);

        io.emit('update_userList', users);
    });
});

app.set('port', PORT);

server.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON *:${PORT}`);
});
