import { IReduxActions, IRegisterState } from '../../interfaces';
import {
    RESET_FORM,
    SET_IS_VALID,
    UPDATE_EMAIL,
    UPDATE_EMAIL_ERROR,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_ERROR,
    UPDATE_REPEAT_PASSWORD,
    UPDATE_REPEAT_PASSWORD_ERROR,
} from '../reduxTypes/registerTypes';

const initialState: IRegisterState = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    repeatPassword: '',
    repeatPasswordError: '',
    isValid: false,
};

export const registerReducer = (
    state = initialState,
    action: IReduxActions
): IRegisterState => {
    switch (action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload,
            };

        case UPDATE_EMAIL_ERROR:
            return {
                ...state,
                emailError: action.payload,
            };

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
                email: '',
                emailError: '',
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
