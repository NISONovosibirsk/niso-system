import { IReduxActions, IUserHandbookState } from '../../interfaces';
import {
    ADD_NOTES_TO_HANDBOOK,
    SET_HANDBOOK_NOTE,
    SET_HANDBOOK_POPUP,
} from '../reduxTypes/userHandbookTypes';

const initialState: IUserHandbookState = {
    notes: [],
    createNote: {
        isActive: false,
        newNotes: [{ placeholder: '', value: 0 }],
    },
    filter: {},
};

export const userHandbookReducer = (
    state = { ...initialState },
    action: IReduxActions
): IUserHandbookState => {
    switch (action.type) {
        case SET_HANDBOOK_POPUP:
            return {
                ...state,
                createNote: { ...state.createNote, isActive: action.payload },
            };
        case SET_HANDBOOK_NOTE:
            return {
                ...state,
                createNote: { ...state.createNote, newNotes: action.payload },
            };
        case ADD_NOTES_TO_HANDBOOK:
            return {
                ...state,
                notes: action.payload,
            };
        default:
            return state;
    }
};
