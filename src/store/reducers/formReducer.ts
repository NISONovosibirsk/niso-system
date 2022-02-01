import { LABLE_CHANGE, SORT_ELEMENTS, VALUE_CHANGE } from '../types';

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
            id: 3,
            title: 'Текстовое поле input',
            type: 'text',
            value: '',
            isDisabled: true,
        },
        {
            id: 4,
            title: 'Числовое поле input',
            type: 'number',
            value: '',
            isDisabled: true,
        },
        {
            id: 5,
            title: 'E-mail input',
            type: 'email',
            value: '',
            isDisabled: true,
        },
    ],
};

export const dragAndDropReducer = (
    state = initialState,
    action: dragAndDropActions
): dragAndDropState => {
    switch (action.type) {
        case SORT_ELEMENTS:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
            } = action.payload;

            // moving in constructor field
            if (droppableIdStart === droppableIdEnd) {
                const newState = Array.from(state.constructor);

                const spliced = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...spliced);

                return { ...state, constructor: newState };
            }
            return state;
        case LABLE_CHANGE:
            return { ...state, constructor: action.payload };
        case VALUE_CHANGE:
            return { ...state, constructor: action.payload };
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
    payload: any;
}

export type FormAction = dragAndDropActions;
