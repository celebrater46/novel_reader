import React from 'react';

const Contacts = (props) => {
    return (
        <div class="contact">
            <h2>連絡先</h2>
            <p>
                hoge★gmail.com（★を＠）<br />
                Twitter: <a target="_blank" href="https://twitter.com/hogehoge">@hogehoge</a><br />
                Instagram: <a target="_blank" href="https://www.instagram.com/hogehoge/">@hogehoge</a>
            </p>
            <hr />
        </div>
    );
}

export default Contacts;