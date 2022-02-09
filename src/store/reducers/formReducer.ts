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
} from '../types';
import { IFormState, IDragAndDropActions } from '../../interfaces';

const initialState: IFormState = {
    elements: [
        {
            id: 1,
            title: 'Заголовок',
            type: 'title',
            value: '',
            isDisabled: true,
        },
        {
            id: 2,
            title: 'Название формы',
            type: 'header',
            value: '',
            isDisabled: true,
        },
        {
            id: 3,
            title: 'Подзаголовок',
            type: 'subtitle',
            value: '',
            isDisabled: true,
        },
        {
            id: 4,
            title: 'Однострочное текстовое поле',
            type: 'text',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 5,
            title: 'Многострочное текстовое поле',
            type: 'textArea',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 6,
            title: 'Числовое поле',
            type: 'number',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 7,
            title: 'E-mail поле',
            type: 'email',
            value: '',
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 8,
            title: 'Поле для галочки (checkbox)',
            type: 'checkbox',
            value: false,
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 9,
            title: 'range',
            type: 'range',
            value: 50,
            min: 0,
            max: 100,
            isDisabled: true,
            isRequired: true,
        },
    ],
    constructor: [],

    savedForms: {},
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
        default:
            return state;
    }
};

export type FormAction = IDragAndDropActions;
