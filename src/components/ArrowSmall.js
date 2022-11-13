
import React from "react";

function ArrowSmall(props)
{

    return (
        <svg
            className={props.className}
            height={props.height}
            fill="00FF6A"
            width={props.width}
            viewBox="0 0 122.25 109.5"
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon points="61.02,97.97 99.5,59.49 5.87,59.49 5.87,51.1 100.53,51.1 60.61,11.53 66.48,4.92 116.32,54.76 66.44,104.64 " />
            <polygon points="61.99,11.49 102.96,52.1 6.87,52.1 6.87,58.49 101.91,58.49 62.37,98.04 66.52,103.15 114.91,54.76 66.52,6.38 " />
        </svg>
    );
}

export default ArrowSmall;

