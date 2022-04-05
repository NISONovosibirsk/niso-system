// COMPONENTS //

// Blog Card
export interface IBlogCard {
    title: string;
    paragraph: string;
    path?: string;
}

// Button
export interface IButton {
    onClick?: any;
    isDisabled?: boolean;
    title: string;
    type?: string;
    width?: string;
    height?: string;
    margin?: string;
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
    reportForm: {
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
    isFilled?: boolean;
    onClick?: Function;
}

export interface ITerms {
    title: string;
    buttons: ButtonsArray[];
}

export interface ICheckbox {
    id?: string;
    isChecked: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}

// User
export interface IProfileDocuments {
    form: any;
}

// REDUX //

// Form state and actions
export interface IFormConstructorState {
    suggestedElements: any;
    addedElements: any;
    isPreview: boolean;
    isValid: boolean;
}

export interface IHeaderSidebarState {
    isOpen: boolean;
}

export interface ILoginState {
    email: string;
    emailError: string;
    password: string;
    passwordError: string;
    isValid: boolean;
}

export interface IRegisterState {
    email: string;
    emailError: string;
    password: string;
    passwordError: string;
    repeatPassword: string;
    repeatPasswordError: string;
    isValid: boolean;
}

export interface IChangePasswordState {
    password: string;
    passwordError: string;
    repeatPassword: string;
    repeatPasswordError: string;
    isValid: boolean;
}

export interface IReduxActions {
    type: string;
    payload: any;
}

// Profile
export interface IUserProfileState {
    info: {
        photo: any;
        name: string;
        position: string;
        contacts: [
            { type: 'phone'; value: string; isEdit: boolean },
            { type: 'email'; value: string; isEdit: boolean }
        ];
    };
    documents: {
        institutionCode: {
            value: string;
            files: any;
        };
        institutionName: {
            value: string;
            files: any;
        };
        institutionInn: {
            value: string;
            files: any;
        };
    };
    popup: {
        isOpen: boolean;
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
    };
}
