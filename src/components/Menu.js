import React from 'react';
import MenuChild from "./MenuChild";

const Menu = (props) => {
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <div className="menu">
            {props.pageNames.map((name, i) => (
                <MenuChild iNum={i} pageName={name} currentPage={props.pageNames[props.pageNum]} isMobile={false} changeMenu={(num) => changeMenu(num)} />
            ))}
        </div>
    );
}

export default Menu;