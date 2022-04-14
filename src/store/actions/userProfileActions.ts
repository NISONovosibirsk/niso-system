import {
    UPDATE_INSTITUTION_PARAMS,
    UPDATE_PROFILE_INFO,
    UPDATE_POPUP,
    UPDATE_CHANGE_DATA,
    SET_POPUP_TITLE
} from '../reduxTypes/userProfileTypes';

export const updateParams = newState => {
    try {
        return { type: UPDATE_INSTITUTION_PARAMS, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const updateProfileInfo = newInfo => {
    try {
        return { type: UPDATE_PROFILE_INFO, payload: newInfo };
    } catch (error) {
        console.log(error);
    }
};

export const updatePopup = newState => {
    try {
        return { type: UPDATE_POPUP, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const updateChangeData = newState => {
    try {
        return { type: UPDATE_CHANGE_DATA, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const setPopupTitle = title => {
    try {
        return { type: SET_POPUP_TITLE, payload: title };
    } catch (error) {
        console.log(error);
    }
};