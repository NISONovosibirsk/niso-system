import { ADD_HANDBOOK_INPUT, SET_HANDBOOK_POPUP } from '../reduxTypes/userHandbookTypes';

export const setHandbookPopup = status => {
    try {
        return { type: SET_HANDBOOK_POPUP, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const addHandbookInput = input => {
    try {
        return { type: ADD_HANDBOOK_INPUT, payload: input };
    } catch (error) {
        console.log(error);
    }
};
