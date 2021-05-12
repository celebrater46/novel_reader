import n0000 from "../../data/novel/n0000";
import n0001 from "../../data/novel/n0001";
import { getKansujiSubtitle } from "./buildIndex";
import errorLog from "../../static/errorLog";
import n0001Text from "../../data/novel/texts/n0001Text";

const nameOfComponent = "getInfo.js";

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
    let chapters;
    let subtitles;
    switch(novelID) {
        case 0:
            chapters = n0000("chapters", 0);
            subtitles = n0000("subtitles", 0);
            break;
        case 1:
            chapters = n0001("chapters", 0);
            subtitles = n0001("subtitles", 0);
            break;
        default: 
            errorLog([novelID], "novelID", "getData", nameOfComponent);
            break;
    }
    return { chapters: chapters, subtitles: subtitles };
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