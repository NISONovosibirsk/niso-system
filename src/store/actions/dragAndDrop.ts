import { SORT_ELEMENTS } from '../types';

export const sortElements = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    try {
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
    } catch (error) {
        console.log(error);
    }
};
