import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopCg from "img/top_cg.png";
import Img from "../../static/Img";

const getContents = (lang) => {
    if(lang === 0) {
        return "Hello World.";
    } else {
        return "　こんにちは、世界。";
    }
}

const Top = (props) => {
    const contents = getContents(props.lang)
    const h1Style = { fontSize: "48px" }
    const divStyle = {
        textAlign: "center",
        margin: "150px auto 100px",
    }
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <>
            <Header pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} isView={props.isView} changeMenu={(num) => changeMenu(num)} />
            <div style={divStyle}>
                <h1 style={h1Style}>{ contents }</h1>
                <Img fname={TopCg} imgClass={null} imgStyle={null} />
            </div>
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Top;