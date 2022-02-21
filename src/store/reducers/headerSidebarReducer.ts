import { IHeaderSidebarState, IReduxActions } from '../../interfaces';
import { SET_LOGGED_IN_STATUS } from '../types';

const initialState: IHeaderSidebarState = {
    isOpen: false,
};

export const headerSidebarReducer = (
    state = initialState,
    action: IReduxActions
): IHeaderSidebarState => {
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
