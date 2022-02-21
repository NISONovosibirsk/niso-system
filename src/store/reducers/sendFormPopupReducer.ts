import { IReduxActions } from '../../interfaces';
import {
    SET_OPEN_STATUS,
    UPDATE_FILTER_CHARS,
    UPDATE_SELECTED_SCHOOLS,
} from '../types';

const initialState = {
    filterChars: '',
    isOpen: false,
    selectedSchools: [],
};

export const sendFormPopupReducer = (
    state = initialState,
    action: IReduxActions
) => {
    switch (action.type) {
        case UPDATE_FILTER_CHARS:
            return {
                ...state,
                filterChars: action.payload,
            };

        case SET_OPEN_STATUS:
            return {
                ...state,
                isOpen: action.payload,
            };

        case UPDATE_SELECTED_SCHOOLS:
            return {
                ...state,
                selectedSchools: action.payload,
            };

        default:
            return state;
    }
};
