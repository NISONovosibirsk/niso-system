import {
    UPDATE_INSTITUTION_PARAMS,
    UPDATE_PROFILE_INFO,
    UPDATE_POPUP,
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
