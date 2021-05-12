import React from "react";

const FooterForNovel = (props) => {
    const toggleHeaderAndFooter = () => {
        return props.toggleHeaderAndFooter();
    }

    const changeLoc = (e) => {
        const _value = parseInt(e.target.value)
        return props.changeLoc(_value);
    }

    return (
        <footer className="novel movable">
            <div className="hideFooter" onClick={() => toggleHeaderAndFooter()} ></div>
            <div className="range">
                <input type="range" min="1" max={props.maxLoc} step="1" value={props.location} onChange={changeLoc} />
                <div className="loc">Loc:</div>
                <div className="locNum">{ props.location }</div>
            </div>
            <div className="hideFooter" onClick={() => toggleHeaderAndFooter()} ></div>
        </footer>
    );
}

export default FooterForNovel;