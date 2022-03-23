import { combineReducers } from 'redux';
import { changePasswordReducer } from './reducers/changePasswordReducer';
import { reportsFormsListReducer } from './reducers/reportsFormsListReducer';
import { headerSidebarReducer } from './reducers/headerSidebarReducer';
import { loginReducer } from './reducers/loginReducer';
import { registerReducer } from './reducers/registerReducer';
import { sendFormPopupReducer } from './reducers/sendFormPopupReducer';
import { statusPopupReducer } from './reducers/statusPopupReducer';
import { userConstructorReducer } from './reducers/userConstructorReducer';

export const rootReducer = combineReducers({
    headerSidebar: headerSidebarReducer,

    userConstructor: userConstructorReducer,

    login: loginReducer,
    register: registerReducer,
    changePassword: changePasswordReducer,

    statusPopup: statusPopupReducer,

    reportsFormsList: reportsFormsListReducer,
    sendFormPopup: sendFormPopupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
