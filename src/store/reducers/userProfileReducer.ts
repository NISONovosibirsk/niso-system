import { IReduxActions, IUserProfileState } from '../../interfaces';
import {
    UPDATE_POPUP,
    UPDATE_INSTITUTION_PARAMS,
    UPDATE_PROFILE_INFO,
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
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        email: '',
        phone: '',
    },
};

export const userProfileReducer = (
    state = initialState,
    action: IReduxActions
): IUserProfileState => {
    switch (action.type) {
        case UPDATE_INSTITUTION_PARAMS:
            return { ...state, documents: action.payload };
        case UPDATE_PROFILE_INFO:
            return { ...state, profile: action.payload };
        case UPDATE_POPUP:
            return { ...state, popup: action.payload };
        default:
            return state;
    }
};
