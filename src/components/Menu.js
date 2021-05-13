import React from 'react';

const getClassName = (props, name) => {
    const currentPage = props.pageNames[props.pageNum][props.lang];
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
    for(let name of props.pageNames) {
        const className = getClassName(props, name);
        components.push(
                <div className={className}>
                    <a>{ name[props.lang] }</a>
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