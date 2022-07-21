import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import './App.scss';
import {
    Login,
    PasswordRecovery,
    Register,
    HomePage,
    ChangePassword,
    StatusPopup,
    User,
    NotFoundRoute,
} from './components/main';
import {
    Constructor,
    Handbook,
    Home,
    ListEI,
    Organizer,
    Profile,
} from './components/main/User/pages';
import { updateCreatedReports } from './store/actions/userConstrucorActions';
import { Banner } from './components';

function App() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handler = () => {
            setIsLoading(false);
        };
        window.addEventListener('load', handler);
    }, []);

    useEffect(() => {
        handleStorage();
    });

    const handleStorage: any = () => {
        let createdReports = [];
        const json = localStorage.getItem('createdReports');

        if (json !== null) {
            createdReports = JSON.parse(json);
        }

        dispatch(updateCreatedReports(createdReports));
    };

    return (
        <div className={`App${isLoading ? '_preload' : ''}`}>
            <Routes>
                <Route path='' element={<HomePage />} />

                <Route path='signin'>
                    <Route path='' element={<Login />} />
                    <Route path='password-recovery'>
                        <Route path='' element={<PasswordRecovery />} />
                        <Route
                            path='generated-link'
                            element={<ChangePassword />}
                        />
                    </Route>
                </Route>
                <Route path='signup' element={<Register />} />

                <Route path='banner' element={<Banner />} />

                <Route path='user' element={<User />}>
                    <Route path='home' element={<Home />} />
                    <Route path='profile/*' element={<Profile />} />
                    <Route path='constructor/*' element={<Constructor />} />
                    <Route path='handbook' element={<Handbook />} />
                    <Route path='listEI' element={<ListEI />} />
                    <Route path='organizer' element={<Organizer />} />
                </Route>

                <Route path='404' element={<NotFoundRoute />} />

                <Route path='*' element={<Navigate to='404' replace />} />
            </Routes>
            <StatusPopup />
        </div>
    );
}

export default App;
