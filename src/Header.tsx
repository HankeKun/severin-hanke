import './Header.css';
import {Nav, Navbar} from "react-bootstrap";
import React from "react";

function Header() {
    return (
        <header>
            <Navbar fixed="top">
                <Nav className="m-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Startseite</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about-me">Über mich</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/links">Links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/impressum">Impressum</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;
