import React from 'react';

const getAuther = (lang) => {
    if(lang === 0) {
        return "Rario Busujima";
    } else {
        return "毒島薬男（ぶすじまらりお）";
    }
}

const Me = (props) => {
    if(props.lang === 0) {
        return (
            <p className="me">
                Hello, my name is {props.author}.<br/>
                I write funny novels, hahaha.
            </p>
        );
    } else {
        return (
            <p className="me">
                こんにちは。{props.author}と申します。<br/>
                面白い小説を書きます。
            </p>
        );
    }
}

const AboutMe = (props) => {
    const author = getAuther(props.lang);

    return (
        <div className="updates">
            <h2>{author}</h2>
            <Me author={author} lang={props.lang} />
            <hr />
        </div>
    );
}

export default AboutMe;