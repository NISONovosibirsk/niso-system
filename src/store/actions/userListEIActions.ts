//SEARCH

import {
    UPDATE_SEARCH_CHARS,
    UPDATE_SEARCH_LIST,
} from '../reduxTypes/userListEITypes';

export const updateSearchChars = searchChars => {
    try {
        return { type: UPDATE_SEARCH_CHARS, payload: searchChars };
    } catch (error) {
        console.log(error);
    }
};

export const updateSearchList = searchList => {
    try {
        return { type: UPDATE_SEARCH_LIST, payload: searchList };
    } catch (error) {
        console.log(error);
    }
};
