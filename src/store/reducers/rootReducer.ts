import { combineReducers } from 'redux';
import { formConstructorReducer } from './formConstructorReducer';
import { headerSidebarReducer } from './headerSidebarReducer';

export const rootReducer = combineReducers({
    formConstructor: formConstructorReducer,
    headerSidebar: headerSidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
