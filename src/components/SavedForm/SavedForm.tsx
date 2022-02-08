import {
    FormElementCheckbox,
    FormElementInput,
    FormElementRange,
    FormElementTextarea,
} from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './SavedForm.scss';

const SavedForm = () => {
    const { constructor } = useTypeSelector(state => state.form);
    return (
        <form className='saved-form'>
            {constructor.map(item => {
                switch (item.type) {
                    case 'range':
                        return (
                            <label>
                                {item.title}
                                <FormElementRange
                                    valueMaximum={item.max}
                                    valueMinimum={item.min}
                                    value={item.value}
                                    onMaximumChange={() => {}}
                                    onMinimumChange={() => {}}
                                    onValueChange={() => {}}
                                    isFinalForm={true}
                                />
                            </label>
                        );
                    case 'checkbox':
                        return (
                            <label>
                                {item.title}
                                <FormElementCheckbox
                                    isChecked={item.value}
                                    onChange={() => {}}
                                    isRequired={item.isRequired}
                                />
                            </label>
                        );
                    case 'textArea':
                        return (
                            <label>
                                {item.title}
                                <FormElementTextarea
                                    placeholder={item.value}
                                    value={''}
                                    onChange={() => {}}
                                    isRequired={item.isRequired}
                                />
                            </label>
                        );
                    default:
                        return (
                            <label>
                                {item.title}
                                <FormElementInput
                                    placeholder={item.value}
                                    value={''}
                                    onChange={() => {}}
                                    isRequired={item.isRequired}
                                />
                            </label>
                        );
                }
            })}
        </form>
    );
};

export default SavedForm;
