import React from 'react';
import Img from "../../static/Img";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Updates from "./Updates";
import consoleLog from "../../static/consoleLog";

const Profile = (props) => {
    return (
        <div className="container">
            <Img fname="img/author.png" imgClass="author" isLocal={true} />
            <AboutMe />
            <Contacts />
            <Updates />
        </div>
    );
}

export default Profile;