import styles from './Header.module.css';
import React from "react";

function Header() {
    return (
        <header>
            <nav>
                <div>
                    <a className={styles.navLink} href="/">Startseite</a>
                    <a className={styles.navLink} href="/about-me">Über mich</a>
                    <a className={styles.navLink} href="/links">Links</a>
                    <a className={styles.navLink} href="/impressum">Impressum</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
