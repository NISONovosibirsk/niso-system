import { useDispatch } from 'react-redux';
import { FormElementRemoveButton } from '../..';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { updateConstructor } from '../../../store/actions/formActions';
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
}: {
    id: string;
    value: string;
    placeholder?: string;
    datalist: [string];
    onChange: any;
    isDisabled: boolean;
    isRequired?: boolean;
    isFinalForm: boolean;
}) => {
    const { constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleChangeOptionsValue = e => {
        const { id: formElementId } = e.target.parentNode.parentNode.parentNode;
        const { id: targetId, value } = e.target;

        const newState: Array<any> = Array.from(constructor);
        newState[formElementId].datalist[targetId] = value;

        dispatch(updateConstructor(newState));
    };

    const handleAddOption = e => {
        const { id: formElementId } = e.target.parentNode.parentNode;

        const newState: Array<any> = Array.from(constructor);
        const newDatalist: Array<any> = Array.from(
            newState[formElementId].datalist
        );

        newDatalist.push('');
        newState[formElementId].datalist = newDatalist;

        dispatch(updateConstructor(newState));
    };

    const handleRemoveElement = e => {
        const { id: formElementId } = e.target.parentNode.parentNode.parentNode;
        const { id: optionId } = e.target.parentNode;

        const newState: Array<any> = Array.from(constructor);
        newState[formElementId].datalist.splice(optionId, 1);
        dispatch(updateConstructor(newState));
    };

    return (
        <div className='form-element-list'>
            <input
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
                        <div key={index} id={index.toString()}>
                            <input
                                className='form-element-list__input form-element-list__input_datalist'
                                id={index.toString()}
                                value={list}
                                onChange={handleChangeOptionsValue}
                                disabled={isDisabled}
                            />
                            <FormElementRemoveButton
                                onClick={handleRemoveElement}
                            />
                        </div>
                    ))}
                    <p
                        className='form-element-list__button'
                        onClick={handleAddOption}
                    >
                        Добавить пункт
                    </p>
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
