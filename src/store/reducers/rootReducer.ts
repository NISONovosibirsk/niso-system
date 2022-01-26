import { combineReducers } from 'redux';
import { customFormReducer } from './customFormReducer';
import { dragAndDropReducer } from './dragAndDropReducer';
import { headerSidebarReducer } from './headerSidebarReducer';

export const rootReducer = combineReducers({
    dragAndDrop: dragAndDropReducer,
    headerSidebar: headerSidebarReducer,
    customForm: customFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
