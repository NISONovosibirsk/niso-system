import {
    RESET_CREATE,
    SET_DOWNLOAD_IS_OPEN,
    SET_IS_OPEN,
    SET_IS_VALID,
    SET_POPUP_IS_OPEN,
    UPDATE_CREATE_FOR_EDIT,
    UPDATE_CREATE_SUBTITLE,
    UPDATE_CREATE_TITLE,
    UPDATE_ELEMENTS,
    UPDATE_FILTER_ACCESS,
    UPDATE_FILTER_CHARS,
    UPDATE_FILTER_TABS,
    UPDATE_POPUP_FILTER_CHARS,
    UPDATE_REPORTS,
    UPDATE_TARGET_REPORT,
} from '../reduxTypes/userConstructorTypes';

//CREATE

export const updateCreateTitle = title => {
    try {
        return { type: UPDATE_CREATE_TITLE, payload: title };
    } catch (error) {
        console.log(error);
    }
};

export const updateCreateSubtitle = subtitle => {
    try {
        return { type: UPDATE_CREATE_SUBTITLE, payload: subtitle };
    } catch (error) {
        console.log(error);
    }
};

export const setIsValid = status => {
    try {
        return { type: SET_IS_VALID, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const updateElements = elements => {
    try {
        return { type: UPDATE_ELEMENTS, payload: elements };
    } catch (error) {
        console.log(error);
    }
};

export const setIsOpen = status => {
    try {
        return { type: SET_IS_OPEN, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const resetCreate = () => {
    try {
        return { type: RESET_CREATE };
    } catch (error) {
        console.log(error);
    }
};

export const updateCreateForEdit = createdReport => {
    try {
        return { type: UPDATE_CREATE_FOR_EDIT, payload: createdReport };
    } catch (error) {
        console.log(error);
    }
};

//CREATED REPORTS

export const updateCreatedReports = reports => {
    try {
        return { type: UPDATE_REPORTS, payload: reports };
    } catch (error) {
        console.log(error);
    }
};

export const updateTargetReport = report => {
    try {
        return { type: UPDATE_TARGET_REPORT, payload: report };
    } catch (error) {
        console.log(error);
    }
};

export const setDownloadIsOpen = status => {
    try {
        return { type: SET_DOWNLOAD_IS_OPEN, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const setPopupIsOpen = status => {
    try {
        return { type: SET_POPUP_IS_OPEN, payload: status };
    } catch (error) {
        console.log(error);
    }
};

export const updatePopupFilterChars = filterChars => {
    try {
        return { type: UPDATE_POPUP_FILTER_CHARS, payload: filterChars };
    } catch (error) {
        console.log(error);
    }
};

//FILTER

export const updateFilterChars = filterChars => {
    try {
        return { type: UPDATE_FILTER_CHARS, payload: filterChars };
    } catch (error) {
        console.log(error);
    }
};

export const updateFilterAccess = filterAccess => {
    try {
        return { type: UPDATE_FILTER_ACCESS, payload: filterAccess };
    } catch (error) {
        console.log(error);
    }
};

export const updateFilterTabs = filterTabs => {
    try {
        return { type: UPDATE_FILTER_TABS, payload: filterTabs };
    } catch (error) {
        console.log(error);
    }
};
