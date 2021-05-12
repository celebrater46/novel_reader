import React from 'react';
import TableItem from './TableItem';
import { getInfo } from "../../modules/novel/getInfo";
import consoleLog from "../../static/consoleLog";

const items = (props) => {
    const nums = [5000, 4000];
    const info = getInfo();
    let items = [];
    for(let num of nums) {
        if(props.lang == 1) {
            items.push(<TableItem info={info[num]} key={"tableItem:" + num} novelID={num} mediaMinWidth={props.mediaMinWidth} />);
        } else {
            items.push(<p key={num} >My novel is only Japanese.</p>);
        }
    }
    return items;
}

const Table = (props) => {
    const tableItems = items(props);

    return (
        <div className="container novelTable">
            <p>富士見永人名義で小説を書いています。</p>
            <p>小説投稿サイトの<a href="https://novelup.plus/user/350590019/profile" target="_blank">ノベルアッププラス</a>、<a href="http://mypage.syosetu.com/476781/" target="_blank">小説家になろう</a>、<a href="https://kakuyomu.jp/users/eningrad" target="_blank">カクヨム</a>でも活動中です。</p>
            <div>{tableItems}</div>
        </div>
    );
}

export default Table;