import { FormConstructor, Header, SavedForms, SavedForm } from './components';
import { useTypeSelector } from './hooks/useTypeSelector';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const { currentForm } = useTypeSelector(state => state.formConstructor);

    return (
        <BrowserRouter>
            <div className='App'>
                <div className='container'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <Header />
                                    <FormConstructor />
                                    <SavedForms />
                                </>
                            }
                        />

                        <Route path='/client' element={
                            <>
                                <Header/>
                                {currentForm.length ? <SavedForm /> : null}
                                <SavedForms />
                            </>
                        }/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
