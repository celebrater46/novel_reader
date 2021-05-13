import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const getTitle = (lang) => {
    if(lang === 0) {
        return "Hoge's Diary";
    } else {
        return "Hoge の日記";
    }
}

const getP = (lang) => {
    if(lang === 0) {
        return "Write something, or put some link.";
    } else {
        return "ここに適当に何か書くか、ブログへのリンクに書き換えてちょ。";
    }
}

const Diary = (props) => {
    const title = getTitle(props.lang);
    const p = getP(props.lang);
    const h2Style = { fontSize: "100px", margin: "100px auto 0" }
    const pStyle = { margin: "100px auto" }
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }
    const changeLang = (num) => {
        return props.changeLang(num);
    }

    return (
        <>
            <Header pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} isView={props.isView} changeLang={(num) => changeLang(num)} changeMenu={(num) => changeMenu(num)} />
            <center>
                <h2 style={h2Style}>{ title }</h2>
                <p style={pStyle}>{ p }</p>
            </center>
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Diary;