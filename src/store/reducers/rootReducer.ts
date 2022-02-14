import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { headerSidebarReducer } from './headerSidebarReducer';

export const rootReducer = combineReducers({
    form: formReducer,
    headerSidebar: headerSidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
