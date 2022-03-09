import { IReduxActions } from '../../interfaces';
import {
    SET_OPEN_STATUS,
    SET_SELECTED_FORM,
    UPDATE_ERROR_MESSAGE,
    UPDATE_FILTER_CHARS,
    UPDATE_SELECTED_SCHOOLS,
} from '../reduxTypes/sendFormPopupTypes';

const initialState = {
    filterChars: '',
    errorMessage: '',
    isOpen: false,
    selectedSchools: [],
    selectedForm: [],
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

        case UPDATE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload,
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
        case SET_SELECTED_FORM:
            return {
                ...state,
                selectedForm: action.payload,
            };
        default:
            return state;
    }
};
