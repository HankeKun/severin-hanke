import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css';
import reportWebVitals from './tests/reportWebVitals';

import Homepage from './Homepage';
import AboutMe from "./AboutMe";
import Links from "./Links";
import Impressum from "./Impressum";
import Galerie from "./Galerie";

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route index element={<Homepage/>}/>
              <Route path="/about-me" element={<AboutMe/>}/>
              <Route path="/links" element={<Links/>}/>
              <Route path="/galerie" element={<Galerie/>}/>
              <Route path="/impressum" element={<Impressum/>}/>
              <Route path="*" element={<Homepage/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
