import { useDispatch } from 'react-redux';
import { DROP_ELEMENT } from '../reducers/formReducer';

// init dispatch
// const dispatch = useDispatch();

// actions
export const dropElement = (dispatch: any, elem: any) => {
    try {
        return dispatch({ type: DROP_ELEMENT, payload: elem });
    } catch (e) {
        console.log(e)
    }
};
