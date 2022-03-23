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
                    value: '',
                    placeholder: 'Однострочное текстовое поле',
                    isRequired: true,
                },
                {
                    type: 'textArea',
                    value: '',
                    placeholder: 'Многострочное текстовое поле',
                    isRequired: true,
                },
                {
                    type: 'number',
                    value: '',
                    placeholder: 'Числовое поле',
                    isRequired: true,
                },
                {
                    type: 'email',
                    value: '',
                    placeholder: 'E-mail поле',
                    isRequired: true,
                },
                {
                    type: 'tel',
                    value: '',
                    placeholder: 'Поле номера телефона',
                    isRequired: true,
                },
                {
                    type: 'list',
                    value: '',
                    placeholder: 'Выпадающий список',
                    options: [''],
                    isRequired: true,
                },
                {
                    type: 'checkbox',
                    isChecked: false,
                    value: '',
                    placeholder: 'Поле для галочки',
                    isRequired: true,
                },
                {
                    type: 'radio',
                    placeholder: 'Выбор варианта',
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
