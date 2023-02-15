import styles from './Header.module.css';
import React from "react";

function Header() {
    return (
        <header>
            <ul className="m-auto">
                <li>
                    <a className={styles.navLink} href="/">Startseite</a>
                </li>
                <li>
                    <a className={styles.navLink} href="/about-me">Über mich</a>
                </li>
                <li>
                    <a className={styles.navLink} href="/links">Links</a>
                </li>
                <li>
                    <a className={styles.navLink} href="/impressum">Impressum</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
