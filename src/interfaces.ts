// COMPONENTS //

// Form Element
export interface IFormElement {
    element: any;
    id: number;
    index: number;
}

// Blog Card
export interface IBlogCard {
    title: string;
    paragraph: string;
    path?: string;
}

// Button
export interface IButton {
    title?: string;
    types?: any;
    onClick?: any;
}

// Form
export interface IForm {
    title: string;
    onSubmit?: any;
    children: any;
}

// Saved Form Item
export interface ISavedFormItem {
    index: number;
    savedForm: {
        title: string;
        subtitle: string;
        date: string;
        _id: number;
    };
}

// Sidebar
export interface ISidebar {
    isOpen: boolean;
}

// Slider
export default interface ISliderItemProps {
    image: any;
    active: boolean;
}

// Terms
interface ButtonsArray {
    [index: number]: {};
    title: string;
    types?: [string];
    onClick?: Function;
}

export interface ITerms {
    title: string;
    buttons: ButtonsArray[];
}

export interface ICheckbox {
    isChecked: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}

// REDUX //

// Form state and actions
export interface IConstructorState {
    initialElements: any;
    addedElements: any;
    isPreview: boolean;
}

export interface IHeaderSidebarState {
    isOpen: boolean;
}

export interface IReduxActions {
    type: string;
    payload: any;
}
