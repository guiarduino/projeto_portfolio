import React from "react";

const Image = props => {
    return (
        <img
            className={props.className}
            src={props.src}
            height={props.height}
            width={props.width}>
        </img>
    )
}

export default Image;