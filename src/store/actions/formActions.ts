import {
    SORT_ELEMENTS,
    LABLE_CHANGE,
    VALUE_CHANGE,
    ADD_ELEMENT,
    REMOVE_ELEMENT,
    SET_REQUIRED,
    RANGE_CHANGE_MINIMUM,
    RANGE_CHANGE_MAXIMUM,
    GET_SAVED_FORMS,
} from '../types';

export const sortElements = newState => {
    try {
        return { type: SORT_ELEMENTS, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const addElement = newState => {
    try {
        return { type: ADD_ELEMENT, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const lableChange = newState => {
    try {
        return { type: LABLE_CHANGE, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const valueChange = newState => {
    try {
        return { type: VALUE_CHANGE, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const removeElement = newState => {
    try {
        return { type: REMOVE_ELEMENT, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const setRequired = newState => {
    try {
        return { type: SET_REQUIRED, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const rangeChangeMinimum = newState => {
    try {
        return { type: RANGE_CHANGE_MINIMUM, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const rangeChangeMaximum = newState => {
    try {
        return { type: RANGE_CHANGE_MAXIMUM, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const getSavedForms = newState => {
    try {
        return { type: GET_SAVED_FORMS, payload: newState };
    } catch (error) {
        console.log(error);
    }
};
