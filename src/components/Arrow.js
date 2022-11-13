
import React from "react";

function Arrow(props)
{

    return (
        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            viewBox="0 0 122.25 109.5"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="62.37,5.78 108.73,51.74 0,51.74 0,58.97 107.55,58.97 62.8,103.72 67.5,109.5 122.25,54.75 67.5,0 " />
        </svg>
    );
}

export default Arrow;

