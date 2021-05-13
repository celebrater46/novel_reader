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
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <>
            <Header pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} isView={props.isView} changeMenu={(num) => changeMenu(num)} />
            <h2>{ title }</h2>
            <p>{ p }</p>
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Diary;