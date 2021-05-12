import React from 'react';
import { buildIndex } from "../../modules/novel/buildIndex";
import errorLog from "../../static/errorLog";

const nameOfComponent = "NovelIndex.js";

const getClassName = (novelID) => {
    if(novelID === 5000) {
        return "novelIndex flex";
    } else if(typeof novelID === "number") {
        return "novelIndex";
    } else {
        errorLog([novelID], "novelID", "getClassName", nameOfComponent);
    }
}

const NovelIndex = (props) => {    
    if(props.listIsOpen) {
        const className = getClassName(props.novelID);
        const index = buildIndex(props.novelID);
        return <ul className={className} >{ index }</ul>
    } else {
        errorLog([props.listIsOpen, props.novelID], "props.listIsOpen, props.novelID", "NovelIndex", nameOfComponent);
        return <></>;
    }
}

export default NovelIndex;