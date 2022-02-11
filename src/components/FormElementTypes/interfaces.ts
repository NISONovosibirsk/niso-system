export interface IFormElementCheckbox {
    isChecked: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}

export interface IFormElementCheckboxRequired {
    index: number;
    isChecked: boolean;
}

export interface IFormElementHeader {
    value: string;
    isDisabled?: boolean;
    onChange: any;
    isFinalForm: boolean;
}

export interface IFormElementInput {
    value: string;
    type: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}

export interface IFormElementLabelInput {
    value: string;
    isDisabled: boolean;
}

export interface IFormElementRange {
    valueMaximum: string;
    valueMinimum: string;
    value: string;
    defaultValue?: string;
    onValueChange: any;
    isDisabled?: boolean;
    isFinalForm: boolean;
}

export interface IFormElementSubtitle {
    value: string;
    isDisabled?: boolean;
    onChange: any;
    isFinalForm: boolean;
}

export interface IFormElementTel {
    value: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}

export interface IFormElementTextarea {
    value: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}

export interface IFormElementTitle {
    value: string;
    isDisabled?: boolean;
    onChange: any;
    isFinalForm: boolean;
}
