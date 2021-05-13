import React from "react";

const Img = (props) => {
    const fname = props.fname;
    const imgClass = props.imgClass;
    const style = props.imgStyle;

    return (
        <img src={fname} alt={fname} className={imgClass} style={style} onError={(e) => e.target.style.display = 'none'} />
    );
}

export default Img;