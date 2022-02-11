// COMPONENTS //

// Form Element
export interface IFormElement {
    item: any;
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
    type?: string;
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
    item: {
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
    type?: string;
    onClick?: Function;
}

export interface ITerms {
    title: string;
    buttons: ButtonsArray[];
}

// REDUX //

// Form state and actions
export interface IFormState {
    elements?: any;
    constructor: any;
    savedForms: any;
    currentForm: any;
}

export interface IDragAndDropActions {
    type: string;
    payload: any;
}
