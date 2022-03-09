import { combineReducers } from 'redux';
import { changePasswordReducer } from './reducers/changePasswordReducer';
import { formConstructorReducer } from './reducers/formConstructorReducer';
import { reportsFormsListReducer } from './reducers/reportsFormsListReducer';
import { headerSidebarReducer } from './reducers/headerSidebarReducer';
import { loginReducer } from './reducers/loginReducer';
import { registerReducer } from './reducers/registerReducer';
import { sendFormPopupReducer } from './reducers/sendFormPopupReducer';
import { statusPopupReducer } from './reducers/statusPopupReducer';

export const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    changePassword: changePasswordReducer,
    reportsFormsList: reportsFormsListReducer,
    sendFormPopup: sendFormPopupReducer,
    statusPopup: statusPopupReducer,
    formConstructor: formConstructorReducer,
    headerSidebar: headerSidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
