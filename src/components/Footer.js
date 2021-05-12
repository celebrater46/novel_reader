import React from "react";

const setClass = (isView) => {
    if(isView === true) {
        return "hidden";
    } else {
        return "normal";
    }
}

const Footer = (props) => {
    const date = new Date();
    const year = date.getFullYear();
    const divClass = setClass(props.isView);

    return (
        <footer className={divClass}>
            <div className="c1">Copyright (C) Enin Fujimi</div>
            <div className="c2">{year} All Rights Reserved.</div>
        </footer>
    );
}

export default Footer;