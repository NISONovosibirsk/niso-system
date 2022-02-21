import {
    UPDATE_ADDED_ELEMENTS,
    SET_PREVIEW,
} from '../types';
import { IConstructorState, IReduxActions } from '../../interfaces';

const initialState: IConstructorState = {
    initialElements: [
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
    addedElements: [
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
    isPreview: false,
};

export const formConstructorReducer = (
    state = initialState,
    action: IReduxActions
): IConstructorState => {
    switch (action.type) {
        case UPDATE_ADDED_ELEMENTS:
            return {
                ...state,
                addedElements: action.payload,
            };

        case SET_PREVIEW:
            return {
                ...state,
                isPreview: action.payload,
            };

        default:
            return state;
    }
};
