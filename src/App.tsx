import React from 'react';
import Header from './components/Header/Header';
import Terms from './components/Terms/Terms';
import Register from './components/Register/Register';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header></Header>
        <Register />
        <Terms
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          buttons={[{ title: 'Присоединиться', type: 'filled' }, { title: 'Присоединиться', type: 'filled' }]}
        />
        <Blog />
      </div>
    </div>
  );
}

export default App;
