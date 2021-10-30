import { Col, Row } from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";


export default function Header()
{
    return (
        <Row className="mt-4">
            <Col>
                <h1 class="logo">Kiki Gotaway</h1>
            </Col>
            <Col>
                <BurgerMenu />
            </Col>
        </Row>
    );
}

