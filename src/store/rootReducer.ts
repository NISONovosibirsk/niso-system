import { combineReducers } from 'redux';
import { changePasswordReducer } from './reducers/changePasswordReducer';
import { headerSidebarReducer } from './reducers/headerSidebarReducer';
import { loginReducer } from './reducers/loginReducer';
import { registerReducer } from './reducers/registerReducer';
import { searchReducer } from './reducers/searchReducer';
import { statusPopupReducer } from './reducers/statusPopupReducer';
import { userConstructorReducer } from './reducers/userConstructorReducer';
import { userHandbookReducer } from './reducers/userHandbookReducer';
import { userProfileReducer } from './reducers/userProfileReducer';

export const rootReducer = combineReducers({
    headerSidebar: headerSidebarReducer,
    search: searchReducer,

    userConstructor: userConstructorReducer,
    userProfile: userProfileReducer,
    userHandbook: userHandbookReducer,

    login: loginReducer,
    register: registerReducer,
    changePassword: changePasswordReducer,

    statusPopup: statusPopupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
