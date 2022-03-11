import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setForms } from './store/actions/reportsFormsListActions';
import { useEffect } from 'react';
import {
    Login,
    PasswordRecovery,
    Register,
    HomePage,
    ChangePassword,
    StatusPopup,
    User,
    FormConstructor,
} from './components/main';
import { Home, Profile } from './components/main/User/pages';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        handleStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // add elements from storage to state
    const handleStorage: any = () => {
        const newForms: Array<any> = [];

        Object.keys(localStorage).forEach(key => {
            const json = localStorage.getItem(key);

            if (json !== null) {
                const formDate = JSON.parse(json);
                newForms.push(formDate);
            }
        });
        newForms.sort(
            (formDate, formDatePrev) => formDatePrev._id - formDate._id
        );
        dispatch(setForms(newForms));
    };

    return (
        <div className='App'>
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

                <Route path='user' element={<User />}>
                    <Route path='home' element={<Home />} />
                    <Route path='profile/*' element={<Profile />} />
                    <Route path='constructor' element={<FormConstructor />} />

                </Route>
            </Routes>
            <StatusPopup />
        </div>
    );
}

export default App;
