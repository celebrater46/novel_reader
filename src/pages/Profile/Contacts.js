import React from 'react';

const HTwo = (props) => {
    if(props.lang === 0) {
        return <h2>Contact</h2>
    } else {
        return <h2>連絡先</h2>
    }
}

const Contacts = (props) => {
    return (
        <div class="contact">
            <HTwo lang={props.lang} />
            <p>
                hoge★gmail.com（★ -> ＠）<br />
                Twitter: <a target="_blank" href="https://twitter.com/hogehoge">@hogehoge</a><br />
                Instagram: <a target="_blank" href="https://www.instagram.com/hogehoge/">@hogehoge</a>
            </p>
            <hr />
        </div>
    );
}

export default Contacts;