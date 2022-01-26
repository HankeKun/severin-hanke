import './Impressum.css';
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

function Impressum() {
    return (
        <div className="Impressum">
            <Container className="impressum-container">
                <Row>
                    <Col><h1 id="h1-impressum">Impressum</h1></Col>
                    <Col>
                        <div id="div-impressum">
                            Diese Seite ist laut § 55 RStV eine rein private Seite und benötigt somit kein Impressum.
                            Es werden auf dieser Seite keine Werbebanner oder sonstige kommerzielle Tätigkieten ausgeführt.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Impressum;
