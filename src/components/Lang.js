import consoleLog from "../static/consoleLog";
import Img from "../static/Img";

const getClasses = (lang) => {
    if(lang === 0) {
        return ["lang", "lang void"];
    } else {
        return ["lang void", "lang"];
    }
}

const Lang = (props) => {
    consoleLog([props.lang], "props.lang", "Lang", "components/Lang");
    const classNames = getClasses(props.lang);

    return (
        <div className="lang">
            <Img fname="jpn.png" imgClass={classNames[0]} isLocal={false} />
            <Img fname="usa.png" imgClass={classNames[1]} isLocal={false} />
        </div>
    );
}

export default Lang;