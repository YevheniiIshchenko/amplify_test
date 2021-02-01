import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import SignUp from './signUp';
import SignIn from './SignIn';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import '@aws-amplify/ui/dist/style.css'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
 
Amplify.configure(config);

ReactDOM.render(
  <Router>
    <div>
      <Route path="" component={Header} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/home" component={App} />
      <Route path="/signIn" component={SignIn} />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
