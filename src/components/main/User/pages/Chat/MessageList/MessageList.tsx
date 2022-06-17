import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { getMessages } from '../../../../../../store/actions/chatActions';
import './MessageList.scss';

const MessageList = ({ socket }) => {
    const { messageList } = useTypeSelector(state => state.chat);
    const { profile } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('receive_message', data => {
            dispatch(getMessages(data));
        });
    }, [socket]);

    return (
        <ul className='message-list'>
            {messageList.map((message, index) => (
                <li
                    className={`message-list__message ${
                        message.author === profile.name
                            ? 'message-list__message-user'
                            : ''
                    }`}
                    key={index}
                >   
                    {message.text}
                    <span className='message-list__date'>
                        {dayjs(message.date).format('hh:mm')}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default MessageList;
