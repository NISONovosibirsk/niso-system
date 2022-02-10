import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { valueChange } from '../../store/actions/formActions';
import './FormElementRange.scss';

const FormElementRange = ({
    valueMaximum,
    valueMinimum,
    value,
    onValueChange,
    isDisabled,
    isFinalForm,
}: {
    valueMaximum: string;
    valueMinimum: string;
    value: string;
    onValueChange: any;
    isDisabled?: boolean;
    isFinalForm: boolean;
}) => {
    const { constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleMaxRangeValueChange = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[e.target.parentNode.parentNode.id].max = e.target.value;
        dispatch(valueChange(newState));
    };

    const handleMinRangeValueChange = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[e.target.parentNode.parentNode.id].min = e.target.value;
        dispatch(valueChange(newState));
    };

    return (
        <div className='form-element-range__field'>
            {!isFinalForm && (
                <input
                    className='form-element-range__input form-element-range__input_minmax'
                    type='number'
                    value={valueMinimum}
                    onChange={handleMinRangeValueChange}
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
            {isFinalForm && (
                <p className='form-element-range__value'>{`${value} (${valueMinimum} - ${valueMaximum})`}</p>
            )}
            {!isFinalForm && (
                <input
                    className='form-element-range__input form-element-range__input_minmax'
                    type='number'
                    value={valueMaximum}
                    onChange={handleMaxRangeValueChange}
                />
            )}
        </div>
    );
};

export default FormElementRange;
