import {
    FormElementCheckbox,
    FormElementHeader,
    FormElementInput,
    FormElementRange,
    FormElementSubtitle,
    FormElementTextarea,
    FormElementTitle,
} from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './SavedForm.scss';

const SavedForm = () => {
    const { constructor } = useTypeSelector(state => state.form);
    return (
        <form className='saved-form'>
            {constructor.map(item => {
                switch (item.type) {
                    case 'header':
                        return (
                            <FormElementHeader
                                value={item.value}
                                onChange={() => {}}
                                isDisabled={item.isDisabled}
                                isFinalForm={true}
                            />
                        );
                    case 'title':
                        return (
                            <FormElementTitle
                                value={item.value}
                                onChange={() => {}}
                                isDisabled={item.isDisabled}
                                isFinalForm={true}
                            />
                        );
                    case 'subtitle':
                        return (
                            <FormElementSubtitle
                                value={item.value}
                                onChange={() => {}}
                                isFinalForm={true}
                            />
                        );
                    case 'range':
                        return (
                            <label>
                                {item.title}
                                <FormElementRange
                                    valueMaximum={item.max}
                                    valueMinimum={item.min}
                                    value={item.value}
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
