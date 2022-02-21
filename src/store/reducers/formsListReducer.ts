import { IReduxActions } from '../../interfaces';
import { SET_FORMS, SET_OPENED_FORM } from '../types';

const initialState = {
    forms: [],
    openedForm: {},
};

export const formsListReducer = (
    state = initialState,
    action: IReduxActions
) => {
    switch (action.type) {
        case SET_FORMS:
            return {
                ...state,
                forms: action.payload,
            };

        case SET_OPENED_FORM:
            return {
                ...state,
                openedForm: action.payload,
            };

        default:
            return state;
    }
};
