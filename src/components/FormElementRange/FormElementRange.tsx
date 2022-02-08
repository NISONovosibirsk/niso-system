import './FormElementRange.scss';

const FormElementRange = ({
    valueMaximum,
    valueMinimum,
    value,
    onMaximumChange,
    onMinimumChange,
    onValueChange,
    isDisabled,
    isFinalForm,
}: {
    valueMaximum: string;
    valueMinimum: string;
    value: string;
    onMaximumChange: any;
    onMinimumChange: any;
    onValueChange: any;
    isDisabled?: boolean;
    isFinalForm: boolean;
}) => {
    return (
        <div className='form-element-range__field'>
            {!isFinalForm && (
                <input
                    className='form-element-range__input form-element-range__input_minmax'
                    type='number'
                    value={valueMinimum}
                    onChange={onMinimumChange}
                />
            )}
            <input
                className='form-element-range__input'
                type='range'
                value={value}
                onChange={onValueChange}
                min={valueMinimum}
                max={valueMaximum}
                disabled={isDisabled}
            />
            {isFinalForm && <p>{value}</p>}
            {!isFinalForm && (
                <input
                    className='form-element-range__input form-element-range__input_minmax'
                    type='number'
                    value={valueMaximum}
                    onChange={onMaximumChange}
                />
            )}
        </div>
    );
};

export default FormElementRange;
