import Menu from "../components/Menu";
import MenuForMobile from "./MenuForMobile";
import Lang from "./Lang";

const getTitle = (lang) => {
    if(lang === 0) {
        return "Hoge's Home Page";
    } else {
        return "HOGE のホームページ";
    }
}

const Header = (props) => {
    const title = getTitle(props.lang);
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <header className="normal">
            <h1>{ title }</h1>
            <Lang lang={props.lang} />
            <Menu pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} changeMenu={(num) => changeMenu(num)} />
            <MenuForMobile pageNames={props.pageNames} lang={props.lang} />
        </header>
    );
}

export default Header;