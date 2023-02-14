import './Homepage.css';
import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import MangaSeverin from "./images/MangaSeverin-512.png";
import video from "./images/magic.mp4"
import Header from "./Header";
import Footer from "./Footer";

function Homepage() {
    return (
        <div className="Homepage">
            <Header />
            <div className="video-header">
                <video id="video" playsInline={true} autoPlay={true} muted={true} loop={true}>
                    <source src={video} type="video/mp4" />
                </video>
                <Container className="title-container" >
                    <Row>
                        <Col><Image id="image-severin" src={MangaSeverin} roundedCircle={true} /></Col>
                        <Col id="black-background">
                            <h1 id="h1-title">Severin Hanke</h1>
                            <div id="div-title">Mobile Computing-Student & App-Entwickler</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
