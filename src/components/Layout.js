import React, { useState } from 'react';
import style from "../static/Style";
import Footer from "./Footer";

const Layout = (props) => {
    let num = props.pageNum;
    if(num === undefined) { num = 0; }

    return (
        <>
            { style }
            { props.children }
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Layout;