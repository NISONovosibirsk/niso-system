import { IReduxActions } from '../../interfaces';
import {
    RESET_CREATE,
    SET_IS_OPEN,
    SET_IS_VALID,
    UPDATE_CREATE_SUBTITLE,
    UPDATE_CREATE_TITLE,
    UPDATE_ELEMENTS,
    UPDATE_FILTER_ACCESS,
    UPDATE_FILTER_CHARS,
    UPDATE_FILTER_TABS,
} from '../reduxTypes/userConstructorTypes';

const initialState = {
    create: {
        title: { value: '', error: '' },
        subtitle: { value: '', error: '' },
        isValid: false,
        elements: [],
        popup: {
            elements: [
                {
                    type: 'input',
                    name: 'Однострочное текстовое поле',
                    value: '',
                    error: '',
                    placeholder: '',
                    isRequired: true,
                },
                {
                    type: 'textArea',
                    name: 'Многострочное текстовое поле',
                    value: '',
                    error: '',
                    placeholder: '',
                    isRequired: true,
                },
                {
                    type: 'number',
                    name: 'Числовое поле',
                    value: '',
                    error: '',
                    placeholder: '',
                    isRequired: true,
                },
                {
                    type: 'email',
                    name: 'E-mail поле',
                    value: '',
                    error: '',
                    placeholder: '',
                    isRequired: true,
                },
                {
                    type: 'tel',
                    name: 'Поле номера телефона',
                    value: '',
                    error: '',
                    placeholder: '',
                    isRequired: true,
                },
                {
                    type: 'list',
                    name: 'Выпадающий список',
                    value: '',
                    error: '',
                    placeholder: '',
                    options: [''],
                    isRequired: true,
                },
                {
                    type: 'checkbox',
                    name: 'Поле для галочки',
                    title: '',
                    isChecked: false,
                    isRequired: true,
                },
                {
                    type: 'radio',
                    name: 'Выбор варианта',
                    radios: [{ title: '', isChecked: true }],
                },
            ],
            isOpen: false,
        },
    },
    filter: {
        chars: '',
        access: '',
        tabs: {
            all: true,
            my: false,
            approve: false,
        },
    },
};

export const userConstructorReducer = (
    state = { ...initialState },
    action: IReduxActions
) => {
    switch (action.type) {
        case UPDATE_CREATE_TITLE:
            return {
                ...state,
                create: {
                    ...state.create,
                    title: action.payload,
                },
            };
        case UPDATE_CREATE_SUBTITLE:
            return {
                ...state,
                create: {
                    ...state.create,
                    subtitle: action.payload,
                },
            };
        case SET_IS_VALID:
            return {
                ...state,
                create: {
                    ...state.create,
                    isValid: action.payload,
                },
            };
        case UPDATE_ELEMENTS:
            return {
                ...state,
                create: {
                    ...state.create,
                    elements: action.payload,
                },
            };
        case SET_IS_OPEN:
            return {
                ...state,
                create: {
                    ...state.create,
                    popup: {
                        ...state.create.popup,
                        isOpen: action.payload,
                    },
                },
            };
        case RESET_CREATE:
            return {
                ...state,
                create: { ...initialState.create },
            };

        case UPDATE_FILTER_CHARS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    chars: action.payload,
                },
            };
        case UPDATE_FILTER_ACCESS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    access: action.payload,
                },
            };
        case UPDATE_FILTER_TABS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    tabs: action.payload,
                },
            };

        default:
            return state;
    }
};
