import React from 'react';
import Header from './components/Header/Header';
import Register from './components/Register/Register';

function App() {
    return (
        <div className='App'>
            <div className='container'>
              <Header></Header>
              <Register />
            </div>
        </div>
    );
}

export default App;
