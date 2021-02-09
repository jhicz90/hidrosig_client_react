import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Componentes
import Web from './components/web/web';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
//Servicios
//Estilos
import './index.css';
import 'rsuite/dist/styles/rsuite-default.css';
// --------------------------------------- //

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Web />
        </Route>
        <Route exact path="/app">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
