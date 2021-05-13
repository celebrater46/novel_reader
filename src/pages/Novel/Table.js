import React from 'react';
import TableItem from './TableItem';
import { getInfo } from "./modules/getInfo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuChild from "../../components/MenuChild";

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
    // const tableItems = items(props);
    const novels = getInfo();
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }
    const changeLang = (num) => {
        return props.changeLang(num);
    }

    return (
        <>
            <Header pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} mediaMinWidth={props.mediaMinWidth} changeLang={(num) => changeLang(num)} changeMenu={(num) => changeMenu(num)} />
            <div className="container novelTable">
                <p>面白い小説をたくさん書いています！</p>
                <div>
                    {novels.map((novel, i) => (
                        <TableItem novel={novel} key={"tableItem:" + i} novelID={i} mediaMinWidth={props.mediaMinWidth} />
                    ))}
                </div>
            </div>
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Table;