import React from 'react';
import Img from "../../static/Img";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Updates from "./Updates";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {changeMenu} from "../../components/Inheritances";

const Profile = (props) => {
    return (
        <>
            <Header pageNum={props.pageNum} pageNames={props.pageNames} lang={props.lang} headerState={props.headerState} isView={props.isView} changeMenu={(num) => changeMenu(props, num)} />
            <div className="container">
                <Img fname="img/author.png" imgClass="author" isLocal={true} />
                <AboutMe lang={props.lang} />
                <Contacts lang={props.lang} />
                <Updates lang={props.lang} />
            </div>
            <Footer lang={props.lang} isView={props.isView} />
        </>
    );
}

export default Profile;