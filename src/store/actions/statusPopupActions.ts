import {
    SET_OPEN_STATUS,
    UPDATE_STATUS_CODE,
    UPDATE_STATUS_TEXT,
} from '../reduxTypes/statusPopupTypes';

export const setOpenStatus = status => {
    try {
        return { type: SET_OPEN_STATUS, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const updateStatusText = text => {
    try {
        return { type: UPDATE_STATUS_TEXT, payload: text };
    } catch (error) {
        console.log(error);
    }
};

export const updateStatusCode = code => {
    try {
        return { type: UPDATE_STATUS_CODE, payload: code };
    } catch (error) {
        console.log(error);
    }
};
