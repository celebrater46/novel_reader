import React from 'react';
import {changeMenu} from "./Inheritances";

const getClassName = (props, name) => {
    const currentPage = props.pageNames[props.pageNum];
    let className = "menuItem";
    if(props.lang !== 0) {
        className += " jpn";
    }
    if(currentPage === name[props.lang]) {
        className += " currentPage";
    }
    return className;
}

const getMenuItems = (props) => {
    let components = [];
    for(let i = 0; i < props.pageNames.length; i++) {
        const className = getClassName(props, props.pageNames[i]);
        components.push(
                <div className={className} onClick={() => changeMenu(i)}>
                    <a>{ props.pageNames[i] }</a>
                </div>
        );
    }
    return components;
}

const Menu = (props) => {
    const menuItems = getMenuItems(props);

    return (
        <div className="menu">
            { menuItems }
        </div>
    );
}

export default Menu;