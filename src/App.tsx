import React from 'react';
import Header from './components/Header/Header';
import FormConstructor from './components/FormConstructor/FormConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { useTypeSelector } from './hooks/useTypeSelector';
import {dropElement} from './store/action-creators/form'

function App() {
  // const { elements, constructor } = useTypeSelector(state => state.form);

  // const dispatch = useDispatch()
  return (
    <div className='App'>
      <div className='container'>
        <Header></Header>
        <FormConstructor />
      </div>
    </div>
  );
