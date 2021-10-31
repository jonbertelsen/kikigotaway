import { Col, Row } from "react-bootstrap";
import Odense from "./work/Odense";
import TheArchiveHouse from "./work/Thearchivehouse";
import Accordion from "./Accordion";

export default function Work()
{
    return (
        <Row>
            <Col>
                <p>Denne afdeling handler om diverse cases og projektet, som Kiki har lavet.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="accordionContainer">
                    <Accordion title="The Archive House" contentComponent={TheArchiveHouse} sectionClass="accordion__section" accordionClass="accordion__small" titleClass="accordion__title__small" contentClass="accordion__content" arrowWidth="8" activeClass="active__small" />
                    <Accordion title="Odense" contentComponent={Odense} sectionClass="accordion__section" accordionClass="accordion__small" titleClass="accordion__title__small" contentClass="accordion__content" arrowWidth="8" activeClass="active__small" />
                </div>
            </Col>
        </Row>
    );
}
