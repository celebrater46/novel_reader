import React, { useMemo } from 'react';
import Link from "next/link";
import consoleLog from "../static/consoleLog";

const Lang = (props) => {
    consoleLog([props.lang], "props.lang", "Lang", "components/Lang");

    return (
        <div className="lang">
            <Link key="jp" href={{ pathname: '/', query: { page: props.pageNames[props.pageNum][0], lang: 1 } }}>
                {(()=> {
                    if(props.lang == 1) {
                        return <img src="../static/img/jpn.png" className="lang" />;
                    } else {
                        return <img src="../static/img/jpn.png" className="lang void" />;
                    }
                })()}
            </Link>
            <Link key="en" href={{ pathname: '/', query: { page: props.pageNames[props.pageNum][0], lang: 0 } }}>
                {(()=> {
                    if(props.lang == 0) {
                        return <img src="../static/img/usa.png" className="lang" />;
                    } else {
                        return <img src="../static/img/usa.png" className="lang void" />;
                    }
                })()}
            </Link>
        </div>
    );
}

export default Lang;