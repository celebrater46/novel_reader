import React, { useState } from "react";

const Buttons = (props) => {
    const setStatus = (isLeft) => {
        return props.setStatus(isLeft, true);
    }

    const toggleHeaderAndFooter = () => {
        return props.toggleHeaderAndFooter();
    }

    return (
        <div className="hiddenDiv">
            <div className="header" onClick={()=> toggleHeaderAndFooter()}>
                <div>
                    Header
                </div>
            </div>
            <div className="middle">
                <div className="LR" onClick={()=> setStatus(true)}>L</div>
                <div className="LR" onClick={()=> setStatus(false)}>R</div>
            </div>
            <div className="footer">
                Footer
            </div>
        </div>
    );
}

export default Buttons;