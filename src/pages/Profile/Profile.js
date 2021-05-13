import React from 'react';
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Updates from "./Updates";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Author from "./img/author.png"

const Profile = (props) => {
    const imgStyle = { margin: "20px 0 0" }
    const changeMenu = (num) => {
        return props.changeMenu(num);
    }

    return (
        <>
            <Header pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} isView={props.isView} changeMenu={(num) => changeMenu(num)} />
            <div className="container">
                <img src={Author} style={imgStyle} />
                <AboutMe lang={props.lang} />
                <Contacts lang={props.lang} />
                <Updates lang={props.lang} />
            </div>
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Profile;