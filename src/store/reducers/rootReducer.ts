import { combineReducers } from 'redux';
import { customFormReducer } from './customFormReducer';
import { formReducer } from './formReducer';
import { headerSidebarReducer } from './headerSidebarReducer';

export const rootReducer = combineReducers({
    form: formReducer,
    headerSidebar: headerSidebarReducer,
    customForm: customFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
