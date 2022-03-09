import { Button } from '..';
import './AuthForm.scss';

const AuthForm = ({
    onSubmit,
    isValid,
    submitButtonText,
    children,
}: {
    onSubmit: any;
    isValid: boolean;
    submitButtonText: string;
    children: any;
}) => {
    return (
        <form className='auth-form' onSubmit={onSubmit}>
            {children}
            <Button
                isDisabled={!isValid}
                title={submitButtonText}
                filled={true}
            />
        </form>
    );
};

export default AuthForm;
