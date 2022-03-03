import { SET_FORMS, SET_OPENED_FORM } from '../reduxTypes/formsListTypes';

export const setForms = forms => {
    try {
        return { type: SET_FORMS, payload: forms };
    } catch (error) {
        console.log(error);
    }
};

export const setOpenedForm = form => {
    try {
        return { type: SET_OPENED_FORM, payload: form };
    } catch (error) {
        console.log(error);
    }
};
