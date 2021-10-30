import { Row, Col } from "react-bootstrap";

export default function Footer()
{
    return (
        <Row className="pt-3 mt-4 ">

            <Col sm={4}>
                <h3>Kiki Gotaway</h3>
                <p>Social Club<br />
                    Classensgade No 13 kld th<br />
                    2100 Copenhagen Ø / Denmark<br />
                    Open by appointment</p>
            </Col>
            <Col sm={4}>
                <h3>When in doubt:<br />
                    Call Kiki</h3>
                <p>Heidi: 31 31 67 57 / Olga: 21 63 67 68</p>
            </Col>
            <Col sm={4}>
                <h3>Kiki by numbers</h3>
                <p>Kiki Gotaway v.Olga Bastian Cvr.No: 12345<br />
                    Kiki Gotaway v.Heidi Volke Cvr.No: 12345</p>
            </Col>

        </Row>
    );
}