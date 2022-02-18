import { combineReducers } from 'redux';
import { constructorReducer } from './constructorReducer';
import { headerSidebarReducer } from './headerSidebarReducer';

export const rootReducer = combineReducers({
    constructor: constructorReducer,
    headerSidebar: headerSidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
