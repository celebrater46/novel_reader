import React from "react";
import { buildOptions } from "./modules/buildIndex";
import consoleLog from "../../static/consoleLog";

const getOptions = (obj) => {
    let options = [];
    for(const item in obj) {
        options.push(<option key={item} value={item}>{ obj[item] }</option>);
    }
    return options;
}

const getColors = () => {
    const colors = { black: "黒", brown: "茶", gray: "灰", white: "白" };
    return getOptions(colors);
}

const getSizes = () => {
    const sizes = { SS: "極小", S: "小", M: "中", L: "大", LL: "特大" };
    return getOptions(sizes);
}

const HeaderForNovel = (props) => {
    const index = buildOptions(props.novelID);
    const colors = getColors();
    const sizes = getSizes();

    const toggleHeaderAndFooter = () => {
        return props.toggleHeaderAndFooter();
    }

    const backToTable = () => {
        return props.backToTable();
    }

    const setColor = (e) => {
        consoleLog([e.target.value], "e.target.value", "setColor", "HeaderForNovel");
        return props.setColor(e.target.value);
    }

    const setSize = (e) => {
        consoleLog([e.target.value], "e.target.value", "setSize", "HeaderForNovel");
        return props.setSize(e.target.value);
    }

    const setIndex = (e) => {
        // console.log("e.target.value at setIndex() in HeaderForNovel.js is ... " + e.target.value);
    }

    return (
        <header className="novel movable">
            <div className="hideHeader" onClick={() => toggleHeaderAndFooter()} ></div>
            <div className="back" onClick={() => backToTable()} >←</div>
            <select name="backgroundColor" onChange={setColor}>
                { colors }
            </select>
            <select name="fontSize" onChange={setSize}>
                { sizes }
            </select>
            <select name="novelIndex" onChange={setIndex}>
                { index }
            </select>
            <div className="hideHeader" onClick={() => toggleHeaderAndFooter(props)} ></div>
        </header>
    );
}

export default HeaderForNovel;