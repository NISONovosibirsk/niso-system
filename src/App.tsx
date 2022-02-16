import { FormConstructor, Header, SavedForms, SavedForm } from './components';
import { useTypeSelector } from './hooks/useTypeSelector';

function App() {

    const { currentForm } = useTypeSelector(state => state.form);

    return (
        <div className='App'>
            <div className='container'>
                <Header />
                <FormConstructor />
                <SavedForms />
                {currentForm.length && <SavedForm />}
            </div>
        </div>
    );
}

export default App;
