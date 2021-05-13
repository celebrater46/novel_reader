import React from "react";

const getDivStyle = (lang) => {
    const marginTop = (lang === 1) ? "-7px" : "0";
    const style = {
        cursor: "pointer",
        userSelect: "none",
        marginTop: marginTop,
    }
    return style;
}

const getAStyle = (lang) => {
    const color = (lang === 0) ? "white" : "gray";
    return {
        color: color,
        fontSize: "16px",
        margin: "0 5px",
    }
}

const MenuChild = (props) => {
    const divStyle = getDivStyle(props.lang);
    const aStyle = getAStyle(props.lang);
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <div style={divStyle} onClick={() => changeMenu(props.iNum)}>
            <a style={aStyle}>{ props.pageName }</a>
        </div>
    );
}

export default MenuChild;