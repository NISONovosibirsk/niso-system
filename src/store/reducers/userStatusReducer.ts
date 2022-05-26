import { IReduxActions, IUserStatusState } from '../../interfaces';
import {
    UPDATE_LOGIN_STATUS,
    UPDATE_USER_POPUP,
} from '../reduxTypes/userStatusTypes';

const initialState: IUserStatusState = {
    isLogged: true,
    role: '',
    popup: {
        isOpen: false,
        type: '',
        title: '',
    },
};

export const userStatusReducer = (
    state = { ...initialState },
    action: IReduxActions
): IUserStatusState => {
    switch (action.type) {
        case UPDATE_LOGIN_STATUS:
            return {
                ...state,
                isLogged: action.payload,
            };
        case UPDATE_USER_POPUP:
            return {
                ...state,
                popup: action.payload,
            };
        default:
            return state;
    }
};
