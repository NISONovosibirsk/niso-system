import { IReduxActions } from '../../interfaces';
import {
    SET_OPEN_STATUS,
    UPDATE_STATUS_CODE,
    UPDATE_STATUS_TEXT,
} from '../reduxTypes/statusPopupTypes';

const initialState = {
    isOpen: false,
    statusText: '',
    statusCode: '',
};

export const statusPopupReducer = (
    state = initialState,
    action: IReduxActions
) => {
    switch (action.type) {
        case SET_OPEN_STATUS:
            return {
                ...state,
                isOpen: action.payload,
            };

        case UPDATE_STATUS_TEXT:
            return {
                ...state,
                statusText: action.payload,
            };

        case UPDATE_STATUS_CODE:
            return {
                ...state,
                statusCode: action.payload,
            };

        default:
            return state;
    }
};
