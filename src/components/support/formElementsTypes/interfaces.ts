export interface IFormElementHeader {
    value: string;
    isDisabled?: boolean;
    onChange: any;
    isFinalForm: boolean;
}

export interface IFormElementInput {
    id?: string;
    value: string;
    type: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}

export interface IFormElementList {
    id: string;
    value: string;
    placeholder?: string;
    datalist: [string];
    onChange: any;
    isDisabled: boolean;
    isRequired?: boolean;
    isFinalForm: boolean;
}

export interface IFormElementRadio {
    id: string;
    radiolist: [];
    onChange: any;
    isDisabled: boolean;
    isFinalForm: boolean;
}

export interface IFormElementRange {
    valueMaximum: string;
    valueMinimum: string;
    valueStep: string;
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
    id?: string;
    value: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}

export interface IFormElementTextarea {
    id?: string;
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
