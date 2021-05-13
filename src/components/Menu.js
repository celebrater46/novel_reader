import React from 'react';
import MenuChild from "./MenuChild";

const Menu = (props) => {
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <div className="menu">
            {props.pageNames.map((name) => (
                <MenuChild pageName={name} pageNames={props.pageNames} isMobile={false} changeMenu={(num) => changeMenu(num)} />
            ))}
        </div>
    );
}

export default Menu;