import { UserProfile } from './components';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setForms } from './store/actions/reportsFormsListActions';
import { useEffect } from 'react';
import {
    ChangePassword,
    StatusPopup,
    Login,
    PasswordRecovery,
    Register,
    HomePage,
    Reports,
} from './components/main';

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
                <Route path='client' element={<Reports />} />
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
                <Route path='user-profile' element={<UserProfile />} />
            </Routes>
            <StatusPopup />
        </div>
    );
}

export default App;
