import React from 'react';
import {render, hydrate} from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const Application = (
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
);

if(rootElement.hasChildNodes()){
  hydrate(Application, rootElement);
}else{
  render(Application, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
