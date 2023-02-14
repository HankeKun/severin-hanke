import './Links.css';
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Pokeball from "./images/Pokeball.png";
import Header from "./Header";
import Footer from "./Footer";

function Links() {
    return (
        <div className="Links">
            <Header />
            <Container className="links-container">
                <Row>
                    <Col><h1 id="h1-links">Links</h1></Col>
                    <Col id="link-symbols">
                        <a href="https://github.com/HankeKun" title="GitHub" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.instagram.com/hankekun/" title="Instagram" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="mailto:mail@severin-hanke.de" title="Email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://www.pokewiki.de/Darkrai" title="Lieblingspokémon" target="_blank" rel="noopener noreferrer">
                            <img src={Pokeball}  alt="Pokeball" />
                        </a>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Links;
