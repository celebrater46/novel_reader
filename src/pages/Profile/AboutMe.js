import React from 'react';

const AboutMe = (props) => {
    const author = "毒島薬男（ぶすじまらりお）";

    return (
        <div className="updates">
            <h2>{author}</h2>
            <p className="me">
                こんにちは。{author}と申します。<br/>
                面白い小説を書きます。
            </p>
            <hr />
        </div>
    );
}

export default AboutMe;