import { FormConstructor, Header, SavedForm } from './components';

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <Header />
                <SavedForm />
                <FormConstructor />
            </div>
        </div>
    );
}

export default App;
