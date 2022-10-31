import { IReduxActions } from '../../interfaces';
import {
    RESET_CREATE,
    SET_DOWNLOAD_IS_OPEN,
    SET_IS_OPEN,
    SET_IS_VALID,
    SET_POPUP_IS_OPEN,
    UPDATE_CREATE_FOR_EDIT,
    UPDATE_CREATE_SUBTITLE,
    UPDATE_CREATE_TITLE,
    UPDATE_ELEMENTS,
    UPDATE_SEARCH_LIST,
    UPDATE_SEARCH_CHARS,
    UPDATE_SEARCH_TABS,
    UPDATE_POPUP_FILTER_CHARS,
    UPDATE_REPORTS,
    UPDATE_TARGET_REPORT,
    UPDATE_CREATE_DEADLINE_DATE,
} from '../reduxTypes/userConstructorTypes';

const initialState = {
    create: {
        title: { value: '', error: '' },
        subtitle: { value: '', error: '' },
        deadlineDate: '',
        isValid: false,
        elements: [],
        popup: {
            elements: [
                {
                    type: 'input',
                    name: 'Однострочное текстовое поле',
                    values: [''],
                    error: '',
                    placeholder: '',
                    isRequired: true,
                    valuesCount: '1',
                },
                {
                    type: 'textArea',
                    name: 'Многострочное текстовое поле',
                    values: [''],
                    error: '',
                    placeholder: '',
                    isRequired: true,
                    valuesCount: '1',
                },
                {
                    type: 'number',
                    name: 'Числовое поле',
                    values: [''],
                    error: '',
                    placeholder: '',
                    isRequired: true,
                    valuesCount: '1',
                },
                {
                    type: 'email',
                    name: 'E-mail поле',
                    values: [''],
                    error: '',
                    placeholder: '',
                    isRequired: true,
                    valuesCount: '1',
                },
                {
                    type: 'tel',
                    name: 'Поле номера телефона',
                    values: [''],
                    error: '',
                    placeholder: '',
                    isRequired: true,
                    valuesCount: '1',
                },
                {
                    type: 'list',
                    name: 'Выпадающий список',
                    values: [''],
                    error: '',
                    placeholder: '',
                    options: [''],
                    isRequired: true,
                },
                {
                    type: 'percent',
                    name: 'Процентное поле',
                    values: [''],
                    maxValue: '',
                    error: '',
                    placeholder: '',
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
    createdReports: {
        reports: [],
        targetReport: {},
        downloadIsOpen: false,
        sendReportPopup: {
            isOpen: false,
            filterChars: { value: '', error: '' },
        },
    },
    search: {
        chars: '',
        filter: {
            list: [
                {
                    title: 'Район',
                    options: [
                        'Дзержинский',
                        'Железнодорожный',
                        'Заельцовский',
                        'Калининский',
                        'Кировский',
                        'Ленинский',
                        'Октябрьский',
                        'Первомайский',
                        'Советский',
                        'Центральный',
                    ],
                    picked: [],
                },
                {
                    title: 'Дата',
                    options: ['1 Дата', '2 Дата', '3 Дата'],
                    picked: [],
                },
                {
                    title: 'Номер',
                    options: ['1', '2', '3'],
                    picked: [],
                },
            ],
        },
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
        //CREATE
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
        case UPDATE_CREATE_DEADLINE_DATE:
            return {
                ...state,
                create: {
                    ...state.create,
                    deadlineDate: action.payload,
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
        case UPDATE_CREATE_FOR_EDIT:
            return {
                ...state,
                create: {
                    ...state.create,
                    ...action.payload,
                },
            };
        case RESET_CREATE:
            return {
                ...state,
                create: { ...initialState.create },
            };

        //CREATED REPORTS
        case UPDATE_REPORTS:
            return {
                ...state,
                createdReports: {
                    ...state.createdReports,
                    reports: action.payload,
                },
            };
        case UPDATE_TARGET_REPORT:
            return {
                ...state,
                createdReports: {
                    ...state.createdReports,
                    targetReport: action.payload,
                },
            };
        case SET_DOWNLOAD_IS_OPEN:
            return {
                ...state,
                createdReports: {
                    ...state.createdReports,
                    downloadIsOpen: action.payload,
                },
            };
        case SET_POPUP_IS_OPEN:
            return {
                ...state,
                createdReports: {
                    ...state.createdReports,
                    sendReportPopup: {
                        ...state.createdReports.sendReportPopup,
                        isOpen: action.payload,
                    },
                },
            };
        case UPDATE_POPUP_FILTER_CHARS:
            return {
                ...state,
                createdReports: {
                    ...state.createdReports,
                    sendReportPopup: {
                        ...state.createdReports.sendReportPopup,
                        filterChars: action.payload,
                    },
                },
            };

        //FILTER
        case UPDATE_SEARCH_CHARS:
            return {
                ...state,
                search: {
                    ...state.search,
                    chars: action.payload,
                },
            };
        case UPDATE_SEARCH_LIST:
            return {
                ...state,
                search: {
                    ...state.search,
                    list: action.payload,
                },
            };
        case UPDATE_SEARCH_TABS:
            return {
                ...state,
                search: {
                    ...state.search,
                    tabs: action.payload,
                },
            };

        default:
            return state;
    }
};
