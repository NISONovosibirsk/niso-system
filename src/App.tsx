import { FormConstructor, Header, SavedForms } from './components';

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <Header />
                <FormConstructor />
                <SavedForms />
            </div>
        </div>
    );
}

export default App;
