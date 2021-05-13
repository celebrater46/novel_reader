import React from "react";

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
    const className = getClassName(props.lang, props.pageName, props.currentPage);
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