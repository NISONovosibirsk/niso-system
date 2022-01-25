import { DRAG_ELEMENT, DROP_ELEMENT } from '../types';

const initialState: dragAndDropState = {
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
    currentElement: {},
};

export const dragAndDropReducer = (
    state = initialState,
    action: dragAndDropActions
): dragAndDropState => {
    switch (action.type) {
        case DRAG_ELEMENT:
            return { ...state, currentElement: action.payload };
        case DROP_ELEMENT:
            return {
                ...state,
                constructor: [...state.constructor, action.payload],
            };
        default:
            return state;
    }
};

// interfaces for state and actions
interface dragAndDropState {
    elements?: any;
    constructor: any;
    currentElement?: any;
}

interface dragAndDropActions {
    type: string;
    payload: any[];
}

export type FormAction = dragAndDropActions;
