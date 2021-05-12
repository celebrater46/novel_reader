import React, { useState } from 'react';
import style from "../static/Style";
// import Head from "next/head";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import consoleLog from "../static/consoleLog";
// import HeaderForComic from "../pages/Comic/HeaderForComic";

const addTitle = (num, lang, names) => {
    const titles = ["ENINGRAD", "エニングラード"];
    consoleLog([lang, num, names], "lang, num, names", "addTitle", "components/Layout");
    if(num === 0) {
        return titles[lang];
    } else {
        return titles[lang] + " ｜ " + names[num][lang];
    }
}

const Layout = (props) => {
    let num = props.pageNum;
    if(num === undefined) { num = 0; }
    const title = addTitle(num, props.lang, props.pageNames);
    consoleLog([props.pageNames, props.pageNum, props.lang], "props.pageNames, props.pageNum, props.lang", "Layout", "components/Layout");

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="富士見永人（enin）のイラスト、WEB漫画、ゲーム、小説などの作品を公開するサイトです。Eningrad is Enin’s website with Enin's works, such as Comics, Pictures, Novels and Games." />
                <meta name="copyright" content="Enin Fujimi - 富士見永人" />
            </Head>
            { style }
            {(() => {
                if(!props.isView.comic && !props.isView.novel) {
                    return <Header pageNum={num} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} isView={props.isView} headerToggle={(bool) => headerToggle(bool)} />;
                }
            })()}
            { props.children }
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Layout;