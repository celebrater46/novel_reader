import React, {useEffect, useMemo, useState} from 'react';
import Top from "../pages/Top/Top";
import Profile from "../pages/Profile/Profile";
import Novel from "../pages/Novel/Novel";
import Diary from "../pages/Diary/Diary";

const judgeWindowType = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if(w > h) {
        return "x";
    } else {
        return "y";
    }
}

const getPageNames = (lang) => {
    if(lang === 0) {
        return ["Top", "Profile", "Novels", "Diary"];
    } else {
        return ["表紙", "管理人", "小説", "日記"];
    }
}

const Switch = () => {
    const mediaMinWidth = 800;
    const [num, setNum] = useState(0);
    const [lang, setLang] = useState(1); // 1==Ja
    const [window, setWindow] = useState(null);
    // const pageNames = useMemo(() => getPageNames(lang), [lang]);
    const pageNames = ["Top", "Profile", "Novels", "Diary"];
    useEffect(() => setWindow(judgeWindowType()));

    switch(num) {
        case undefined: return <Top pageNum={num} pageNames={pageNames} lang={lang} changeMenu={(num) => setNum(num)} />;
        case 0: return <Top pageNum={num} pageNames={pageNames} lang={lang} changeMenu={(num) => setNum(num)} />;
        case 1: return <Profile pageNum={num} pageNames={pageNames} lang={lang} changeMenu={(num) => setNum(num)} />;
        case 2: return <Novel pageNum={num} pageNames={pageNames} lang={lang} mediaMinWidth={mediaMinWidth} changeMenu={(num) => setNum(num)} />;
        case 3: return <Diary pageNum={num} pageNames={pageNames} lang={lang} changeMenu={(num) => setNum(num)} />;
        default: return (<div>Switch num の値が{num}、不正です。</div>);
    }
}

export default Switch;