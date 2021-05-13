import Menu from "../components/Menu";
import MenuForMobile from "./MenuForMobile";

const Header = (props) => {
    return (
        <header className="normal">
            <h1>Hoge Novels</h1>
            <Menu pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} />
            <MenuForMobile pageNames={props.pageNames} lang={props.lang} />
        </header>
    );
}

export default Header;