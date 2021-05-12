import { getText, getSubtitle } from "./getInfo";
import errorLog from "../../static/errorLog";

const nameOfComponent = "createPages.js";

const getColors = (bgColor) => {
    switch(bgColor) {
        case "black": return { backgroundColor: "black", color: "#bbb" };
        case "brown": return { backgroundColor: "#ecb", color: "#432" };
        case "gray": return { backgroundColor: "#333", color: "#bbb" };
        case "white": return { backgroundColor: "white", color: "#111" };
        default: errorLog([bgColor], "bgColor", "getColors", nameOfComponent); break;
    }
}

export const getDivStyle = (color, fontSize) => {
    if(color && fontSize) {
        const colors = getColors(color);
        return { 
            backgroundColor: colors.backgroundColor, 
            fontSize: fontSize + "px",
        };
    } else {
        errorLog([color, fontSize], "color, fontSize", "getDivStyle", nameOfComponent);
    }
}

export const getPStyle = (color, sizeName, isJustify) => {
    const colors = getColors(color);
    const h = window.innerHeight;
    let style = {
        color: colors.color,
    };
    if(isJustify) {
        const letterSpacing = getLetterSpacing(h, sizeName);
        if(typeof letterSpacing === "number") {
            style["letterSpacing"] = letterSpacing + "px";
        } else {
            console.log("letterSpacing is not number at getPStyle in createPages.js.");
        }
    }
    return style;
}

export const getFontSize = (size) => {
    // If PC screen, number of letters SS = 60, S = 50, M = 40, L = 30, LL = 20.
    const h = window.innerHeight;
    switch(size) {
        case "SS": return h / 75;
        case "S": return h / 63;
        case "M": return h / 50;
        case "L": return h / 38;
        case "LL": return h / 25;
        default: errorLog([size], "size", "getFontStyle", nameOfComponent); break;
    }
}

const getLetterSpacing = (h, size) => {
    // If PC screen, number of letters SS = 60, S = 50, M = 40, L = 30, LL = 20.
    switch(size) {
        case "SS": return h / 75 / 60;
        case "S": return h / 63 / 50;
        case "M": return h / 50 / 40;
        case "L": return h / 38 / 30;
        case "LL": return h / 25 / 20;
        default: errorLog([h, size], "h, size", "getLetterSpacing", nameOfComponent); break;
    }
}

export const getTextArray = (novelID, episode, sizeName, lines) => {
    try {
        const text = getText(parseInt(novelID), parseInt(episode));
        if(!text) {
            throw new Error("No text"); 
        }
        const textsArray = splitText(text, sizeName);
        const newArray = fillSpace(textsArray, lines);
        return newArray;
    } catch (e) {
        console.log(e);
        console.log("Error console: novelID, episode, sizeName, lines are ... ");
        console.log(novelID, episode, sizeName, lines);
    }
}

const fillSpace = (texts, lines) => {
    if(texts && lines) {
        const spaces = lines - (texts.length % lines);
        let _texts = texts;
        for(let i = 0; i < spaces; i++) {
            _texts.push({ text: "　", spacing: false });
        }
        return _texts;
    } else {
        errorLog([texts, lines], "texts, lines", "fillSpace", nameOfComponent);
    }
}

const getMaxLetters = (sizeName) => {
    const fontSize = getFontSize(sizeName);
    const h = window.innerHeight * 0.75;
    return Math.floor(h / fontSize);
}

const splitText = (text, sizeName) => {
    if(text && sizeName) {
        const max = getMaxLetters(sizeName);
        // errorLog([text], "text", "splitText", nameOfComponent);
        const textsArray = text.split("<br />");
        let newArray = [];
        for(let p of textsArray) {
            if(p === "") {
                newArray.push({ text: "　", spacing: false });
            } else if(p.length > max) {
                let revisedNum = 0;
                for(let i = 0; i < p.length; i += max) {
                    let _p;
                    if((p.length - i) < max) {
                        _p = p.slice(i);
                        newArray.push({ text: _p, spacing: false });
                    } else {
                        const appliedP = applyProhibition(p, i, max);
                        _p = appliedP.p;
                        newArray.push({ text: _p, spacing: appliedP.spacing });
                        revisedNum = appliedP.revisedNum;
                        i += revisedNum;
                    }
                }
            } else {
                newArray.push({ text: p, spacing: false });
            }
        }
        return newArray;
    } else {
        errorLog([text, sizeName], "text, sizeName", "splitText", nameOfComponent);
    }
}

