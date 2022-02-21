import { UPDATE_ADDED_ELEMENTS, SET_PREVIEW } from '../types';

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
