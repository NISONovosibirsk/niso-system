import { IReduxActions, IUserHandbookState } from '../../interfaces';
import {
    ADD_NOTES_TO_HANDBOOK,
    RESET_HANDBOOK_POPUP,
    SET_NEW_HANDBOOK_NOTE,
    SET_HANDBOOK_POPUP,
    SET_HANDBOOK_NOTE,
    SET_IS_VALID,
    UPDATE_PLACEHOLDER_ERROR,
    UPDATE_VALUE_ERROR,
    SET_IS_EDIT,
    UPDATE_HANDBOOK_FILTER,
} from '../reduxTypes/userHandbookTypes';

const initialState: IUserHandbookState = {
    notes: [],
    createNote: {
        isActive: false,
        newNotes: [{ placeholder: '', value: '', isEdit: false }],
    },
    filter: {
        chars: '',
        error: '',
    },
    isEdit: false,
    isValid: false,
    placeholderError: '',
    valueError: '',
};

export const userHandbookReducer = (
    state = {
        ...initialState,
    },
    action: IReduxActions
): IUserHandbookState => {
    switch (action.type) {
        case SET_HANDBOOK_POPUP:
            return {
                ...state,
                createNote: { ...state.createNote, isActive: action.payload },
                isValid: initialState.isValid,
            };
        case SET_NEW_HANDBOOK_NOTE:
            return {
                ...state,
                createNote: {
                    ...state.createNote,
                    newNotes: [...action.payload],
                },
            };
        case SET_HANDBOOK_NOTE:
            return {
                ...state,
                notes: [...action.payload],
            };
        case ADD_NOTES_TO_HANDBOOK:
            return {
                ...state,
                notes: action.payload,
            };
        case RESET_HANDBOOK_POPUP:
            return {
                ...state,
                createNote: {
                    ...initialState.createNote,
                },
                isValid: initialState.isValid,
                placeholderError: initialState.placeholderError,
                valueError: initialState.valueError,
            };
        case SET_IS_VALID:
            return {
                ...state,
                isValid: action.payload,
            };
        case UPDATE_PLACEHOLDER_ERROR:
            return {
                ...state,
                placeholderError: action.payload,
            };
        case UPDATE_VALUE_ERROR:
            return {
                ...state,
                valueError: action.payload,
            };
        case SET_IS_EDIT:
            return {
                ...state,
                isEdit: action.payload,
            };
        case UPDATE_HANDBOOK_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};