const applyProhibition = (p, i, max) => {
    if(p && max) {
        const firstLetter = p.slice(i + max, i + max + 1);
        const lastLetter = p.slice(i + max - 1, i + max);
        if(lastLetter === "「" || lastLetter === "（" || lastLetter === "〈" || lastLetter === "《" || lastLetter === "【" || lastLetter === "［") {
            const text = p.slice(i, i + max - 1);
            return { p: text, revisedNum: -1, spacing: true };
        } else if(firstLetter === "、" || firstLetter === "。" || firstLetter === "」" || firstLetter === "）" || firstLetter === "〉" || firstLetter === "》" || firstLetter === "】" || firstLetter === "］") {
            const text = p.slice(i, i + max + 1);
            return { p: text, revisedNum: 1, spacing: false };
        } else {
            const text = p.slice(i, i + max);
            return { p: text, revisedNum: 0, spacing: false };
        }
    } else {
        errorLog([p, max], "p, max", "applyProhibition", nameOfComponent);
    }
}

export const getPs = (color, size, texts) => {
    // { text: "hoge", spacing: bool }
    // errorLog([color, size, texts], "color, size, texts", "getPs", nameOfComponent);
    let ps = [];
    for(let i = 0; i < texts.length; i++) {
        const style = getPStyle(color, size, texts[i].spacing);
        ps.push(<p key={"Line" + i} className="line" style={ style }>{ texts[i].text }</p>);
    }
    return ps;
}

export const createPages = (novelID, episode, ps, lines, divStyle) => {
    if(novelID && episode && ps && lines && divStyle) {
        const _novelID = parseInt(novelID);
        const _episode = parseInt(episode);
        let pages = [];
        for(let i = 0; i < ps.length; i += lines) {
            pages.push(createPage(_novelID, _episode, ps, i, lines, divStyle));
        }
        return <>{ pages }</>;
    } else { 
        errorLog([novelID, episode, ps, lines, divStyle], "novelID, episode, ps, lines, divStyle", "createPages", nameOfComponent);
    }
}

const setLines = (line, lines) => {
    if(line >= 0 && lines) {
        let _line = line;
        let _lines = lines;
        if(line < 1) { _lines -= 3; } // For subtitle space
        if(line >= 1) { _line -= 3; } // For subtitle space
        return { start: _line, max: _line + _lines }
    } else {
        errorLog([line, lines], "line, lines", "getLettersInPage", nameOfComponent);
    }
}

export const getLettersInPage = (text, lines) => {
    if(text && lines) {
        let lettersInPages = [];
        for(let i = 0; i < text.length; i += lines) {
            const obj = setLines(i, lines);
            let letters = 0;
            for(let i = obj.start; i < obj.max; i++) {
                letters += text[i].text.length;
            }
            lettersInPages.push(letters);
        }
        return lettersInPages;    
    } else {
        errorLog([text, lines], "text, lines", "getLettersInPage", nameOfComponent);
    }
}

const createPage = (novelID, episode, ps, line, lines, divStyle) => {
    if(novelID && episode && ps && lines && divStyle) {
        const subtitle = getSubtitle(novelID, episode);
        let _ps = [];
        const obj = setLines(line, lines);
        for(let i = obj.start; i < obj.max; i++) {
            _ps.push(ps[i]);
        }
        return (
            <div key={"novelPagesShell_" + line} className="shell">
                <div className="novelPage" style={divStyle}>
                    <div className="inner">
                        {(() => { if(line < 1) { return <h1>{ subtitle }</h1>; }})()}
                        { _ps }
                    </div>
                </div>
            </div>
        );
    } else {
        errorLog([novelID, episode, ps, lines, divStyle], "novelID, episode, ps, lines, divStyle", "createPage", nameOfComponent);
    }
}