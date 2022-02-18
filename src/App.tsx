import { FormConstructor, Header, SavedForms, SavedForm } from './components';
import { useTypeSelector } from './hooks/useTypeSelector';

function App() {
    const { currentForm } = useTypeSelector(state => state.formConstructor);

    return (
        <div className='App'>
            <div className='container'>
                <Header />
                <FormConstructor />
                <SavedForms />
                {currentForm.length ? <SavedForm /> : null}
            </div>
        </div>
    );
}

export default App;
