import "./Impressum.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Impressum() {
    return (
        <div id="impressum-div">
            <Header />
            <div id="impressum-content">
                <h1>Impressum</h1>
                <div>
                    Diese Seite ist laut § 55 RStV eine rein private Seite und benötigt somit kein Impressum.
                    Es werden auf dieser Seite keine Werbebanner oder sonstige kommerzielle Tätigkeiten ausgeführt.
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Impressum;
