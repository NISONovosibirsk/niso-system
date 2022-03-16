import { IReduxActions } from '../../interfaces';
import {
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
                },
                {
                    type: 'textArea',
                    value: '',
                    placeholder: 'Многострочное текстовое поле',
                },
                {
                    type: 'number',
                    value: '',
                    placeholder: 'Числовое поле',
                },
                {
                    type: 'email',
                    value: '',
                    placeholder: 'E-mail поле',
                },
                {
                    type: 'tel',
                    value: '',
                    placeholder: 'Поле номера телефона',
                },
                {
                    type: 'list',
                    value: '',
                    placeholder: 'Выпадающий список',
                },
                {
                    type: 'checkbox',
                    value: '',
                    placeholder: 'Поле для галочки',
                },
                {
                    type: 'list',
                    value: '',
                    placeholder: 'Выбор варианта',
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
    state = initialState,
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
