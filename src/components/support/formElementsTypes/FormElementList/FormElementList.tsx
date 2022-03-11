import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../../store/actions/formConstructorActions';
import { Button, CrossButton } from '../..';
import { IFormElementList } from '../interfaces';
import './FormElementList.scss';

const FormElementList = ({
    id,
    value,
    placeholder,
    datalist,
    onChange,
    isDisabled,
    isRequired,
    isFinalForm,
}: IFormElementList) => {
    const { addedElements } = useTypeSelector(state => state.formConstructor);
    const dispatch = useDispatch();

    const handleChangeOptionsValue = e => {
        const { id: formElementId } = e.target.parentNode.parentNode.parentNode;
        const { id: targetId, value } = e.target;

        const newState = [...addedElements];
        newState[formElementId].datalist[targetId] = value;

        dispatch(updateAddedElements(newState));
    };

    const handleAddOption = e => {
        e.preventDefault();

        const { id: formElementId } = e.target.parentNode.parentNode;

        const newState = [...addedElements];

        const newDatalist = [...newState[formElementId].datalist];

        newDatalist.push('');
        newState[formElementId].datalist = newDatalist;

        dispatch(updateAddedElements(newState));
    };

    const handleRemoveElement = e => {
        const { id: formElementId } = e.target.parentNode.parentNode.parentNode;
        const { id: optionId } = e.target.parentNode;

        const newState = [...addedElements];
        newState[formElementId].datalist.splice(optionId, 1);
        dispatch(updateAddedElements(newState));
    };

    return (
        <div className='form-element-list'>
            <input
                id={id}
                className='form-element-list__input'
                list={`${isFinalForm && id}`}
                value={value}
                placeholder={placeholder || ''}
                onChange={onChange}
                autoComplete='disable'
                disabled={isDisabled}
                required={isRequired}
            />
            {!isDisabled && !isFinalForm && (
                <>
                    {datalist.map((list, index) => (
                        <div
                            className='form-element-list__field'
                            key={index}
                            id={index.toString()}
                        >
                            <input
                                className='form-element-list__input form-element-list__input_datalist'
                                id={index.toString()}
                                value={list}
                                onChange={handleChangeOptionsValue}
                                disabled={isDisabled}
                            />
                            <CrossButton onClick={handleRemoveElement} />
                        </div>
                    ))}
                    <Button
                        title='Добавить пункт'
                        onClick={handleAddOption}
                        type='hollow'
                        width='30%'
                        margin='8px 0 0 70%'
                    />
                </>
            )}
            <datalist id={id}>
                {datalist.map((list, index) => (
                    <option key={index} value={list} />
                ))}
            </datalist>
        </div>
    );
};

export default FormElementList;
