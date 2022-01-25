import { DRAG_ELEMENT, DROP_ELEMENT } from '../types';

export const dropElement = (element: any) => {
    try {
        return {
            type: DROP_ELEMENT,
            payload: element,
        };
    } catch (e) {
        console.log(e);
    }
};

export const dragElement = (element: any) => {
    try {
        return {
            type: DRAG_ELEMENT,
            payload: element,
        };
    } catch (e) {
        console.log(e);
    }
};
