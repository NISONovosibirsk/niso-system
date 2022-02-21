import { FormConstructor, Header, SavedForms, SavedForm } from './components';
import { useTypeSelector } from './hooks/useTypeSelector';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const { openedForm } = useTypeSelector(state => state.formsList);

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
