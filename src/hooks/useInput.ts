import { useDispatch } from 'react-redux';
import { updateValidationInput } from '../store/actions/userProfileActions';
import { useTypeSelector } from './useTypeSelector';
import { useValidation } from './useValidation';

export const useInput = (validations) => {
    const { validation } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();
    const validate = useValidation(validation.input.value, validations);

    const onChange = e => {
        const input = { ...validation.input };
        input.value = e.target.value;
        dispatch(updateValidationInput(input))
    };

    const onBlur = e => {
        const input = { ...validation.input };
        input.isDirty = true;
        dispatch(updateValidationInput(input))
    };

    return {
        onChange,
        onBlur,
    };
};
