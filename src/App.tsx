import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTypeSelector } from './hooks/useTypeSelector';

//actions import
import {dropElement} from './store/action-creators/form'

function App() {
    // const { elements, constructor } = useTypeSelector(state => state.form);

    // const dispatch = useDispatch()

    return (
        <div className='App'>
            <div className='container'></div>
        </div>
    );
}

export default App;
