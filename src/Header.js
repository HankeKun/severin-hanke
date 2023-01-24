import './Header.css';
import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import MangaSeverin from "./MangaSeverin-512.png";
import video from "./magic.mp4"

function Header() {
    return (
        <div className="Header">
            <div className="video-header">
                <video id="video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={video} type="video/mp4" />
                </video>
                <Container className="title-container" >
                    <Row>
                        <Col><Image id="image-severin" src={MangaSeverin} roundedCircle="true" /></Col>
                        <Col id="black-background">
                            <h1 id="h1-title">Severin Hanke</h1>
                            <div id="div-title">Mobile Computing-Student & App-Entwickler</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Header;
