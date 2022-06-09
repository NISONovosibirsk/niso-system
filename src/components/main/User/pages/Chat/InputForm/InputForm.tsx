import e from 'cors';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import {
    getMessages,
    updateMessage,
} from '../../../../../../store/actions/chatActions';
import './InputForm.scss';

const InputForm = ({ socket }) => {
    const { message, messageList } = useTypeSelector(state => state.chat);
    const { profile } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(updateMessage(e.target.value));
    };

    const handleSend = async e => {
        e.preventDefault();
        if (message !== '') {
            const messageData = {
                author: profile.name,
                text: message,
                time:
                    new Date(Date.now()).getHours() +
                    ':' +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit('send_message', messageData);
        }
    };

    return (
        <form>
            <input onChange={handleChange} value={message} />
            <button onClick={handleSend}> Send </button>
        </form>
    );
};

export default InputForm;
