import { combineReducers } from 'redux';
import { formReducer } from './dragAndDropReducer';
import { sidebarReducer } from './headerSidebarReducer';

export const rootReducer = combineReducers({
    dragAndDrop: formReducer,
    headerSidebar: sidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
