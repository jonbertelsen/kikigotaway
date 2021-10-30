import { Col, Image, Row } from "react-bootstrap";
import kikifrontpageimage from '../images/kiki_frontpage_1.png'

function Slider()
{
    return (
        <Row lg={12} className="justify-content-center mt-2 mb-4 slider">
            <Col xs={12} sm={8} md={8} >
                <Image src={kikifrontpageimage} className="mt-2" fluid />
            </Col>
        </Row>
    );
}

export default Slider;