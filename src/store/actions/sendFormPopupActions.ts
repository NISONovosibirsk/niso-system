import {
    SET_OPEN_STATUS,
    SET_SELECTED_FORM,
    UPDATE_FILTER_CHARS,
    UPDATE_SELECTED_SCHOOLS,
} from '../types';

export const updateFilterChars = value => {
    try {
        return { type: UPDATE_FILTER_CHARS, payload: value };
    } catch (error) {
        console.log(error);
    }
};

export const setOpenStatus = status => {
    try {
        return { type: SET_OPEN_STATUS, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const updateSelectedSchools = selectedSchools => {
    try {
        return { type: UPDATE_SELECTED_SCHOOLS, payload: selectedSchools };
    } catch (error) {
        console.log(error);
    }
};

export const setSelectedForm = selectedForm => {
    try {
        return { type: SET_SELECTED_FORM, payload: selectedForm };
    } catch (error) {
        console.log(error);
    }
};