import {Row, Col} from "react-bootstrap";

export default function Footer() {
    return (
        <Row className="footer-styling">
            <Col lg={5}>
                <h1>Kiki Gotaway</h1>
                <h3>Visit Kiki Gotaway Social Club</h3>
                <p>Classensgade No 13, kld th<br/>
                    2100 Copenhagen Ø / Denmark<br/>
                    Open by appointment</p>

                <h3>Contact Kiki</h3>
                <p>Mail: info@kikigotaway.dk<br/>
                    Phone: 21 63 67 68</p>

                <h3>Kiki numerology</h3>
                <p>Kiki Gotaway v. Olga Bastian Cvr. №: 12345<br/>
                    Kiki Gotaway v. Heidi Volke Cvr. №: 12345 </p>
            </Col>
            <Col lg={2}>

            </Col>
            <Col lg={5}>
                <h3>LinkedIn -></h3>
                <h3>Instagram -></h3>
                <h3>All right Reserved</h3>
                <br/>
                <br/>
                <p>This webpage is CO2 neutral</p>
            </Col>

        </Row>
    );
}

