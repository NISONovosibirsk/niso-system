import { combineReducers } from 'redux';
import { changePasswordReducer } from './changePasswordReducer';
import { formConstructorReducer } from './formConstructorReducer';
import { formsListReducer } from './formsListReducer';
import { headerSidebarReducer } from './headerSidebarReducer';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { sendFormPopupReducer } from './sendFormPopupReducer';
import { statusPopupReducer } from './statusPopupReducer';

export const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    changePassword: changePasswordReducer,
    formsList: formsListReducer,
    sendForm: sendFormPopupReducer,
    statusPopup: statusPopupReducer,
    formConstructor: formConstructorReducer,
    headerSidebar: headerSidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
