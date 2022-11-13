import Odense from "./work/Odense";
import TheArchiveHouse from "./work/Thearchivehouse";
import Accordion from "./Accordion";

export default function Work()
{
    return (

        <div className="accordionContent">
            <div className="accordionBorder">
                <Accordion title="The Archive House" contentComponent={TheArchiveHouse} sectionClass="accordion_section" accordionClass="accordion_small" titleClass="accordion_title_small" contentClass="accordion_content" accordionText="accordion_text_small" arrowWidth="36" activeClass="active_small" />
            </div>
            <div className="accordionBorder">
                <Accordion title="Odense" contentComponent={Odense} sectionClass="accordion_section" accordionClass="accordion_small" titleClass="accordion_title_small" contentClass="accordion_content" accordionText="accordion_text_small" arrowWidth="36" activeClass="active_small" />
            </div>

        </div>
    );
}
