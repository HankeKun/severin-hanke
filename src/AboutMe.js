import './AboutMe.css';
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

function AboutMe() {
    return (
        <div className="AboutMe">
            <Container className="aboutme-container">
                <Row>
                    <Col><h1 id="h1-aboutme">Über mich</h1></Col>
                    <Col>
                        <div id="div-aboutme">Hi, ich bin Informatik Student mit einem großen Interesse an Softwareentwicklung.</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
