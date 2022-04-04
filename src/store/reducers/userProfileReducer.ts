import { IReduxActions, IUserProfileState } from '../../interfaces';
import {
    UPDATE_POPUP,
    UPDATE_INSTITUTION_PARAMS,
    UPDATE_PROFILE_INFO,
} from '../reduxTypes/userProfileTypes';

const initialState: IUserProfileState = {
    info: {
        photo: [],
        name: 'Абрамов Владимир Алексеевич',
        phone: '+7 (964) 872 - 89 - 59',
        email: 'elcor58@yandex.ru',
        position: 'Генеральный директор',
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
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
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
            return { ...state, info: action.payload };
        case UPDATE_POPUP:
            return { ...state, popup: action.payload };
        default:
            return state;
    }
};
