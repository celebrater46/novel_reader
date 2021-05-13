import React, {useState} from "react";
import NovelIndex from "./NovelIndex";
import {convertId} from "./modules/getInfo";
import N0000 from "./img/n0000.jpg"
import N0001 from "./img/n0001.png"
import consoleLog from "../../static/consoleLog";

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

const Door = (props) => {
    const imgStyle = {
        width: "800px",
        height: "auto",
    }

    switch(props.novelID) {
        case "0000":
            return <img src={N0000} style={imgStyle} />
        case "0001":
            return <img src={N0001} style={imgStyle} />
        default:
            consoleLog(props.novelID, "novelID", "Img", "TableItem");
            return null;
    }
}

const TableItem = (props) => {
    const [listIsOpen, setListIsOpen] = useState(false);
    const info = props.info;
    const h2Style = getH2Style(info.catchyPhrase.letters, props.mediaMinWidth);
    const convertedId = convertId(props.novelID);

    return (
        <div className="novelItem">
            <p className="hr">◆　◆　◆</p>
            <div>
                <Door novelID={convertedId} />
            </div>
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