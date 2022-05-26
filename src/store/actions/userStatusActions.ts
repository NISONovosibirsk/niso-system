import { UPDATE_LOGIN_STATUS, UPDATE_USER_POPUP } from '../reduxTypes/userStatusTypes';

export const updateLoginStatus = status => {
    try {
        return { type: UPDATE_LOGIN_STATUS, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const updateUserPopup = status => {
    try {
        return { type: UPDATE_USER_POPUP, payload: status };
    } catch (error) {
        console.log(error);
    }
};