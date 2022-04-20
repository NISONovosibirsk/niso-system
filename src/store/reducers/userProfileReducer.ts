import { IReduxActions, IUserProfileState } from '../../interfaces';
import {
    UPDATE_POPUP,
    UPDATE_INSTITUTION_PARAMS,
    UPDATE_PROFILE_INFO,
    UPDATE_CHANGE_DATA,
    SET_POPUP_TITLE,
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
        verificationCode: '',
        isValid: false,
        isClicked: false,
        error: '',
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
        case SET_POPUP_TITLE:
            return {
                ...state,
                popup: { ...state.popup, title: action.payload },
            };
        case UPDATE_CHANGE_DATA:
            return { ...state, changeData: action.payload };
        default:
            return state;
    }
};
