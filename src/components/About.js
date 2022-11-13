import Experience from "./Experience";
import { Col, Row } from 'react-bootstrap'

export default function About()
{
    return (
        <Row className="content_block">
            <Col>
                Denne afdeling handler om Kiki og de folk som er omkring.
                <Experience />
            </Col>
        </Row>

    );
}

