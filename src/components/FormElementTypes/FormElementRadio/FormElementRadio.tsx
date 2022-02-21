import { useDispatch } from 'react-redux';
import { RemoveButton } from '../..';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../store/actions/constructorActions';
import { IFormElementRadio } from '../interfaces';
import './FormElementRadio.scss';

const FormElementRadio = ({
    id,
    radiolist,
    onChange,
    isDisabled,
    isFinalForm,
}: IFormElementRadio) => {
    const { addedElements } = useTypeSelector(state => state.formConstructor);
    const dispatch = useDispatch();

    const handleOptionTitleChange = e => {
        const { id: formElementId } = e.target.parentNode.parentNode.parentNode;
        const { id: targetId } = e.target;

        const newState = [...addedElements];
        const newRadiolist = [...newState[formElementId].radiolist];
        newRadiolist[targetId].title = e.target.value;
        newState[formElementId].radiolist = newRadiolist;

        dispatch(updateAddedElements(newState));
    };

    const handleAddOption = e => {
        const { id: formElementId } = e.target.parentNode.parentNode;

        const newState = [...addedElements];
        const newRadiolist = [...newState[formElementId].radiolist];

        newRadiolist.push({
            title: `${newRadiolist.length + 1} Вариант`,
            isChecked: false,
        });
        newState[formElementId].radiolist = newRadiolist;

        dispatch(updateAddedElements(newState));
    };

    const handleRemoveElement = e => {
        const { id: formElementId } = e.target.parentNode.parentNode.parentNode;
        const { id: optionId } = e.target.parentNode;

        const newState = [...addedElements];
        const newRadiolist = [...newState[formElementId].radiolist];

        newRadiolist.splice(optionId, 1);
        newState[formElementId].radiolist = newRadiolist;

        dispatch(updateAddedElements(newState));
    };

    return (
        <div className='form-element-radio'>
            {isDisabled ? (
                <label className='form-element-radio__label'>
                    <input
                        className='form-element-radio__input'
                        name={id}
                        type='radio'
                        disabled={isDisabled}
                    />
                    <div className='form-element-radio__custom-radio'></div>
                    <p className='form-element-radio__title'>Вариант 1</p>
                </label>
            ) : (
                radiolist.map(
                    (radio: { title: string; isChecked: boolean }, index) => (
                        <label
                            id={index.toString()}
                            key={index}
                            className='form-element-radio__label'
                        >
                            <input
                                className='form-element-radio__input'
                                id={index.toString()}
                                name={id}
                                checked={radio.isChecked}
                                onChange={onChange}
                                type='radio'
                            />
                            <div className='form-element-radio__custom-radio'></div>
                            {isFinalForm ? (
                                <p className='form-element-radio__title'>
                                    {radio.title}
                                </p>
                            ) : (
                                <>
                                    <input
                                        className='form-element-radio__title-input'
                                        id={index.toString()}
                                        value={radio.title}
                                        onChange={handleOptionTitleChange}
                                    />
                                    <RemoveButton
                                        onClick={handleRemoveElement}
                                    />
                                </>
                            )}
                        </label>
                    )
                )
            )}
            {!isDisabled && !isFinalForm && (
                <p
                    className='form-element-radio__button'
                    onClick={handleAddOption}
                >
                    Добавить вариант
                </p>
            )}
        </div>
    );
};

export default FormElementRadio;
