import { useDispatch } from 'react-redux';
import { updateChangeData } from '../store/actions/userProfileActions';
import { useTypeSelector } from './useTypeSelector';
import { useValidation } from './useValidation';

export const useInput = (initialValue, validations) => {
    const { changeData } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();
    const validation = useValidation(changeData.inputs.value, validations);

    const onChange = e => {
        const newState = { ...changeData };
        newState.inputs.value = e.target.value;
        dispatch(updateChangeData(newState));
    };

    const onBlur = e => {
        const newState = { ...changeData };
        newState.inputs.isDirty = true;
        dispatch(updateChangeData(newState));
    };

    return {
        changeData,
        onChange,
        onBlur,
    };
};
