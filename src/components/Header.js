import Menu from "../components/Menu";
import MenuForMobile from "./MenuForMobile";
import {changeMenu} from "./Inheritances";

const Header = (props) => {
    return (
        <header className="normal">
            <h1>Hoge Novels</h1>
            <Menu pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} changeMenu={(num) => changeMenu(props, num)} />
            <MenuForMobile pageNames={props.pageNames} lang={props.lang} />
        </header>
    );
}

export default Header;