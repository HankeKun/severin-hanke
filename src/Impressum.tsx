import './Impressum.css';
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

function Impressum() {
    return (
        <div className="Impressum">
            <Header />
            <Container className="impressum-container">
                <Row>
                    <Col><h1 id="h1-impressum">Impressum</h1></Col>
                    <Col>
                        <div id="div-impressum">
                            Diese Seite ist laut § 55 RStV eine rein private Seite und benötigt somit kein Impressum.
                            Es werden auf dieser Seite keine Werbebanner oder sonstige kommerzielle Tätigkeiten ausgeführt.
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Impressum;
