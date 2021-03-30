import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = ' Koenomatachi San';
const element = <h1>Olá! Este é React com JS puro, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);