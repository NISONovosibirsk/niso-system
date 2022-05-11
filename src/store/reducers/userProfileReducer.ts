import { IReduxActions, IUserProfileState } from '../../interfaces';
import {
    UPDATE_POPUP,
    UPDATE_INSTITUTION_PARAMS,
    UPDATE_PROFILE_INFO,
    UPDATE_REFERENCE,
    RESET_POPUP,
} from '../reduxTypes/userProfileTypes';

const initialState: IUserProfileState = {
    profile: {
        photo: [],
        name: 'Абрамов Владимир Алексеевич',
        position: 'Генеральный директор',
        userData: [
            {
                type: 'phone',
                value: '+79648728959',
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
    reference: {
        isOpen: false,
        type: '',
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
        case UPDATE_REFERENCE:
            return { ...state, reference: action.payload };
        case RESET_POPUP:
            return { ...state, popup: { ...initialState.popup } };
        default:
            return state;
    }
};
