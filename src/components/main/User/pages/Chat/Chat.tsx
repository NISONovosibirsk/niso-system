import './Chat.scss';
import InputForm from './InputForm/InputForm';
import MessageList from './MessageList/MessageList';

import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';

const Chat = () => {
    const { profile } = useTypeSelector(state => state.userProfile);
    const socket = io('http://localhost:5000');

    const [name, setName] = useState('');

    useEffect(() => {
        socket.emit('join_room', { userName: profile.name });
    }, []);

    // useEffect(() => {
    //     socket.on('get_companion_data', data => {
    //         console.log(data);
    //     });
    // }, [socket]);

    return (
        <section className='user-communications'>
            <p className='user-communications__header'>{name}</p>
            <MessageList socket={socket} />
            <InputForm socket={socket} />
        </section>
    );
};

export default Chat;
