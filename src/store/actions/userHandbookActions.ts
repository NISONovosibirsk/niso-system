import {
    ADD_NOTES_TO_HANDBOOK,
    RESET_HANDBOOK_POPUP,
    SET_HANDBOOK_NOTE,
    SET_NEW_HANDBOOK_NOTE,
    SET_HANDBOOK_POPUP,
    SET_IS_VALID,
    UPDATE_PLACEHOLDER_ERROR,
    UPDATE_VALUE_ERROR,
    SET_IS_EDIT,
    UPDATE_HANDBOOK_FILTER,
} from '../reduxTypes/userHandbookTypes';

export const setHandbookPopup = status => {
    try {
        return { type: SET_HANDBOOK_POPUP, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const setNewHandbookNote = notes => {
    try {
        return { type: SET_NEW_HANDBOOK_NOTE, payload: notes };
    } catch (error) {
        console.log(error);
    }
};

export const addNotesToHandbook = notes => {
    try {
        return { type: ADD_NOTES_TO_HANDBOOK, payload: notes };
    } catch (error) {
        console.log(error);
    }
};

export const resetHandbookPopup = () => {
    try {
        return { type: RESET_HANDBOOK_POPUP };
    } catch (error) {
        console.log(error);
    }
};

export const setHandbookNote = notes => {
    try {
        return { type: SET_HANDBOOK_NOTE, payload: notes };
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

export const updatePlaceholderError = error => {
    try {
        return { type: UPDATE_PLACEHOLDER_ERROR, payload: error };
    } catch (error) {
        console.log(error);
    }
};

export const updateValueError = error => {
    try {
        return { type: UPDATE_VALUE_ERROR, payload: error };
    } catch (error) {
        console.log(error);
    }
};

export const setIsEdit = status => {
    try {
        return { type: SET_IS_EDIT, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const updateHandbookFilter = chars => {
    try {
        return { type: UPDATE_HANDBOOK_FILTER, payload: chars };
    } catch (error) {
        console.log(error);
    }
};
