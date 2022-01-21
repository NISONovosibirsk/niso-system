import React from 'react';
import Header from './components/Header/Header';
import FormConstructor from './components/FormConstructor/FormConstructor';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header></Header>
        <FormConstructor />
      </div>
    </div>
  );
}

export default App;
