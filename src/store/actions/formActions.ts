import {
    SORT_ELEMENTS,
    LABLE_CHANGE,
    VALUE_CHANGE,
    ADD_ELEMENT,
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
