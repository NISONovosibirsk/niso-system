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
    ],
    constructor: [
        {
            id: 4,
            title: 'Текстовое поле input',
            type: 'text',
            value: '',
            isDisabled: false,
        },
        {
            id: 5,
            title: 'Числовое поле input',
            type: 'number',
            value: '',
            isDisabled: false,
        },
        {
            id: 6,
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
