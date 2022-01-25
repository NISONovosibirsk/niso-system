import { combineReducers } from 'redux';
import { dragAndDropReducer } from './dragAndDropReducer';
import { headerSidebarReducer } from './headerSidebarReducer';

export const rootReducer = combineReducers({
    dragAndDrop: dragAndDropReducer,
    headerSidebar: headerSidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
