import { IReduxActions, ISearchState } from '../../interfaces';
import {
    SET_SEARCH_CHARS,
    SET_SEARCH_RESULTS,
} from '../reduxTypes/searchTypes';

const initialState: ISearchState = {
    chars: '',
    results: [],
};

export const searchReducer = (
    state = {
        ...initialState,
    },
    action: IReduxActions
): ISearchState => {
    switch (action.type) {
        case SET_SEARCH_CHARS:
            return {
                ...state,
                chars: action.payload,
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};
