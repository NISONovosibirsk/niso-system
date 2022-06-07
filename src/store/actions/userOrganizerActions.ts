import {
    UPDATE_COLUMNS,
    UPDATE_COLUMN_ORDER,
    UPDATE_TASKS,
} from '../reduxTypes/userOrganizerTypes';

export const updateTasks = tasks => {
    try {
        return { type: UPDATE_TASKS, payload: tasks };
    } catch (err) {
        console.log(err);
    }
};

export const updateColumns = columns => {
    try {
        return { type: UPDATE_COLUMNS, payload: columns };
    } catch (err) {
        console.log(err);
    }
};

export const updateColumnOrder = columnOrder => {
    try {
        return { type: UPDATE_COLUMN_ORDER, payload: columnOrder };
    } catch (err) {
        console.log(err);
    }
};
