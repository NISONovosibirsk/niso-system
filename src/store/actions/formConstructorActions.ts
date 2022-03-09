import {
    SET_IS_VALID,
    SET_PREVIEW,
    UPDATE_ADDED_ELEMENTS,
} from '../reduxTypes/formConstructorTypes';

export const updateAddedElements = addedElements => {
    try {
        return { type: UPDATE_ADDED_ELEMENTS, payload: addedElements };
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

export const setIsValid = status => {
    try {
        return { type: SET_IS_VALID, payload: status };
    } catch (error) {
        console.log(error);
    }
};
