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
                        <div id="div-aboutme">
                            Hi, ich bin Mobile Computing-Student im Master mit einem großen Interesse an Appentwicklung.
                            Desweiteren liebe ich Pokémon und Wandertouren mit meiner Verlobten 😊
                            Bei Spielen und GitHub bin ich meistens mit dem Namen HankeKun unterwegs.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
