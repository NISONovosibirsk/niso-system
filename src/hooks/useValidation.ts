import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateValidationCases } from '../store/actions/userProfileActions';
import { useTypeSelector } from './useTypeSelector';

export const useValidation = (value, validations) => {
    const { validation } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        const validationState = { ...validation.cases };

        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation]
                        ? (validationState.minLength.status = true)
                        : (validationState.minLength.status = false);
                    break;
                case 'isEmpty':
                    value
                        ? (validationState.isEmpty.status = false)
                        : (validationState.isEmpty.status = true);
                    break;
                case 'maxLength':
                    value.length > validations[validation]
                        ? (validationState.maxLength.status = true)
                        : (validationState.maxLength.status = false);
                    break;
                case 'isSame':
                    break;
            }
        }
        dispatch(updateValidationCases(validationState));
    }, [value]);
};
