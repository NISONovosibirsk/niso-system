// actions
export const DROP_ELEMENT = 'DROP_ELEMENT';

// interfaces for state and actions
interface FormState {
    elements: any;
    constructor: any;
}

interface FormActions {
    type: string;
    payload: any[];
}

const initialState: FormState = {
    elements: [
        {
            id: 0,
            title: 'Текстовое поле input',
            type: 'text',
            isDisabled: true,
        },
        {
            id: 1,
            title: 'Числовое поле input',
            type: 'number',
            isDisabled: true,
        },
        {
            id: 2,
            title: 'E-mail input',
            type: 'email',
            isDisabled: true,
        },
    ],
    constructor: [
        {
            id: 666,
            title: 'ТЕСТ',
            type: 'text',
            isDisabled: true,
        },
    ],
};

export const formReducer = (
    state = initialState,
    action: FormActions
): FormState => {
    switch (action.type) {
        case DROP_ELEMENT:
            return { elements: action.payload };
        default:
            return state;
    }
};

export type FormAction = FormActions;
