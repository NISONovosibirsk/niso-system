import { UPDATE_INSTITUTION_PARAMS } from '../reduxTypes/userProfileTypes';

export const updateParams = newState => {
    try {
        return { type: UPDATE_INSTITUTION_PARAMS, payload: newState };
    } catch (error) {
        console.log(error);
    }
};
