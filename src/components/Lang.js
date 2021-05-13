import React, from 'react';
import consoleLog from "../static/consoleLog";

const Lang = (props) => {
    consoleLog([props.lang], "props.lang", "Lang", "components/Lang");

    return (
        <div className="lang">
            {(()=> {
                if(props.lang == 1) {
                    return <img src="../static/img/jpn.png" className="lang" />;
                } else {
                    return <img src="../static/img/jpn.png" className="lang void" />;
                }
            })()}
            {(()=> {
                if(props.lang == 0) {
                    return <img src="../static/img/usa.png" className="lang" />;
                } else {
                    return <img src="../static/img/usa.png" className="lang void" />;
                }
            })()}
        </div>
    );
}

export default Lang;