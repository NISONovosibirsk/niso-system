import { IReduxActions } from '../../interfaces';
import {
    UPDATE_COLUMNS,
    UPDATE_COLUMN_ORDER,
    UPDATE_TASKS,
} from '../reduxTypes/userOrganizerTypes';

const initialState = {
    tasks: {},
    columns: {},
    columnOrder: [] as any[],
};

export const userOrganizerReducer = (
    state = { ...initialState },
    action: IReduxActions
) => {
    switch (action.type) {
        case UPDATE_TASKS:
            return {
                ...state,
                tasks: { ...action.payload },
            };
        case UPDATE_COLUMNS:
            return {
                ...state,
                columns: { ...action.payload },
            };
        case UPDATE_COLUMN_ORDER:
            return {
                ...state,
                columnOrder: [...action.payload],
            };

        default:
            return state;
    }
};
