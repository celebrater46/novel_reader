import React from 'react';
import Top from "./Top";
import Profile from "./Profile/index";
import Comic from "./Comic/index";
import Gallery from "./Gallery/index";
import Game from "./Game/index";
import Novel from "./Novel/index";
import Diary from "./Diary";
import Tool from "./Tool/index";
import Test from "./Test";

const moveHeader = (props, bool) => {
    return props.moveHeader(bool);
}

const Switch = (props) => {
    // console.log("props.pageName in Switch.js is " + props.pageNum);
    const judgeWindowType = () => {
        return props.judgeWindowType();
    }

    const toggleHeaderAndFooter = () => {
        return props.toggleHeaderAndFooter();
    }

    switch(props.pageNum) {
        case undefined: return <Top lang={props.lang} />;
        case 0: return <Top lang={props.lang} />;
        case 1: return <Profile lang={props.lang} />;
        case 2: return <Gallery lang={props.lang} />;
        case 3: return <Comic lang={props.lang} isView={props.isView.comic} headerState={props.headerState} window={props.window} toggleHeaderAndFooter={() => toggleHeaderAndFooter()} moveHeader={(bool) => moveHeader(props, bool)} judgeWindowType={() => judgeWindowType()} />;
        case 4: return <Game lang={props.lang} mediaMinWidth={props.mediaMinWidth} />;
        case 5: return <Novel lang={props.lang} isView={props.isView.novel} headerState={props.headerState} mediaMinWidth={props.mediaMinWidth} toggleHeaderAndFooter={() => toggleHeaderAndFooter()} />;
        case 6: return <Diary lang={props.lang} />;
        case 7: return <Tool lang={props.lang} />;
        case 8: return <Test lang={props.lang} />;
        default: return (<div>Switch pageNum の値が{ props.pageNum }、不正です。</div>);
    }
}

export default Switch;