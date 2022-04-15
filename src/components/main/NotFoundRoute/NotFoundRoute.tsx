import { useNavigate } from 'react-router-dom';
import { Button } from '../../support';
import './NotFoundRoute.scss';

const NotFoundRoute = () => {
    const navigate = useNavigate();

    const handleGoBackClick = () => {
        navigate(-1);
    };

    const handleGoHomeClick = () => {
        navigate('/');
    };

    return (
        <section className='not-found-route'>
            <h1 className='not-found-route__title'>404</h1>
            <p className='not-found-route__paragraph'>
                Этой страницы не существует
            </p>
            <div>
                <Button
                    title='Назад'
                    onClick={handleGoBackClick}
                    width='200px'
                    height='40px'
                    margin='0 16px 0 0'
                />
                <Button
                    title='Домой'
                    onClick={handleGoHomeClick}
                    width='200px'
                    height='40px'
                    type='light-grey'
                />
            </div>
        </section>
    );
};

export default NotFoundRoute;
