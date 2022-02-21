import { combineReducers } from 'redux';
import { formConstructorReducer } from './formConstructorReducer';
import { formsListReducer } from './formsListReducer';
import { headerSidebarReducer } from './headerSidebarReducer';
import { sendFormPopupReducer } from './sendFormPopupReducer';

export const rootReducer = combineReducers({
    formsList: formsListReducer,
    sendForm: sendFormPopupReducer,
    formConstructor: formConstructorReducer,
    headerSidebar: headerSidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
