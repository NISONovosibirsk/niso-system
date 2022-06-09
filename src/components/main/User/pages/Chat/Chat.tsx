import './Chat.scss';
import InputForm from './InputForm/InputForm';
import MessageList from './MessageList/MessageList';

import { io } from 'socket.io-client';
import { useEffect } from 'react';

const Chat = () => {
    const socket = io('http://localhost:3001');

    useEffect(() => {
        socket.emit('join_chat');
    }, []);

    return (
        <section className='user-communications'>
            <MessageList socket={socket} />
            <InputForm socket={socket}/>
        </section>
    );
};

export default Chat;
