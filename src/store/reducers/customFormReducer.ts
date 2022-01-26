import {
    CHANGE_CUSTOM_INPUTS_VALUES,
    CHANGE_FORM_SUBTITLE,
    CHANGE_FORM_TITLE,
    CHANGE_TITLE,
} from '../types';

const initialState: any = {
    title: '',
    formTitle: '',
    formSubtitle: '',
    customInputsValues: [],
};

export const customFormReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.payload,
            };
        case CHANGE_FORM_TITLE:
            return {
                ...state,
                formTitle: action.payload,
            };
        case CHANGE_FORM_SUBTITLE:
            return {
                ...state,
                formSubtitle: action.payload,
            };
        case CHANGE_CUSTOM_INPUTS_VALUES:
            const { id, value } = action.payload;
            const newValues = Array.from(state.customInputsValues);

            newValues[id] = value;

            return {
                ...state,
                customInputsValues: newValues,
            };
        default:
            return state;
    }
};
