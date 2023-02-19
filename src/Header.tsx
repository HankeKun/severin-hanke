import './Header.css';
import React from "react";

function Header() {
    return (
        <header>
            <nav>
                <a href="/">Startseite</a>
                <a href="/about-me">Über mich</a>
                <a href="/links">Links</a>
            </nav>
        </header>
    );
}

export default Header;
