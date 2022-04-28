import { IReduxActions, IUserProfileState } from '../../interfaces';
import {
    UPDATE_POPUP,
    UPDATE_INSTITUTION_PARAMS,
    UPDATE_PROFILE_INFO,
    UPDATE_CHANGE_DATA,
    RESET_DATA_CHANGING,
    CHANGE_PROFILE_PASSWORD,
    UPDATE_VALIDATION_INPUT,
    UPDATE_VALIDATION_CASES,
} from '../reduxTypes/userProfileTypes';

const initialState: IUserProfileState = {
    profile: {
        photo: [],
        name: 'Абрамов Владимир Алексеевич',
        position: 'Генеральный директор',
        userData: [
            {
                type: 'phone',
                value: '+7 (964) 872 - 89 - 59',
            },
            {
                type: 'email',
                value: 'elcor58@yandex.ru',
            },
            { type: 'password', value: '' },
        ],
    },
    documents: {
        institutionCode: {
            value: '',
            files: [],
        },
        institutionName: {
            value: '',
            files: [],
        },
        institutionInn: {
            value: '',
            files: [],
        },
    },
    popup: {
        isOpen: false,
        type: '',
        title: '',
    },
    changeData: {
        password: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        phone: '',
        email: '',
    },
    validation: {
        isValid: false,
        input: {
            value: '',
            isDirty: false,
        },
        cases: {
            isEmpty: false,
            minLength: false,
            maxLength: false,
        },
        error: '',
    },
};

export const userProfileReducer = (
    state = { ...initialState },
    action: IReduxActions
): IUserProfileState => {
    switch (action.type) {
        case UPDATE_INSTITUTION_PARAMS:
            return { ...state, documents: action.payload };
        case UPDATE_PROFILE_INFO:
            return { ...state, profile: action.payload };
        case UPDATE_POPUP:
            return { ...state, popup: action.payload };
        case UPDATE_CHANGE_DATA:
            return { ...state, changeData: action.payload };
        case RESET_DATA_CHANGING:
            return {
                ...state,
                popup: { ...initialState.popup },
                changeData: {
                    ...state.changeData,
                    password: { ...initialState.changeData.password },
                    // inputs: { ...initialState.changeData.inputs },
                    // validation: { ...initialState.changeData.validation },
                },
                validation: {
                    ...initialState.validation,
                    input: { ...initialState.validation.input },
                    cases: { ...initialState.validation.cases },
                },
            };
        case CHANGE_PROFILE_PASSWORD:
            return {
                ...state,
                changeData: { ...state.changeData, password: action.payload },
            };
        case UPDATE_VALIDATION_INPUT:
            return {
                ...state,
                validation: {
                    ...state.validation,
                    input: action.payload,
                },
            };
        case UPDATE_VALIDATION_CASES:
            return {
                ...state,
                validation: {
                    ...state.validation,
                    cases: action.payload,
                },
            };
        default:
            return state;
    }
};
