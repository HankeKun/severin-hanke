import './Impressum.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Impressum() {
    return (
        <div className="Impressum">
            <Header />
            <div className="impressum-container">
                <table>
                    <tr>
                        <td><h1 id="h1-impressum">Impressum</h1></td>
                        <td>
                            <div id="div-impressum">
                                Diese Seite ist laut § 55 RStV eine rein private Seite und benötigt somit kein Impressum.
                                Es werden auf dieser Seite keine Werbebanner oder sonstige kommerzielle Tätigkeiten ausgeführt.
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Impressum;
