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
        <>
            <form className='auth-form' onSubmit={onSubmit}>
                {children}
                <button className='auth-form__button' disabled={!isValid}>
                    {submitButtonText}
                </button>
            </form>
        </>
    );
};

export default AuthForm;
