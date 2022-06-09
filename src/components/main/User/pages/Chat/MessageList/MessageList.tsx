import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { getMessages } from '../../../../../../store/actions/chatActions';
import './MessageList.scss';

const MessageList = ({ socket }) => {
    const { messageList } = useTypeSelector(state => state.chat);
    const dispatch = useDispatch();

    const [testList, setTestList]: any = useState([]);

    useEffect(() => {
        socket.on('receive_message', data => {
            dispatch(getMessages([...messageList, data])); // НЕ РАБОТАЕТ

            setTestList(list => [...list, data]); // РАБОТАЕТ
        });
    }, [socket]);

    return (
        <div>
            <p>Message List</p>
            <ul>
                {messageList.map((message, index) => (
                    <li key={index}>{message.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
