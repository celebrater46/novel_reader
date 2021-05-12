import React from 'react';
import TableItem from './TableItem';
import { getInfo } from "../../modules/novel/getInfo";
// import consoleLog from "../../static/consoleLog";

const items = (props) => {
    const nums = [5000, 4000];
    const info = getInfo();
    let items = [];
    for(let num of nums) {
        items.push(<TableItem info={info[num]} key={"tableItem:" + num} novelID={num} mediaMinWidth={props.mediaMinWidth} />);
        // if(props.lang == 1) {
        //     items.push(<TableItem info={info[num]} key={"tableItem:" + num} novelID={num} mediaMinWidth={props.mediaMinWidth} />);
        // } else {
        //     items.push(<p key={num} >My novel is only Japanese.</p>);
        // }
    }
    return items;
}

const Table = (props) => {
    const tableItems = items(props);

    return (
        <div className="container novelTable">
            <p>面白い小説をたくさん書いています！</p>
            <div>{tableItems}</div>
        </div>
    );
}

export default Table;