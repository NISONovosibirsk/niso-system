import {
    UPDATE_INSTITUTION_PARAMS,
    UPDATE_PROFILE_INFO,
    UPDATE_POPUP,
    UPDATE_CHANGE_DATA,
    RESET_DATA_CHANGING,
    CHANGE_PROFILE_PASSWORD,
    UPDATE_VALIDATION_INPUT,
    UPDATE_VALIDATION_CASES,
    SET_FORM_VALID,
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

// reset data in editing inputs and close popup
export const resetDataChanging = () => {
    try {
        return { type: RESET_DATA_CHANGING };
    } catch (error) {
        console.log(error);
    }
};

// set new state for password editing inputs
export const changeProfilePassword = passwords => {
    try {
        return { type: CHANGE_PROFILE_PASSWORD, payload: passwords };
    } catch (error) {
        console.log(error);
    }
};

// update validating input
export const updateValidationInput = input => {
    try {
        return { type: UPDATE_VALIDATION_INPUT, payload: input };
    } catch (error) {
        console.log(error);
    }
};

// update validation cases state
export const updateValidationCases = cases => {
    try {
        return { type: UPDATE_VALIDATION_CASES, payload: cases };
    } catch (error) {
        console.log(error);
    }
};

export const setFormValid = validity => {
    try {
        return { type: SET_FORM_VALID, payload: validity };
    } catch (error) {
        console.log(error);
    }
};
