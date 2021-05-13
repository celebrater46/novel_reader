import Menu from "../components/Menu";
import MenuForMobile from "./MenuForMobile";
import consoleLog from "../static/consoleLog";
import Lang from "./Lang";

const setClass = (bool) => {
    if(bool) { return "hidden"; } else { return "normal"; }
}

const Header = (props) => {
    const headerClass = setClass(props.isView.comicID);
    consoleLog([headerClass, props.isView.comicID], "headerClass, props.isView.comicID", "Header", "components/Header");

    return (
        <header className={headerClass}>
            <h1>Hoge Novels</h1>
            <Lang pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} />
            <Menu pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} />
            <MenuForMobile pageNames={props.pageNames} lang={props.lang} />
        </header>
    );
}

export default Header;