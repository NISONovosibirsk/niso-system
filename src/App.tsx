import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTypeSelector } from './hooks/useTypeSelector';

function App() {
    const { elements, constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleClick = () => {
        
    } 

    return (
        <div className='App'>
            <div className='container'></div>
        </div>
    );
}

export default App;
