import './Chat.scss';
import InputForm from './InputForm/InputForm';
import MessageList from './MessageList/MessageList';

import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { updateUsers } from '../../../../../store/actions/chatActions';

const Chat: React.FC = () => {
    const { profile } = useTypeSelector(state => state.userProfile);
    const { users } = useTypeSelector(state => state.chat);
    const dispatch = useDispatch();
    const socket = io('http://localhost:5000');

    useEffect(() => {
        socket.emit('join_room', { userName: profile.name });
    }, []);

    useEffect(() => {
        socket.on('update_userList', users => {
            dispatch(updateUsers(users));
        });
    }, [socket]);

    const handleUserName = () => {
        let user = users.find(user => user.userName !== profile.name);

        return user ? user.userName : '';
    };

    return (
        <section className='user-communications'>
            <p className='user-communications__header'>{handleUserName()}</p>
            <MessageList socket={socket} />
            <InputForm socket={socket} />
        </section>
    );
};

export default Chat;
