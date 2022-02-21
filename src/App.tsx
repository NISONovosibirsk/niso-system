import { FormConstructor, Header, SavedForms, SavedForm } from './components';
import { useTypeSelector } from './hooks/useTypeSelector';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setForms } from './store/actions/formsListActions';
import { useEffect } from 'react';

function App() {
    const { openedForm } = useTypeSelector(state => state.formsList);
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
                    <Header />
                    <Routes>
                        <Route path='' element={<FormConstructor />} />
                        <Route
                            path='client'
                            element={openedForm.length ? <SavedForm /> : null}
                        />
                    </Routes>
                    <SavedForms />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
