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
    elements: [],
    constructor: [],
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
