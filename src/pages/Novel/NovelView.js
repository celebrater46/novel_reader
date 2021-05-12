import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import HeaderForNovel from "./HeaderForNovel";
import FooterForNovel from "./FooterForNovel";
import ButtonsOfView from "../../components/ButtonsOfView";
import { getFontSize, createPages, getTextArray, getPStyle, getDivStyle, getLettersInPage, getPs } from "../../modules/novel/createPages";
import { calcX, calcMaxPage, calcLines, calcPMax, calcMaxLoc, calcMaxEpisode } from "../../modules/novel/calc";
import EventListener from 'react-event-listener';
import errorLog from "../../static/errorLog";

const nameOfComponent = "NovelView.js";

const movePage = (isDuration, x, el) => {
    if(x && el) {
        el.style.transform = "translate(" + x + "vw, 0)";
        if(isDuration) { el.style.transitionDuration = "0.5s"; } else { el.style.transitionDuration = "0s"; }
        // errorLog([x, el, isDuration], "x, el, isDuration", "movePage", nameOfComponent);
    } else {
        errorLog([x, el], "x, el", "movePage", nameOfComponent);
    }
}

const getNextPage = (location, lettersInPages, num) => {
    let letters = 0;
    let i = 0;
    while(location > letters) {
        letters += lettersInPages[i];
        i++;
    }
    return i + num;
}

const getNewLoc = (i, lettesInPages) => {
    let loc = 0;
    while(i > 0) {
        loc += lettesInPages[i - 1];
        i--;
    }
    return loc;
}

const changePage = (isDuration, pMax, lines, location, lettersInPages) => {
    if(pMax && lines && location && lettersInPages) {
        // let letters = 0; 
        // let i = 0;
        // while(location > letters) {
        //     letters += lettersInPages[i];
        //     i++;
        // } 
        // const _location = location + (pMax * 3); // For subtitle space
        // const nextPage = Math.ceil(_location / pMax / lines);
        const nextPage = getNextPage(location, lettersInPages, 0);
        const el = document.querySelector("div.novelPages");
        const x = calcX(nextPage, lettersInPages.length);
        movePage(isDuration, x, el);
    } else {
        errorLog([isDuration, pMax, lines, location, lettersInPages], "isDuration, pMax, lines, location, lettersInPages", "changePage", nameOfComponent);
    }
}

// const changePage = (isDuration, pMax, lines, location, maxPage) => {
//     if(maxPage && pMax && lines && location && maxPage) {
//         const _location = location + (pMax * 3); // For subtitle space
//         const nextPage = Math.ceil(_location / pMax / lines);
//         const el = document.querySelector("div.novelPages");
//         const x = calcX(nextPage, maxPage);
//         movePage(isDuration, x, el);
//     } else {
//         errorLog([isDuration, pMax, lines, location, maxPage], "isDuration, pMax, lines, location, maxPage", "changePage", nameOfComponent);
//     }
// }

const pushRoute = (route, loc) => {
    if(route.query.novelID) {
        route.push({ pathname: '/', query: { page: "Novel", novelID: route.query.novelID, num: route.query.num, loc: loc }, });
    } else {
        errorLog([route.query.novelID, loc], "route.query.novelID, loc", "pushRoute", nameOfComponent);
    }
}

const getUnifiedData = (route, _size, _color) => {
    const size = ((_size) => {
        if(_size) { return _size; } else { return "M"; }
    })();

    const color = ((_color) => {
        if(_color) { return _color; } else { return "black"; }
    })();

    return {
        novelID: parseInt(route.query.novelID),
        episode: parseInt(route.query.num),
        // fontSize: getFontSize(size),
        pMax: calcPMax(getFontSize(size)),
        lines: calcLines(getFontSize(size)),
        // divStyle: getDivStyle(color, getFontSize(size)),
        // pStyle: getPStyle(color, size, false),
        // text: getTextArray(
        //     parseInt(route.query.novelID),
        //     parseInt(route.query.num),
        //     size,
        //     calcLines(getFontSize(size)),
        // ),
        maxEpisode: calcMaxEpisode(parseInt(route.query.novelID)),
        maxLoc: calcMaxLoc(
            calcPMax(getFontSize(size)),
            getTextArray(
                parseInt(route.query.novelID),
                parseInt(route.query.num),
                size,
                calcLines(getFontSize(size)),
            ),
        ),
        maxPage: calcMaxPage(
            calcPMax(getFontSize(size)),
            calcLines(getFontSize(size)),
            calcMaxLoc(
                calcPMax(getFontSize(size)),
                getTextArray(
                    parseInt(route.query.novelID),
                    parseInt(route.query.num),
                    size,
                    calcLines(getFontSize(size)),
                ),
            ),
        ),
        pages: createPages(
            parseInt(route.query.novelID), 
            parseInt(route.query.num), 
            getPs(
                color,
                size,
                getTextArray(
                    parseInt(route.query.novelID),
                    parseInt(route.query.num),
                    size,
                    calcLines(getFontSize(size)),
                ),
            ),
            // getTextArray(
            //     parseInt(route.query.novelID),
            //     parseInt(route.query.num),
            //     size,
            //     calcLines(getFontSize(size)),
            // ),
            calcLines(getFontSize(size)),
            getDivStyle(color, getFontSize(size)),
        ),
        lettersInPages: getLettersInPage(
            getTextArray(
                parseInt(route.query.novelID),
                parseInt(route.query.num),
                size,
                calcLines(getFontSize(size)),
            ),
            calcLines(getFontSize(size)),
        ),
    };
}

