import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { sidebarReducer } from './sidebarReducer';

export const rootReducer = combineReducers({
    form: formReducer,
    sidebar: sidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
