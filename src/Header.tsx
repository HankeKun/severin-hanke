import {Col, Container, Row} from "react-bootstrap";

function Header() {
    function handleSwitchPage(e: any, page: string) {
        e.preventDefault();
        window.location.href = page;
    }

    return (
        <div className="Header">
            <header>
                <Container>
                    <Row>
                        <Col>
                            <div onClick={(e) => handleSwitchPage(e, '/')}>Startseite</div>
                        </Col>
                        <Col>
                            <div onClick={(e) => handleSwitchPage(e, '/about-me')}>Über mich</div>
                        </Col>
                        <Col>
                            <div onClick={(e) => handleSwitchPage(e, '/links')}>Links</div>
                        </Col>
                        <Col>
                            <div onClick={(e) => handleSwitchPage(e, '/impressum')}>Impressum</div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Header;
