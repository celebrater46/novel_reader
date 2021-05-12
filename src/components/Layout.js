import React from 'react';
import style from "../static/Style";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            { style }
            { props.children }
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Layout;