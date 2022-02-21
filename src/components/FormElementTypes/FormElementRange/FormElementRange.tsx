import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../store/actions/formConstructorActions';
import { IFormElementRange } from '../interfaces';
import './FormElementRange.scss';

const FormElementRange = ({
    valueMaximum,
    valueMinimum,
    valueStep,
    value,
    defaultValue,
    onValueChange,
    isDisabled,
    isFinalForm,
}: IFormElementRange) => {
    const { addedElements } = useTypeSelector(state => state.formConstructor);
    const dispatch = useDispatch();

    const currentValue = value.length ? value : defaultValue;

    const handleMaxRangeValueChange = e => {
        const newState = [...addedElements];
        newState[e.target.parentNode.parentNode.id].max = e.target.value;
        dispatch(updateAddedElements(newState));
    };

    const handleMinRangeValueChange = e => {
        const newState = [...addedElements];
        newState[e.target.parentNode.parentNode.id].min = e.target.value;
        dispatch(updateAddedElements(newState));
    };

    const handleStepRangeValueChange = e => {
        const newState = [...addedElements];
        newState[e.target.parentNode.parentNode.id].step = e.target.value;
        dispatch(updateAddedElements(newState));
    };

    return (
        <div className='form-element-range__field'>
            {!isFinalForm ? (
                !isDisabled ? (
                    <input
                        className='form-element-range__input form-element-range__input_minmaxstep'
                        type='number'
                        value={valueStep}
                        onChange={handleStepRangeValueChange}
                        disabled={isDisabled}
                    />
                ) : null
            ) : null}
            <input
                className={`form-element-range__input ${
                    isFinalForm && 'form-element-range__input_final-form'
                }`}
                type='range'
                value={currentValue}
                onChange={onValueChange}
                min={valueMinimum}
                max={valueMaximum}
                step={valueStep}
                disabled={isDisabled}
            />
            {!isDisabled && (
                <p className='form-element-range__value'>{`${currentValue} ${
                    isFinalForm ? `( ${valueMinimum} - ${valueMaximum} )` : ''
                }`}</p>
            )}
            {!isFinalForm ? (
                !isDisabled ? (
                    <>
                        <input
                            className='form-element-range__input form-element-range__input_minmaxstep'
                            type='number'
                            value={valueMinimum}
                            onChange={handleMinRangeValueChange}
                            disabled={isDisabled}
                        />
                        <input
                            className='form-element-range__input form-element-range__input_minmaxstep'
                            type='number'
                            value={valueMaximum}
                            onChange={handleMaxRangeValueChange}
                            disabled={isDisabled}
                        />
                    </>
                ) : null
            ) : null}
        </div>
    );
};

export default FormElementRange;
