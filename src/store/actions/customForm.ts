import {
    CHANGE_CUSTOM_INPUTS_VALUES,
    CHANGE_FORM_SUBTITLE,
    CHANGE_FORM_TITLE,
    CHANGE_TITLE,
} from '../types';

export const changeTitle = (value: string) => {
    try {
        return {
            type: CHANGE_TITLE,
            payload: value,
        };
    } catch (err) {
        console.log(err);
    }
};

export const changeFormTitle = (value: string) => {
    try {
        return {
            type: CHANGE_FORM_TITLE,
            payload: value,
        };
    } catch (err) {
        console.log(err);
    }
};

export const changeFormSubtitle = (value: string) => {
    try {
        return {
            type: CHANGE_FORM_SUBTITLE,
            payload: value,
        };
    } catch (err) {
        console.log(err);
    }
};

export const changeCustomInputsValues = (value: any) => {
    try {
        return {
            type: CHANGE_CUSTOM_INPUTS_VALUES,
            payload: value,
        };
    } catch (err) {
        console.log(err);
    }
};
