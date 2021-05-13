import React from 'react';

const News = (props) => {
    if(props.lang == 1) {
        return (
            <p class="news">
                2018.4.23<br />
                イラスト4点追加、トップ絵変更。<br />
                小説「神仏非習合」を公開。<br />
                小説「黒を討つ者」を公開。<br />
                <br />
                2018.3.7<br />
                白金記の登場人物紹介ページを追加。<br />
                白金記第四十四話を公開。<br />
                <br />
                2018.2.17<br />
                白金記第四十三話を公開。
            </p>
        );
    } else {
        return (
            <p class="news">
                2018.4.23<br />
                4 pictures is added. Cover picture is changed.<br />
                Novel "God vs Buddha" is on display.<br />
                Novel "Black Breaker" is on display.<br />
            </p>
        );
    }
}

const Updates = (props) => {
    const h2 = ["Updates", "更新情報"];

    return (
        <div class="updates">
            <h2>{h2[props.lang]}</h2>
            <News lang={props.lang} />
        </div>
    );
}

export default Updates;