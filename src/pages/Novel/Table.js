import React from 'react';
import TableItem from './TableItem';
import { getInfo } from "./modules/getInfo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {changeMenu} from "../../components/Inheritances";
// import consoleLog from "../../static/consoleLog";

const items = (props) => {
    const numberOfNovels = 2;
    const info = getInfo();
    let items = [];
    for(let i = 0; i < numberOfNovels; i++) {
        items.push(<TableItem info={info[i]} key={"tableItem:" + i} novelID={i} mediaMinWidth={props.mediaMinWidth} />);
    }
    return items;
}

const Table = (props) => {
    const tableItems = items(props);

    return (
        <>
            <Header pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} isView={props.isView} changeMenu={(num) => changeMenu(props, num)} />
            <div className="container novelTable">
                <p>面白い小説をたくさん書いています！</p>
                <div>{tableItems}</div>
            </div>
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Table;