import React from 'react';
import style from "../static/style";

const Layout = (props) => {
    return (
        <>
            { style }
            { props.children }
        </>
    );
}

export default Layout;