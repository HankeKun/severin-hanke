import './Galerie.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Galerie() {
    return (
        <div id="galerie-div">
            <Header />
            <div id="galerie-content">
                <h1>Galerie</h1>
                <div>
                    Lorem ipsum
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Galerie;