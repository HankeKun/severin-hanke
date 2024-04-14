import React from "react";
import ReactDOMClient from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouteNames} from "./constants/RouteNames";

import "./index.css";
import reportWebVitals from "./tests/reportWebVitals";

import Homepage from "./Homepage/Homepage";
import AboutMe from "./AboutMe/AboutMe";
import Links from "./Links/Links";
import Galerie from "./Galerie/Galerie";
import GalerieItem from "./Galerie/GalerieItem/GalerieItem";
import SHCoding from "./SHCoding/SHCoding";
import App from "./SHCoding/App/App";
import Impressum from "./Impressum/Impressum";
import {imagesBadKreuznach} from "./constants/ImagesBadKreuznach";
import {imagesBernkastelKues} from "./constants/ImagesBernkastelKues";
import {imagesWaldalgesheim} from "./constants/ImagesWaldalgesheim";
import {countdownsAppHtml} from "./constants/CountdownsApp";
import {pokeManagerAppHtml} from "./constants/PokeManagerApp";

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route index element={<Homepage/>}/>
              <Route path={RouteNames.aboutMe} element={<AboutMe/>}/>
              <Route path={RouteNames.links} element={<Links/>}/>
              <Route path={RouteNames.galerie} element={<Galerie/>}/>
              <Route path={RouteNames.galerieBadKreuznach} element={<GalerieItem images={imagesBadKreuznach} title="Bad Kreuznach"/>}/>
              <Route path={RouteNames.galerieBernkastelKues} element={<GalerieItem images={imagesBernkastelKues} title="Bernkastel-Kues"/>}/>
              <Route path={RouteNames.galerieWaldalgesheim} element={<GalerieItem images={imagesWaldalgesheim} title="Waldalgesheim"/>}/>
              <Route path={RouteNames.shCoding} element={<SHCoding/>}/>
              <Route path={RouteNames.shCodingPokeManager} element={<App title="Poké-Manager" html={pokeManagerAppHtml}/>}/>
              <Route path={RouteNames.shCodingCountdowns} element={<App title="Countdowns" html={countdownsAppHtml}/>}/>
              <Route path={RouteNames.impressum} element={<Impressum/>}/>
              <Route path="*" element={<Homepage/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
