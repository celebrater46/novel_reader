import React from "react";
import consoleLog from "../static/consoleLog";

const getClassName = (lang, name, currentPage) => {
    let className = "menuItem";
    if(lang !== 0) {
        className += " jpn";
    }
    if(name === currentPage) {
        className += " currentPage";
    }
    return className;
}

const MenuChild = (props) => {
    // consoleLog("iNum", "props.iNum", "MenuChild", "MenuChild.js");
    // console.log("props.iNum at MenuChild is: " + props.iNum);
    const className = getClassName(props.lang, props.pageName, props.currentPage);
    // const className = "menuItem";
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <div className={className} onClick={() => changeMenu(props.iNum)}>
            <a>{ props.pageName }</a>
        </div>
    );
}

export default MenuChild;