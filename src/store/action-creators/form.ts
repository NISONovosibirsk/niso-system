import { DROP_ELEMENT, TAKE_ELEMENT } from '../reducers/formReducer';

// actions
export const dropElement = (dispatch: any, elem: any) => {
    try {
        return dispatch({ type: DROP_ELEMENT, payload: elem });
    } catch (e) {
        console.log(e);
    }
};

export const takeElement = (dispatch: any, elem: any) => {
    try {
        return dispatch({ type: TAKE_ELEMENT, payload: elem });
    } catch (e) {
        console.log(e);
    }
};
