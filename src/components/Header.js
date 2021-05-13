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
    const h1Style = {
        margin: "0 15px 0",
        padding: "0",
    }
    const title = getTitle(props.lang);
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <header className="normal">
            <h1 style={h1Style}>{ title }</h1>
            <Lang lang={props.lang} />
            {(()=> {
                if(window.innerWidth >= 800) {
                    return <Menu pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} changeMenu={(num) => changeMenu(num)} />;
                } else {
                    return <MenuForMobile pageNames={props.pageNames} lang={props.lang} />;
                }
            })()}
        </header>
    );
}

export default Header;