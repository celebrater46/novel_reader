import { getData } from "./getInfo";
import errorLog from "../../../static/errorLog";

const nameOfComponent = "calc.js";

export const calcX = (page, maxPage) => {
    // 2P = -100, 100
    // 4P = -150, -50, 50, 150
    //       100  200 300  400  -250
    // 5P = -200, -100, 0, 100, 200
    //       100   200 300 400  500  -300
    // 6P = -250, -150, -50, 50, 150, 250
    //       100   200  300 400  500  600 -350
    if(page && maxPage) {
        return page * 100 - ((maxPage + 1) * 50);
    } else {
        errorLog([page, maxPage], "page, maxPage", "calcX", nameOfComponent);
    }
}

export const calcMaxPage = (pMax, lines, maxLoc) => {
    if(maxLoc) {
        return Math.ceil(maxLoc / pMax / lines);
    } else {
        errorLog([maxLoc], "maxLoc", "calcMaxPage", nameOfComponent);
    }
}

export const calcLines = (fontSize) => {
    if(fontSize) {
        const w = window.innerWidth;
        return Math.floor((w * 0.8) / (fontSize * 2));
    } else {
        errorLog([fontSize], "fontSize", "calcLines", nameOfComponent);
    }
}

export const calcPMax = (fontSize) => {
    if(fontSize) {
        const h = window.innerHeight * 0.75;
        const pMax = Math.floor(h / fontSize);
        return pMax;
    } else {
        errorLog([fontSize], "fontSize", "calcPMax", nameOfComponent);
    }
}

export const calcMaxLoc = (pMax, text) => {
    if(pMax && text) { 
        return (text.length - 3) * pMax; 
    } else { 
        errorLog([pMax, text], "pMax, text", "calcMaxLoc", nameOfComponent);
    } 
}

export const calcMaxEpisode = (novelID) => {
    if(novelID) {
        const _novelID = parseInt(novelID)
        const episodes = getData(_novelID);
        return episodes.subtitles.length;
    } else {
        errorLog([novelID], "novelID", "calcMaxEpisode", nameOfComponent);
    }
}