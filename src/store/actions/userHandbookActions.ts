import {
    ADD_NOTES_TO_HANDBOOK,
    SET_HANDBOOK_NOTE,
    SET_HANDBOOK_POPUP,
} from '../reduxTypes/userHandbookTypes';

export const setHandbookPopup = status => {
    try {
        return { type: SET_HANDBOOK_POPUP, payload: status };
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

export const addNotesToHandbook = notes => {
    try {
        return { type: ADD_NOTES_TO_HANDBOOK, payload: notes };
    } catch (error) {
        console.log(error);
    }
};
