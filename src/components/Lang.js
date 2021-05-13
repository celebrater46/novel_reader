import consoleLog from "../static/consoleLog";
import Img from "../static/Img";
import Jpn from '../static/img/jpn.png';
import Usa from '../static/img/usa.png';

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
            <Img fname={Usa} imgClass={classNames[0]} imgStyle={null} />
            <Img fname={Jpn} imgClass={classNames[1]} imgStyle={null} />
        </div>
    );
}

export default Lang;