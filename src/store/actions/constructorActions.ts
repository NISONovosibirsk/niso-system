import {
    GET_SAVED_FORMS,
    UPDATE_ADDED_ELEMENTS,
    SET_CURRENT_FORM,
    SET_PREVIEW,
    UPDATE_STATUS,
    SET_SEARCH_INPUT,
} from '../types';

export const getSavedForms = newState => {
    try {
        return { type: GET_SAVED_FORMS, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const updateAddedElements = newState => {
    try {
        return { type: UPDATE_ADDED_ELEMENTS, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const setCurrentForm = newState => {
    try {
        return { type: SET_CURRENT_FORM, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const setPreview = status => {
    try {
        return { type: SET_PREVIEW, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const updateStatus = newState => {
    try {
        return { type: UPDATE_STATUS, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const setSearchInput = input => {
    try {
        return { type: SET_SEARCH_INPUT, payload: input };
    } catch (error) {
        console.log(error);
    }
};
