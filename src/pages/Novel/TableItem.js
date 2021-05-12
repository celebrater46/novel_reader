import React, { useState } from "react";
import Img from "../../static/Img";
import Link from "next/link";
import NovelIndex from "./NovelIndex";
import errorLog from "../../static/errorLog";

const nameOfComponent = "TableItem.js";

const getH2Style = (letters, min) => {
    const x = window.innerWidth;
    if(x < min) {
        const fontSize = 6; // vw
        const width = fontSize * letters;
        return { width: width + "vw", fontSize: fontSize + "vw" };
    } else {
        return { width: "100%", fontSize: "1.6rem" };
    }
}

const TableItem = (props) => {
    const [listIsOpen, setListIsOpen] = useState(false);
    const src = "novel/n";
    const info = props.info;
    const h2Style = getH2Style(info.catchyPhrase.letters, props.mediaMinWidth);

    return (
        <div className="novelItem">
            <p className="hr">◆　◆　◆</p>
            <Link href={{ pathname: '/', query: { page: "Novel", novelID: props.novelID, num: 1, loc: 1 } }}>
                <div>
                    <Img fname={src + props.novelID + ".jpg"} imgClass="cover" />
                    <Img fname={src + props.novelID + ".png"} imgClass="cover" />
                </div>
            </Link>
            <div>
                <h2 className="catchyPhrase" style={h2Style} >{info.catchyPhrase.text}</h2>
                <h1 className="title" onClick={() => setListIsOpen(!listIsOpen)} ><a>{info.title}</a></h1>
                <p className="update">最終更新日：{ info.lastUpdate }</p>
            </div>
            <NovelIndex listIsOpen={listIsOpen} novelID={props.novelID} />
        </div>
    );
}

export default TableItem;