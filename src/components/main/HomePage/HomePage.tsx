import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
    return (
        <section className='main'>
            <ul>
                <li>
                    <Link to={'/user/home'}>Юзер</Link>
                </li>
                <li>
                    <Link to={'/signin'}>Авторизация</Link>
                </li>
                <li>
                    <Link to={'/banner'}>Баннер</Link>
                </li>
            </ul>
        </section>
    );
};

export default HomePage;
