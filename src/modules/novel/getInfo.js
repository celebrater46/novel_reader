import n0000 from "../../data/novel/n0000";
import n0001 from "../../data/novel/n0001";
import {getKansujiSubtitle} from "./buildIndex";
import errorLog from "../../static/errorLog";
import n0001Text from "../../data/novel/texts/n0001Text";

const nameOfComponent = "getInfo.js";

export const convertId = (novelID) => {
    switch (true) {
        case novelID < 10:
            return "000" + novelID;
        case novelID < 100:
            return "00" + novelID;
        case novelID < 1000:
            return "0" + novelID;
        default:
            return novelID;
    }
}

export const getText = (novelID, episode) => {
    if(episode) {
        switch(novelID) {        
            case 1:
                return n0001Text(episode);
            default: 
                errorLog([novelID], "novelID", "getText", nameOfComponent);
        }
    } else {
        errorLog([episode], "episode", "getText", nameOfComponent);
    }
}

// export const getIds = (num) => {
//     for(let i = 0; i < num; i++) {
//
//     }
// }

export const getData = (novelID) => {
    switch(novelID) {
        case 0:
            return n0000();
        case 1:
            return n0001();
        default:
            errorLog([novelID], "novelID", "getData", nameOfComponent);
            break;
    }
}

export const getSubtitle = (novelID, episode) => {
    if(novelID && episode) {
        const data = getData(novelID);
        const kansujiTitle = getKansujiSubtitle(episode);
        return kansujiTitle + "――" + data.subtitles[episode];
    } else {
        errorLog([novelID, episode], "novelID, episode", "getData", nameOfComponent);
    }
}

export const getInfo = () => {
    return [
        n0000(),
        n0001(),
    ];
}