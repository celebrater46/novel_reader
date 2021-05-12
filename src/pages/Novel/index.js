import React from 'react';
import Table from "./Table";
import NovelView from "./NovelView";

// const nameOfComponent = "Novel/index.js";

const Novel = (props) => {
    const toggleHeaderAndFooter = () => {
        return props.toggleHeaderAndFooter();
    }

    return (
        <>
            {(()=> {
                if(props.isView) {
                    return <NovelView lang={props.lang} toggleHeaderAndFooter={() => toggleHeaderAndFooter()} />;
                } else {
                    return <Table lang={props.lang} mediaMinWidth={props.mediaMinWidth} />;
                }
            })()}
        </>
    );
}

export default Novel;