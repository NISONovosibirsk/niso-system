import { ILoginState, IReduxActions } from '../../interfaces';
import {
    RESET_FORM,
    SET_IS_VALID,
    UPDATE_EMAIL,
    UPDATE_EMAIL_ERROR,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_ERROR,
} from '../reduxTypes/loginTypes';

const initialState: ILoginState = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    isValid: false,
};

export const loginReducer = (
    state = { ...initialState },
    action: IReduxActions
): ILoginState => {
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
                isValid: false,
            };

        default:
            return state;
    }
};
