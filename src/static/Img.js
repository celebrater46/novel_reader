import React from "react";

const convertFname = (isLocal, fname) => {
    if(isLocal) {
        return fname;
    } else {
        return "./static/img/" + fname;
    }
}

const Img = (props) => {
    const fname = convertFname(props.isLocal, props.fname);
    const imgClass = props.imgClass;
    const style = props.imgStyle;

    return (
        <img src={fname} className={imgClass} style={style} onError={(e) => e.target.style.display = 'none'} />
    );
}

export default Img;