import { IReduxActions, IChatState } from '../../interfaces';
import {
    GET_MESSAGES,
    UPDATE_MESSAGE,
    UPDATE_USERS,
} from '../reduxTypes/chatTypes';

const initialState: IChatState = {
    message: '',
    messageList: [],
    users: [],
};

export const chatReducer = (
    state = { ...initialState },
    action: IReduxActions
): IChatState => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        case GET_MESSAGES:
            return {
                ...state,
                messageList: [...state.messageList, action.payload],
            };
        case UPDATE_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};
