import { Col, Row } from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";


export default function Header()
{
    return (
        <Row className="mt-4 justify-content-between">
            <Col>
                <h1 className="logo">Kiki Gotaway</h1>
            </Col>
            <Col xs={2} sm={2}  >
                <BurgerMenu />
            </Col>
        </Row>
    );
}

