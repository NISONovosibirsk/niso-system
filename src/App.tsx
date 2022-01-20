import React from 'react';
import Header from './components/Header/Header';
import Terms from './components/Terms/Terms';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header></Header>
        <Terms
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          buttons={[{ title: 'Присоединиться', type: 'filled' }, { title: 'Присоединиться', type: 'filled' }]}
        />
      </div>
    </div>
  );
}

export default App;
