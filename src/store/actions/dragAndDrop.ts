import { SORT_ELEMENTS, LABLE_CHANGE, VALUE_CHANGE } from '../types';

// export const sortElements = (
//     droppableIdStart,
//     droppableIdEnd,
//     droppableIndexStart,
//     droppableIndexEnd,
//     draggableId
// ) => {
//     try {
//         return {
//             type: SORT_ELEMENTS,
//             payload: {
//                 droppableIdStart,
//                 droppableIdEnd,
//                 droppableIndexStart,
//                 droppableIndexEnd,
//                 draggableId,
//             },
//         };
//     } catch (error) {
//         console.log(error);
//     }
// };

export const sortElements = newState => {
    try {
        return {type: SORT_ELEMENTS, payload: newState}
    } catch (error) {
        console.log(error)
    }
}

export const lableChange = newState => {
    try {
        return { type: LABLE_CHANGE, payload: newState };
    } catch (error) {
        console.log(error);
    }
};

export const valueChange = newState => {
    try {
        return { type: VALUE_CHANGE, payload: newState };
    } catch (error) {
        console.log(error);
    }
};
