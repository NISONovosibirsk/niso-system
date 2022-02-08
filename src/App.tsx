import {
    Blog,
    FormConstructor,
    Header,
    Register,
    SavedForms,
    Slider,
    Terms,
} from './components';

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <Header />
                <FormConstructor />
                <SavedForms />
                <Slider />
                <Register />
                <Terms
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
                    buttons={[
                        { title: 'Присоединиться', type: 'filled' },
                        { title: 'Связаться с нами' },
                    ]}
                />
                <Blog />
            </div>
        </div>
    );
}

export default App;
