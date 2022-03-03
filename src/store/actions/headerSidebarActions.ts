import { SET_LOGGED_IN_STATUS } from '../reduxTypes/headerSidebarTypes';

export const setLoggedInStatus = (status: boolean) => {
    try {
        return {
            type: SET_LOGGED_IN_STATUS,
            payload: status,
        };
    } catch (err) {
        console.log(err);
    }
};
