import {
    ADD_ELEMENT,
    LABLE_CHANGE,
    RANGE_CHANGE_MAXIMUM,
    RANGE_CHANGE_MINIMUM,
    REMOVE_ELEMENT,
    SET_REQUIRED,
    SORT_ELEMENTS,
    GET_SAVED_FORMS,
    VALUE_CHANGE,
    UPDATE_CONSTRUCTOR,
    SET_CURRENT_FORM,
    RESET_CONSTRUCTOR,
} from '../types';
import { IFormState, IDragAndDropActions } from '../../interfaces';

const initialState: IFormState = {
    elements: [
        {
            id: 3,
            type: 'subtitle',
            placeholder: '',
            value: '',
            isDisabled: true,
        },
        {
            id: 4,
            label: 'Однострочное текстовое поле',
            type: 'text',
            placeholder: '',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 5,
            label: 'Многострочное текстовое поле',
            type: 'textArea',
            placeholder: '',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 6,
            label: 'Числовое поле',
            type: 'number',
            placeholder: '',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 7,
            label: 'E-mail поле',
            type: 'email',
            placeholder: '',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 8,
            label: 'Номер телефона поле',
            type: 'tel',
            placeholder: '',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 9,
            label: 'Поле для галочки (checkbox)',
            type: 'checkbox',
            placeholder: false,
            value: false,
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 10,
            label: 'range',
            type: 'range',
            placeholder: '50',
            value: '',
            min: '0',
            max: '100',
            step: '1',
            isDisabled: true,
        },
    ],
    constructor: [
        {
            id: 1,
            type: 'header',
            placeholder: '',
            isDisabled: false,
        },
        {
            id: 2,
            type: 'title',
            placeholder: '',
            isDisabled: false,
        },
    ],

    savedForms: [],
    currentForm: [],
};

export const formReducer = (
    state = initialState,
    action: IDragAndDropActions
): IFormState => {
    switch (action.type) {
        case SORT_ELEMENTS:
            return { ...state, constructor: action.payload };
        case ADD_ELEMENT:
            return { ...state, constructor: action.payload };
        case LABLE_CHANGE:
            return { ...state, constructor: action.payload };
        case VALUE_CHANGE:
            return { ...state, constructor: action.payload };
        case REMOVE_ELEMENT:
            return { ...state, constructor: action.payload };
        case SET_REQUIRED:
            return { ...state, constructor: action.payload };
        case RANGE_CHANGE_MINIMUM:
            return { ...state, constructor: action.payload };
        case RANGE_CHANGE_MAXIMUM:
            return { ...state, constructor: action.payload };
        case GET_SAVED_FORMS:
            return { ...state, savedForms: action.payload };
        case UPDATE_CONSTRUCTOR:
            return { ...state, constructor: action.payload };
        case SET_CURRENT_FORM:
            return { ...state, currentForm: action.payload };
        case RESET_CONSTRUCTOR:
            return { ...state, constructor: initialState.constructor };
        default:
            return state;
    }
};

export type FormAction = IDragAndDropActions;
