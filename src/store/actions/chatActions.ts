import {
    GET_MESSAGES,
    UPDATE_MESSAGE,
    UPDATE_USERS,
} from '../reduxTypes/chatTypes';

export const updateMessage = message => {
    try {
        return {
            type: UPDATE_MESSAGE,
            payload: message,
        };
    } catch (error) {
        console.log(error);
    }
};

export const getMessages = messages => {
    try {
        return {
            type: GET_MESSAGES,
            payload: messages,
        };
    } catch (error) {
        console.log(error);
    }
};

export const updateUsers = users => {
    try {
        return {
            type: UPDATE_USERS,
            payload: users,
        };
    } catch (error) {
        console.log(error);
    }
};
