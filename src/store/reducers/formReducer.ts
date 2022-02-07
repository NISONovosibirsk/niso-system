import {
    ADD_ELEMENT,
    LABLE_CHANGE,
    REMOVE_ELEMENT,
    SET_REQUIRED,
    SORT_ELEMENTS,
    VALUE_CHANGE,
} from '../types';
import { IFormState, IDragAndDropActions } from '../../interfaces';

const initialState: IFormState = {
    elements: [
        {
            id: 0,
            title: 'Однострочное текстовое поле',
            type: 'text',
            value: '',
            isDisabled: true,
            isRequired: false,
        },
        {
            id: 1,
            title: 'Многострочное текстовое поле',
            type: 'textArea',
            value: '',
            isDisabled: true,
            isRequired: false,
        },
        {
            id: 2,
            title: 'Числовое поле',
            type: 'number',
            value: '',
            isDisabled: true,
            isRequired: false,
        },
        {
            id: 3,
            title: 'E-mail поле',
            type: 'email',
            value: '',
            isDisabled: true,
            isRequired: false,
        },
        {
            id: 4,
            title: 'Поле для галочки (checkbox)',
            type: 'checkbox',
            value: false,
            isDisabled: true,
            isRequired: false,
        },
        {
            id: 5,
            title: 'Название формы',
            type: 'header',
            value: '',
            isDisabled: true,
            isRequired: false,
        },
        {
            id: 6,
            title: 'Заголовок',
            type: 'title',
            value: '',
            isDisabled: true,
            isRequired: false,
        },
        {
            id: 7,
            title: 'Подзаголовок',
            type: 'subtitle',
            value: '',
            isDisabled: true,
            isRequired: false,
        },
    ],
    constructor: [],
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
        default:
            return state;
    }
};

export type FormAction = IDragAndDropActions;
