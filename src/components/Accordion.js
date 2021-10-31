import React, { useState, useRef } from "react";
import Chevron from "../components/Chevron";

import "./accordion.css";

export default function Harmonika(props)
{

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const title = props.title
  const ContentComponent = props.contentComponent
  const sectionClass = props.sectionClass
  const accordionClass = props.accordionClass
  const titleClass = props.titleClass
  const contentClass = props.contentClass
  const arrowWidth = props.arrowWidth
  const activeClass = props.activeClass

  const content = useRef(null);

  function toggleAccordion()
  {
    setActiveState(setActive === "" ? activeClass : "");
    setHeightState(
      setActive === activeClass ? "0px" : "none"
    );
    setRotateState(
      setActive === activeClass ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className={sectionClass}>

      <button className={`${accordionClass} ${setActive}`} onClick={toggleAccordion}>
        <span className={titleClass}>{title}</span>
        <Chevron className={`${setRotate}`} width={arrowWidth} fill={"black"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={contentClass}
      >
        <div className="accordion__text">
          <ContentComponent />
        </div>
      </div>
    </div >
  );
}
