import {
    UPDATE_CONSTRUCTOR,
    SET_CURRENT_FORM,
    SET_PREVIEW,
    GET_SAVED_FORMS,
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
            label: 'Выпадающий список',
            type: 'list',
            placeholder: '',
            value: '',
            datalist: [],
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 10,
            label: 'Поле для галочки (checkbox)',
            type: 'checkbox',
            value: false,
            isDisabled: true,
            isRequired: true,
        },
        {
            id: 11,
            label: 'Выбор варианта',
            type: 'radio',
            radiolist: [],
            isDisabled: true,
        },
        {
            id: 12,
            label: 'Ползунок',
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
    isPreview: false,
};

export const formReducer = (
    state = initialState,
    action: IDragAndDropActions
): IFormState => {
    switch (action.type) {
        case UPDATE_CONSTRUCTOR:
            return { ...state, constructor: action.payload };
        case SET_CURRENT_FORM:
            return { ...state, currentForm: action.payload };
        case SET_PREVIEW:
            return { ...state, isPreview: action.payload };
        case GET_SAVED_FORMS:
            return { ...state, savedForms: action.payload };
        default:
            return state;
    }
};

export type FormAction = IDragAndDropActions;
