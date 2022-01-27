import { DRAG_ELEMENT, DROP_ELEMENT, REPLACE_ELEMENT } from '../types';

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
    constructor: [],
    currentElement: {},
};

export const dragAndDropReducer = (
    state = initialState,
    action: dragAndDropActions
): dragAndDropState => {
    switch (action.type) {
        case DRAG_ELEMENT:
            return {
                ...state,
                currentElement: action.payload,
            };
        case DROP_ELEMENT:
            return {
                ...state,
                constructor: [...state.constructor, action.payload],
                currentElement: {},
            };
        case REPLACE_ELEMENT:
            const { index, currentIndex } = action.payload;
            const constructorCopy = Array.from(state.constructor);

            constructorCopy.splice(currentIndex, 1);

            constructorCopy.splice(index, 0, state.currentElement);

            // console.log(constructorCopy);

            // console.log(state.currentElement);

            // const splicedCopy = constructorCopy.splice(
            //     index,
            //     0,
            //     state.currentElement
            // );

            // console.log(splicedCopy);

            return {
                ...state,
                constructor: [...constructorCopy],
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
    payload: any;
}

export type FormAction = dragAndDropActions;
