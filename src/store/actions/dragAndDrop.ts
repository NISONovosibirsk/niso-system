import {
    DRAG_ELEMENT,
    DROP_ELEMENT,
    REPLACE_ELEMENT,
    SORT_ELEMENTS,
} from '../types';

export const dragElement = (element: any) => {
    try {
        return {
            type: DRAG_ELEMENT,
            payload: element,
        };
    } catch (err) {
        console.log(err);
    }
};

export const dropElement = (element: any) => {
    try {
        return {
            type: DROP_ELEMENT,
            payload: element,
        };
    } catch (err) {
        console.log(err);
    }
};

export const replaceElement = ({
    index,
    currentIndex,
}: {
    index: number;
    currentIndex: number;
}) => {
    try {
        return {
            type: REPLACE_ELEMENT,
            payload: {
                index,
                currentIndex,
            },
        };
    } catch (err) {
        console.log(err);
    }
};

export const sortElements = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    return {
        type: SORT_ELEMENTS,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
        },
    };
};
