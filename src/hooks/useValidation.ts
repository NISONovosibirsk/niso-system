import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateChangeData } from '../store/actions/userProfileActions';
import { useTypeSelector } from './useTypeSelector';

export const useValidation = (value, validations) => {
    const { changeData } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        for (const validation in validations) {
            const newState = { ...changeData };
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation]
                        ? (newState.validation.minLength = true)
                        : (newState.validation.minLength = false);
                    break;
                case 'isEmpty':
                    value
                        ? (newState.validation.isEmpty = false)
                        : (newState.validation.isEmpty = true);
                    break;
            }
            dispatch(updateChangeData(newState));
        }
    }, [value]);
};
