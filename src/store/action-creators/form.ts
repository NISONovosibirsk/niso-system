import { DROP_ELEMENT, TAKE_ELEMENT } from '../reducers/formReducer';

// actions
export const dropElement = (elem: any) => {
    try {
        return { type: DROP_ELEMENT, payload: elem };
    } catch (e) {
        console.log(e);
    }
};

export const takeElement = (elem: any) => {
    try {
        return { type: TAKE_ELEMENT, payload: elem };
    } catch (e) {
        console.log(e);
    }
};
