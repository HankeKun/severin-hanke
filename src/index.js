import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import Header from './Header';
import AboutMe from './AboutMe';
import Links from "./Links";
import Impressum from './Impressum';
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <Links/>
    <Impressum />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
