import React, { useState, useRef, useEffect } from "react";
import Arrow from "./Arrow";
import ArrowSmall from "./ArrowSmall";


import "./accordion.css";

export default function Harmonika(props)
{

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("");

  const title = props.title
  const ContentComponent = props.contentComponent
  const sectionClass = props.sectionClass
  const accordionClass = props.accordionClass
  const titleClass = props.titleClass
  const contentClass = props.contentClass
  const arrowWidth = props.arrowWidth
  const activeClass = props.activeClass
  const accordion_text = props.accordionText;

  const content = useRef(null);

  useEffect(() =>
  {
    (props.accordionClass === "accordion") ? setRotateState("accordion_icon") : setRotateState("accordion_icon_small")
  }, [])

  function toggleAccordion()
  {
    setActiveState(setActive === "" ? activeClass : "");
    setHeightState(
      setActive === activeClass ? "0px" : "none"
    );

    accordionClass === "accordion" ?
      setRotateState(
        setActive === activeClass ? "accordion_icon" : "accordion_icon rotate"
      ) :
      setRotateState(
        setActive === activeClass ? "accordion_icon_small" : "accordion_icon_small rotate"
      )
  }

  return (
    <div className={sectionClass}>

      <button className={`${accordionClass} ${setActive}`} onClick={toggleAccordion}>
        {accordionClass === "accordion" &&
          <h1 className={titleClass}>{title}</h1>
        }
        {accordionClass === "accordion" &&
          <Arrow className={`${setRotate}`} width={arrowWidth} fill={'black'} />
        }
        {accordionClass === "accordion_small" &&
          <ArrowSmall className={`${setRotate}`} width={arrowWidth} fill={'black'} />
        }
        {accordionClass === "accordion_small" &&
          <h2 className={titleClass}>{title}</h2>
        }
      </button>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={contentClass}
      >
        <div className={accordion_text}>
          <ContentComponent />
        </div>
      </div>
    </div >
  );
}
