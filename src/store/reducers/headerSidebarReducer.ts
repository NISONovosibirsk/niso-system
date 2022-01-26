import { SET_LOGGED_IN_STATUS } from '../types';

interface headerSidebarState {
    isOpen: boolean;
}

const initialState: headerSidebarState = {
    isOpen: false,
};

export const headerSidebarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LOGGED_IN_STATUS:
            return {
                ...state,
                isOpen: action.payload,
            };
        default:
            return state;
    }
};
