import { Dispatch } from 'redux'
import { DROP_ELEMENT, FormAction } from '../reducers/formReducer'

export const dragElement = (elem: any) => {
    return (dispatch: Dispatch<FormAction>) => {
        dispatch({type: DROP_ELEMENT, payload: elem})
    }
}