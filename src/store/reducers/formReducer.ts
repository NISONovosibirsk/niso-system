import {
    ADD_ELEMENT,
    LABLE_CHANGE,
    REMOVE_ELEMENT,
    SORT_ELEMENTS,
    VALUE_CHANGE,
} from '../types';
import { IFormState, IDragAndDropActions } from '../../interfaces';

const initialState: IFormState = {
    elements: [
        {
            id: 0,
            title: 'Текстовое поле input',
            type: 'text',
            value: '',
            isDisabled: true,
        },
        {
            id: 1,
            title: 'Числовое поле input',
            type: 'number',
            value: '',
            isDisabled: true,
        },
        {
            id: 2,
            title: 'E-mail input',
            type: 'email',
            value: '',
            isDisabled: true,
        },
        {
            id: 3,
            title: 'Поле для галочки (checkbox)',
            type: 'checkbox',
            value: false,
            isDisabled: true,
        },
        {
            id: 4,
            title: 'Название формы',
            type: 'header',
            value: false,
            isDisabled: true,
        },
        {
            id: 5,
            title: 'Заголовок',
            type: 'title',
            value: false,
            isDisabled: true,
        },
        {
            id: 6,
            title: 'Подзаголовок',
            type: 'subtitle',
            value: false,
            isDisabled: true,
        },
        {
            id: 7,
            title: 'Поле текста',
            type: 'textArea',
            value: false,
            isDisabled: true,
        },
    ],
    constructor: [
        {
            id: 10,
            title: 'Текстовое поле input',
            type: 'text',
            value: '',
            isDisabled: false,
        },
        {
            id: 11,
            title: 'Числовое поле input',
            type: 'number',
            value: '',
            isDisabled: false,
        },
        {
            id: 12,
            title: 'E-mail input',
            type: 'email',
            value: '',
            isDisabled: false,
        },
    ],
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
        default:
            return state;
    }
};

export type FormAction = IDragAndDropActions;
