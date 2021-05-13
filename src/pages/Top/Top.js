import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {changeMenu} from "../../components/Inheritances";

const Contents = (props) => {
    if(props.lang === 0) {
        return <h1>Hello World.</h1>;
    } else {
        return <h1>こんにちは、世界。</h1>
    }
}

const Top = (props) => {
    return (
        <>
            <Header pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} isView={props.isView} changeMenu={(num) => changeMenu(props, num)} />
            <Contents />
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Top;