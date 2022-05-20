import {
    SET_SEARCH_CHARS,
    SET_SEARCH_RESULTS,
} from '../reduxTypes/searchTypes';

export const setSearchChars = chars => {
    try {
        return { type: SET_SEARCH_CHARS, payload: chars };
    } catch (error) {
        console.log(error);
    }
};

export const setSearchResults = results => {
    try {
        return { type: SET_SEARCH_RESULTS, payload: results };
    } catch (error) {
        console.log(error);
    }
};
