import React from 'react';
import Table from "./Table";
import NovelView from "./NovelView";
import {changeMenu} from "../../components/Inheritances";

// const nameOfComponent = "Novel/Novel.js";

const Novel = (props) => {
    const toggleHeaderAndFooter = () => {
        return props.toggleHeaderAndFooter();
    }

    if(props.isView) {
        return <NovelView lang={props.lang} toggleHeaderAndFooter={() => toggleHeaderAndFooter()} />;
    } else {
        return <Table pageNum={props.pageNum} pageNames={props.pageNames} isView={false} lang={props.lang} mediaMinWidth={props.mediaMinWidth} changeMenu={(num) => changeMenu(props, num)} />;
    }
}

export default Novel;