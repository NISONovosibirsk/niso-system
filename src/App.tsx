import {
    FormConstructor,
    Header,
    SavedForms,
    SavedForm,
    UserProfile,
    Register,
    Login,
    PasswordRecovery,
    ChangePassword,
    StatusPopup,
} from './components';
import { useTypeSelector } from './hooks/useTypeSelector';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setForms } from './store/actions/formsListActions';
import { useEffect } from 'react';

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
        <BrowserRouter>
            <div className='App'>
                <div className='container'>
                    <Routes>
                        <Route path='' element={<FormConstructor />} />
                        <Route path='client' element={<SavedForm />} />
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
                    </Routes>
                    <StatusPopup />
                    {/* <SavedForms /> */}
                        <Route
                            path=''
                            element={
                                <>
                                    <Header />
                                    <FormConstructor />
                                    <SavedForms />
                                </>
                            }
                        />
                        <Route
                            path='client'
                            element={
                                <>
                                    <Header />
                                    <SavedForm />
                                    <SavedForms />
                                </>
                            }
                        />
                        <Route path='user-profile' element={<UserProfile />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
