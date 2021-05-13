import React from "react";

const getClassName = (lang, name, iName) => {
    let className = "menuItem";
    if(lang !== 0) {
        className += " jpn";
    }
    if(name === iName) {
        className += " currentPage";
    }
    return className;
}

const MenuChild = (props) => {
    // const className = getClassName(props.lang, props.name, props.pageNames[props.iNum]);
    const className = "menuItem";
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <div className={className} onClick={() => changeMenu(1)}>
            <a>{ props.name }</a>
        </div>
    );
}

export default MenuChild;