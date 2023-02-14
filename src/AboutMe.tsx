import './AboutMe.css';
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

function AboutMe() {
    return (
        <div className="AboutMe">
            <Header />
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
            <Footer />
        </div>
    );
}

export default AboutMe;
