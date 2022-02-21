import { IReduxActions } from '../../interfaces';

const initialState = {
    filterChars: '',
    isOpen: false,
};

export const sendFormPopupReducer = (
    state = initialState,
    action: IReduxActions
) => {
    switch (action.type) {
        case '':
            break;

        default:
            return state;
    }
};
