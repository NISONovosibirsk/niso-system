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

export const updateEmailValue = value => {
    try {
        return { type: UPDATE_EMAIL, payload: value };
    } catch (error) {
        console.log(error);
    }
};
export const updateEmailErrorMessage = message => {
    try {
        return { type: UPDATE_EMAIL_ERROR, payload: message };
    } catch (error) {
        console.log(error);
    }
};

export const updatePasswordValue = value => {
    try {
        return { type: UPDATE_PASSWORD, payload: value };
    } catch (error) {
        console.log(error);
    }
};

export const updatePasswordErrorMessage = message => {
    try {
        return { type: UPDATE_PASSWORD_ERROR, payload: message };
    } catch (error) {
        console.log(error);
    }
};

export const updateRepeatPasswordValue = value => {
    try {
        return { type: UPDATE_REPEAT_PASSWORD, payload: value };
    } catch (error) {
        console.log(error);
    }
};

export const updateRepeatPasswordErrorMessage = message => {
    try {
        return { type: UPDATE_REPEAT_PASSWORD_ERROR, payload: message };
    } catch (error) {
        console.log(error);
    }
};

export const setIsValid = status => {
    try {
        return { type: SET_IS_VALID, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const resetForm = () => {
    try {
        return { type: RESET_FORM };
    } catch (error) {
        console.log(error);
    }
};
