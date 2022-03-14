import { IReduxActions } from '../../interfaces';
import {
    UPDATE_FILTER_ACCESS,
    UPDATE_FILTER_CHARS,
    UPDATE_FILTER_TABS,
} from '../reduxTypes/userConstructorTypes';

const initialState = {
    filter: {
        chars: '',
        access: '',
        tabs: {
            all: true,
            my: false,
            approve: false,
        },
    },
};

export const userConstructorReducer = (
    state = initialState,
    action: IReduxActions
) => {
    switch (action.type) {
        case UPDATE_FILTER_CHARS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    chars: action.payload,
                },
            };
        case UPDATE_FILTER_ACCESS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    access: action.payload,
                },
            };
        case UPDATE_FILTER_TABS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    tabs: action.payload,
                },
            };

        default:
            return state;
    }
};
