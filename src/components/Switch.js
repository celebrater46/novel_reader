import React, {useEffect, useState} from 'react';
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

const Switch = () => {
    const mediaMinWidth = 800;
    const [num, setNum] = useState(0);
    const [lang, setLang] = useState(1); // 1==Ja
    const [window, setWindow] = useState(null);
    const pageNames = ["Top", "Profile", "Novels", "Diary"];
    useEffect(() => setWindow(judgeWindowType()));

    switch(num) {
        case undefined: return <Top pageNum={num} pageNames={pageNames} lang={lang} />;
        case 0: return <Top pageNum={num} pageNames={pageNames} lang={lang} />;
        case 1: return <Profile pageNum={num} pageNames={pageNames} lang={lang} />;
        case 2: return <Novel pageNum={num} pageNames={pageNames} lang={lang} mediaMinWidth={mediaMinWidth} />;
        case 3: return <Diary pageNum={num} pageNames={pageNames} lang={lang} />;
        default: return (<div>Switch num の値が{num}、不正です。</div>);
    }
}

export default Switch;