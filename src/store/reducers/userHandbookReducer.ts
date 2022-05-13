import { IReduxActions, IUserHandbookState } from '../../interfaces';
import {
    ADD_HANDBOOK_INPUT,
    SET_HANDBOOK_POPUP,
} from '../reduxTypes/userHandbookTypes';

const initialState: IUserHandbookState = {
    notes: [],
    createNote: {
        isActive: false,
        newNotes: [{ title: '', value: 0 }],
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
        case ADD_HANDBOOK_INPUT:
            return {
                ...state,
                createNote: { ...state.createNote, newNotes: action.payload },
            };
        default:
            return state;
    }
};
