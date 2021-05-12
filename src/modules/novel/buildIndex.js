import { getData } from "./getInfo";
import kansuji from "../kansuji";
import errorLog from "../../static/errorLog";

const nameOfComponent = "buildindex.js";

const getChapterName = (num, novelID, chapter) => {
    if(num && novelID && chapter) {
        const kansujiNum = kansuji(num);
        if(novelID === 5000) {
            return (
                <h4>
                    <div>{ "第" + kansujiNum + "章" }</div>
                    <div className="line"><hr /></div>
                    <div>{ chapter }</div>
                </h4>
            );
        } else {
            return <h4>{ chapter }</h4>;
        }
    } else {
        errorLog([num, novelID, chapter], "num, novelID, chapter", "getChapterName", nameOfComponent);
    }
}

export const getKansujiSubtitle = (num) => {
    if(num) {
        const kansujiNum = kansuji(num);
        return "第" + kansujiNum + "話";
    } else {
        errorLog([num], "num", "getKansujiSubtitle", nameOfComponent);
    }
}

const getList = (num, novelID, subtitle) => {
    if(num && novelID && subtitle) {
        const kansujiNum = getKansujiSubtitle(num);
        return (
            <>
                {(()=> {
                    if(novelID === 5000) {
                        return (
                            <>
                                <div>{ kansujiNum }</div>
                                <div className="line"><hr /></div>
                                <div>{ subtitle }</div>
                            </>
                        );
                    } else {
                        return <>{ kansujiNum }</>;
                    }
                })()}
                
            </>
        );
    } else {
        errorLog([num, novelID, subtitle], "num, novelID, subtitle", "getList", nameOfComponent);
    }
}

export const buildOptions = (novelID) => {
    if(novelID) {
        const data = getData(novelID);
        let options = [];
        for(let i = 0; i < data.subtitles.length; i++) {
            options.push(
                <option key={"op_" + i} value={i + 1}>
                    {(()=> getKansujiSubtitle(i + 1))()}
                </option>
            );
        }
        return options;
    } else {
        errorLog([novelID], "novelID", "buildOptions", nameOfComponent);
    }
}

export const buildIndex = (novelID) => {
    if(novelID) {
        const data = getData(novelID);
        let li = [];
        let j = 0;
        for(let i = 0; i < data.subtitles.length; i++) {
            if(data.chapters[j].start === (i + 1)) {
                li.push(
                    <li key={"chapter_" + i} className="h4">
                        {(()=> getChapterName(j + 1, novelID, data.chapters[j].name ))()}
                    </li>
                );
                j++;
            }
            li.push(
                // <Link key={"subtitle_" + i} href={{ pathname: '/', query: { page: "Novel", novelID: novelID, num: i + 1, loc: 1 } }}>
                    <li className="subtitle">
                        {(()=> getList(i + 1, novelID, data.subtitles[i]))()}
                    </li>
                // </Link>
            );
        }
        return li;
    } else {
        errorLog([novelID], "novelID", "buildIndex", nameOfComponent);
    }
}