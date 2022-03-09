import { IChangePasswordState, IReduxActions } from '../../interfaces';
import {
    RESET_FORM,
    SET_IS_VALID,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_ERROR,
    UPDATE_REPEAT_PASSWORD,
    UPDATE_REPEAT_PASSWORD_ERROR,
} from '../reduxTypes/changePasswordTypes';

const initialState: IChangePasswordState = {
    password: '',
    passwordError: '',
    repeatPassword: '',
    repeatPasswordError: '',
    isValid: false,
};

export const changePasswordReducer = (
    state = initialState,
    action: IReduxActions
): IChangePasswordState => {
    switch (action.type) {
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };

        case UPDATE_PASSWORD_ERROR:
            return {
                ...state,
                passwordError: action.payload,
            };

        case UPDATE_REPEAT_PASSWORD:
            return {
                ...state,
                repeatPassword: action.payload,
            };

        case UPDATE_REPEAT_PASSWORD_ERROR:
            return {
                ...state,
                repeatPasswordError: action.payload,
            };

        case SET_IS_VALID:
            return {
                ...state,
                isValid: action.payload,
            };

        case RESET_FORM:
            return {
                password: '',
                passwordError: '',
                repeatPassword: '',
                repeatPasswordError: '',
                isValid: false,
            };

        default:
            return state;
    }
};
