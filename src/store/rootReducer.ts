import { combineReducers } from 'redux';
import { changePasswordReducer } from './reducers/changePasswordReducer';
import { headerSidebarReducer } from './reducers/headerSidebarReducer';
import { loginReducer } from './reducers/loginReducer';
import { registerReducer } from './reducers/registerReducer';
import { statusPopupReducer } from './reducers/statusPopupReducer';
import { userConstructorReducer } from './reducers/userConstructorReducer';
import { userHandbookReducer } from './reducers/userHandbookReducer';
import { userListEIReducer } from './reducers/userListEIReducer';
import { userProfileReducer } from './reducers/userProfileReducer';

export const rootReducer = combineReducers({
    headerSidebar: headerSidebarReducer,

    userConstructor: userConstructorReducer,
    userProfile: userProfileReducer,
    userHandbook: userHandbookReducer,
    userListEI: userListEIReducer,

    login: loginReducer,
    register: registerReducer,
    changePassword: changePasswordReducer,

    statusPopup: statusPopupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
