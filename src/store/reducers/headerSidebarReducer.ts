import { SET_LOGGED_IN_STATUS } from '../types';

interface SidebarState {
    isOpen: boolean;
}

const initialState: SidebarState = {
    isOpen: false,
};

export const sidebarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LOGGED_IN_STATUS:
            return { ...state, isOpen: action.payload };
        default:
            return state;
    }
};
