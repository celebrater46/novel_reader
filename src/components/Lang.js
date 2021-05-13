import consoleLog from "../static/consoleLog";
import Jpn from './img/jpn.png';
import Usa from './img/usa.png';

const getOpacity = (num, lang) => {
    if(num === lang) {
        return 1;
    } else {
        return 0.3;
    }
}

const getStyle = (num, lang) => {
    const opacity = getOpacity(num, lang);
    return {
        width: "26px",
        height: "17px",
        margin: "8px 2px 0",
        border: "1px solid black",
        cursor: "pointer",
        userSelect: "none",
        opacity: opacity,
    }
}

const Lang = (props) => {
    const divStyle = { flex: "1" };
    const usaStyle = getStyle(0, props.lang);
    const jpnStyle = getStyle(1, props.lang);
    consoleLog([props.lang], "props.lang", "Lang", "components/Lang");

    return (
        <div style={divStyle} >
            <img src={Usa} style={usaStyle} />
            <img src={Jpn} style={jpnStyle} />
        </div>
    );
}

export default Lang;