import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import {
    getMessages,
    updateMessage,
} from '../../../../../../store/actions/chatActions';
import './InputForm.scss';

const InputForm = ({ socket }) => {
    const { message } = useTypeSelector(state => state.chat);
    const { profile } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(updateMessage(e.target.value));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (message !== '') {
            const messageData = {
                author: profile.name,
                text: message.trim(),
                date: new Date(Date.now()),
            };

            await socket.emit('send_message', messageData);
            // dispatch(getMessages(messageData));
        }

        dispatch(updateMessage(''));
    };

    const onEnterPress = e => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            handleSubmit(e);
        }
    };

    const textarea = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textarea.current !== null) {
            textarea.current.style.height = '40%';
            const scrollHeight = textarea.current.scrollHeight;
            textarea.current.style.height = scrollHeight + 'px';
        }
    }, [message]);

    return (
        <form className='communications-form' onSubmit={handleSubmit}>
            <textarea
                ref={textarea}
                onKeyDown={onEnterPress}
                className='communications-form__input'
                onChange={handleChange}
                value={message}
                placeholder='Написать сообщение...'
            />
            <button type='submit' className='communications-form__button'>
                &#9658;
            </button>
        </form>
    );
};

export default InputForm;
