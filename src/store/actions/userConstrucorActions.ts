import {
    UPDATE_FILTER_ACCESS,
    UPDATE_FILTER_CHARS,
    UPDATE_FILTER_TABS,
} from '../reduxTypes/userConstructorTypes';

export const updateFilterChars = filterChars => {
    try {
        return { type: UPDATE_FILTER_CHARS, payload: filterChars };
    } catch (error) {
        console.log(error);
    }
};

export const updateFilterAccess = filterAccess => {
    try {
        return { type: UPDATE_FILTER_ACCESS, payload: filterAccess };
    } catch (error) {
        console.log(error);
    }
};

export const updateFilterTabs = filterTabs => {
    try {
        return { type: UPDATE_FILTER_TABS, payload: filterTabs };
    } catch (error) {
        console.log(error);
    }
};
