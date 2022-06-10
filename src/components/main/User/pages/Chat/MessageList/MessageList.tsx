import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { getMessages } from '../../../../../../store/actions/chatActions';
import './MessageList.scss';

const MessageList = ({ socket }) => {
    const { messageList } = useTypeSelector(state => state.chat);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('receive_message', data => {
            dispatch(getMessages(data));
        });
    }, [socket]);

    return (
        <div>
            <p>Message List</p>
            <ul>
                {messageList.map((message, index) => (
                    <li key={index}>
                        {message.text}
                        <p>{message.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
