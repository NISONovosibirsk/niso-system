import { IReduxActions, IUserProfileState } from '../../interfaces';
import { UPDATE_INSTITUTION_PARAMS } from '../reduxTypes/userProfileTypes';

const initialState: IUserProfileState = {
    documents: {
        institutionCode: {
            value: '',
            files: null,
        },
        institutionName: {
            value: '',
            files: [],
        },
        institutionInn: {
            value: '',
            files: [],
        },
    },
};

export const userProfileReducer = (
    state = initialState,
    action: IReduxActions
): IUserProfileState => {
    switch (action.type) {
        // case UPDATE_INSTITUTION_PARAMS:
        //     return {
        //         ...state,
        //         documents: {
        //             ...state.documents,
        //             institutionParams: action.payload,
        //         },
        //     };
        case UPDATE_INSTITUTION_PARAMS:
            return { ...state, documents: action.payload };

        default:
            return state;
    }
};
