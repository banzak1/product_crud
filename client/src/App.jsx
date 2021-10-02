import React,{ Fragment } from 'react';
import './App.css';

//components

import InputProdutos from './components/InputProdutos';
import ListProdutos from './components/ListProdutos'

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputProdutos />
      <ListProdutos />
    </div>
  </Fragment>
  );
};

export default App;