const NovelView = (props) => {
    const route = useRouter();
    const [size, setSize] = useState("M");
    const [color, setColor] = useState("black");
    const [currentEpisode, setCurrentEpisode] = useState(parseInt(route.query.num));
    const [location, setLocation] = useState(1);
    const [isDuration, setIsDuration] = useState(false);
    const [reload, setReload] = useState(true);
    const d = useMemo(() => getUnifiedData(route, size, color), [size, reload, color]);
    const dataMemo = useMemo(() => { console.log("d in Novel.js is ... "); console.log(d); }, [d]);
    useEffect(() => changePage(isDuration, d.pMax, d.lines, location, d.lettersInPages));
    useEffect(() => pushRoute(route, location), [location]);
    useEffect(() => { if(route.query.loc) { setLocation(() => parseInt(route.query.loc)); }}, []); // Will do it only first time

    const backToTable = () => {
        route.push({ pathname: '/', query: { page: "Novel", lang: props.lang }, });
    }

    const changeEpisodes = (isNextEpisode) => {
        if(isNextEpisode) {
            if(d.episode < d.maxEpisode) {
                route.push({ pathname: '/', query: { page: "Novel", novelID: d.novelID, num: d.episode + 1 }, });
                setCurrentEpisode(d.episode + 1);
                // console.log("d.episode at changeEpisodes in Novel.js is " + d.episode);
            } else {
                console.log("setlocation was stopped. Because next line > maxLoc and d.episode === d.maxEpisode.");
                setLocation(d.maxLoc);
            }
        } else {
            if(d.episode > 1) {
                route.push({ pathname: '/', query: { page: "Novel", novelID: d.novelID, num: d.episode - 1 }, });
            } else {
                console.log("setlocation was stopped. Because next line < 1 and d.episode <= 1.");
                setLocation(1);
            }
        }
    }

    const setStatus = (isLeft, isJump, isDuration) => {
        if(isLeft) {
            // const nextLine = Math.round(location + (d.lines * d.pMax));
            const nextPage = getNextPage(location, d.lettersInPages, 1);
            console.log("nextPage, d.lettersInPages at setStatus in NovelView.js are ... ");
            console.log(nextPage);
            console.log(d.lettersInPages);
            if(nextPage <= d.maxPage) {
                // setLocation(d.lettersInPages[nextPage - 1]);
                setLocation(getNewLoc(nextPage, d.lettersInPages));
            } else {
                changeEpisodes(true);
            }
        } else {
            // const nextLine = Math.round(location - (d.lines * d.pMax));
            const nextPage = getNextPage(location, d.lettersInPages, -1);
            if(nextPage > 0) {
                // setLocation(d.lettersInPages[nextPage - 1]);
                setLocation(getNewLoc(nextPage, d.lettersInPages));
            } else {
                changeEpisodes(false);
            }
        }
        setIsDuration(true);
    }    

    // const setStatus = (isLeft, isJump, isDuration) => {
    //     if(isLeft) {
    //         const nextLine = Math.round(location + (d.lines * d.pMax));
    //         if(nextLine < d.maxLoc) {
    //             setLocation(nextLine);
    //         } else {
    //             changeEpisodes(true);
    //         }
    //     } else {
    //         const nextLine = Math.round(location - (d.lines * d.pMax));
    //         if(nextLine > 0) {
    //             setLocation(nextLine);
    //         } else {
    //             changeEpisodes(false);
    //         }
    //     }
    //     setIsDuration(true);
    // }    

    const handleResize = () => {
        console.info(`window height:width=${window.innerHeight}:${window.innerWidth}`);
        setReload(!reload);
    };

    const toggleHeaderAndFooter = () => { 
        return props.toggleHeaderAndFooter(); 
    }

    return (
        <>
            <HeaderForNovel novelID={d.novelID} headerState={props.headerState} toggleHeaderAndFooter={() => toggleHeaderAndFooter()} backToTable={() => backToTable()} setColor={(value) => setColor(value)} setSize={(value) => setSize(value)} />
            <div className="container novelView">
                <ButtonsOfView toggleHeaderAndFooter={() => toggleHeaderAndFooter()} setStatus={(isLeft, isDuration) => setStatus(isLeft, false, isDuration)} />
                <div className="novelPages">
                    { d.pages }
                    {(() => { console.log("d.pages in NovelView.js is ... "); console.log(d.pages); })()}
                </div>
            </div>
            <FooterForNovel location={location} maxLoc={d.maxLoc} toggleHeaderAndFooter={() => toggleHeaderAndFooter()} changeLoc={(value) => setLocation(value)} />
            <EventListener target="window" onResize={handleResize} />
        </>
    );
}

export default NovelView;