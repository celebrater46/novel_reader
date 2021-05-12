export default <style>{`
    html {
        font-size: 16px;
    }
    body {
        background-color: black;
        color: silver;
        margin: 0px;
    }
    header {
        background-color: #333;
        padding: 10px 10px 5px;
        margin: 0;
        display: flex;
    }
    header.hidden {
        margin: -55px 0 0;
    }
    h1 {
        font-size: 2rem;
        font-family: "Times New Roman", "Times", "serif", "Hiragino Mincho ProN", "Hiragino Mincho Pro", "MS Mincho", "Yu Mincho", "YuMincho";
        color: #bbb;
        margin: 0px;
    }
    h2 {
        margin-bottom: 10px;
    }
    hr {
        border-color: #333;
    }
    a {
        text-decoration: none;
        color: #bb8;
    }
    a:hover {
        color: #fff;
    }
    p {
        color: silver;
    }
    div {
        margin: 0;
        padding: 0;
    }
    button {
        background-color: #333;
        color: silver;
    }
    ul {
        list-style: none;
    }
    textarea {
        font-size: 1rem;
    }
    div.container {
        margin: 0 10px;
        text-align: center;
    }
    img.top {
        margin: 0 auto;
        width: 100%;
    }
    img.border {
        border-width: 1px;
    }
    img.hunburger {
        width: 32px;
    }
    img.author {
        width: 100%;
        margin-top: 10px;
    }
    img.lang {
        width: 26px;
        height: 17px;
        margin: 8px 2px 0;
        border: 1px solid black;
        cursor: pointer;
        user-select: none;
    }
    img.lang.void {
        opacity: 0.3;
    }
    div.menu {
        display: none;
    }
    div.menu > div.menuItem {
        cursor: pointer;
        user-select: none;
    }
    div.menuItem.jpn {
        margin-top: -7px;
    }
    header > h1 {
        margin: 0 15px 0;
        padding: 0;
    }
    header > div.lang {
        flex: 1;
    }
    header > div.menuForMobile {
        margin: -5px auto 0;
        opacity: 0.7;
    }
    button.MuiButtonBase-root, ul.MuiList-root {
        background-color: #333;
        color: #bbb;
    }
    div.hiddenDiv {
        width: 100vw;
        height: 100vh;
        margin: 0;
        top: 0;
        left: 0;
        z-index: 2;
        position: fixed;
    }
    div.hiddenDiv div.header {
        width: 100vw;
        height: 25vh;
        margin: 0;
        z-index: 3;
    }
    div.hiddenDiv div.middle {
        width: 100vw;
        height: 50vh;
        margin: 0;
        display: flex;
        z-index: 2;
    }
    div.hiddenDiv div.LR {
        width: 50vw;
        margin: 0;
        z-index: 2;
    }
    div.hiddenDiv div.footer {
        width: 100vw;
        height: 25vh;
        margin: 0;
        z-index: 3;
    }
    footer {
        margin-top: 20px;
        width: 100%;
        text-align: center;
    }
    footer > div {
        margin: 5px auto;
    }
    footer.hidden {
        display: none;
    }


    h1.gallery {
        margin-top: 30px;
    }
    div.thumbContainer {
        width: 330px;
        margin: 0 auto 20px;
        text-align: left;
        display: flex;
        flex-wrap: wrap;
    }
    div.illustBoard {
        border: 4px double gray;
        background-color: #333;
        color: #bbb;
        width: 90%;
        margin: 20px auto;
        padding: 10px;
        text-align: center;
    }
    img.thumbnail {
        width: 106px;
        margin: 2px;
    }
    img.illust {
        width: 100%;
    }


    header.comic {
        width: 100vw;
        height: 55px;
        background-color: black;
        z-index: 4;
        position: fixed;
        top: -55px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header.comic div.back {
        cursor: pointer;
        user-select: none;
        padding: 0 20px;
    }
    header.comic select {
        height: 25px;
        margin: 0 20px;
    }
    header.comic div.hideHeader {
        height: 100%;
        flex: 1;
        background-color: #f0f;
    }
    div.container.comicView {
        width: 100%;
        height: 100%;
        margin: 0;
        position: fixed;
    }
    div.comicItem > div {
        cursor: pointer;
        user-select: none;
    }
    div.comicItem h1.title {
        margin: 20px auto;
        color: #bb8;
    }
    div.comicItem img.cover {
        width: 96%;
        height: auto;
    }
    div.comicItem p.caption {
        margin: 10px auto 40px;
    }
    div.comicPages {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-wrap: nowrap;
    }
    div.comicPage {
        display: flex;
        align-items: center;
        z-index: 1;
        position: static;
    }
    div.comicPage {
        justify-content: center;
    }
    div.comicPage.left {
        display: none;
    }
    div.comicPage img.comicPage {
        z-index: 1;
    }
    header.comic.scroll {
        width: 100vw;
        height: 55px;
        background-color: black;
        z-index: 4;
        position: fixed;
        top: 0;
        margin: 0;
        padding: 0;
        display: block;
        text-align: left;
    }
    header.comic.scroll a {
        font-size: 1.5rem;
        margin: 20px auto 20px 20px;
        width: calc(100% - 40px);
        display: block;
    }
    div.container.comicView.scroll {
        width: 100vw;
        height: auto;
        margin: 0;
        position: static;
    }
    div.comicPages.scroll {
        width: 100%;
        height: auto;
        flex-wrap: wrap;
    }
    div.comicPages.scroll img {
        width: 100%;
        margin-top: 55px;
    }
    footer.comic {
        display: none;
    }


    div.container.game h1 {
        margin: 20px auto 10px;
        padding: 0;
        line-height: 1;
    }
    div.container.game h2 {
        margin: 0 auto;
    }
    div.container.game img.game {
        width: 90vw;
        height: auto;
        margin: 20px auto 0;
    }
    div.container.game p.caption {
        margin: 20px 10px 30px;
        text-align: left;
    }
    div.container.game hr {
        margin: 20px auto;
    }
    div.container.game a.tp {
        cursor: pointer;
        user-select: none;
    }
    div.gameMore {
        margin: 20px auto;
    }
    div.gameMore h3 {
        color: #999;
        border-bottom: 1px solid #333;
        padding-top: 40px;
        padding-bottom: 10px;
        text-align: center;
    }
    div.gameMore > p {
        margin: 50px auto;
        text-align: center;
    }
    div.gameMore > p > p {
        margin: 10px auto;
        text-align: center;
    }   
    div.gameMore p.pt {
        padding-top: 30px;
    } 
    div.gameMore p.pb {
        padding-bottom: 30px;
    } 
    div.gameMore p.left {
        text-align: left;
    } 
    div.gameMore .red {
        color: red;
    }
    div.gameMore .yellow {
        color: yellow;
    }
    div.gameMore .green {
        color: green;
    }
    div.gameMore .cyan {
        color: cyan;
    }
    div.gameMore .pink {
        color: pink;
    }
    div.gameMore .L {
        font-size: 1.3rem;
    }
    div.gameMore .LL {
        font-size: 1.6rem;
    }
    div.gameMore .LLL {
        font-size: 2.4rem;
    }


    header.novel {
        width: 100vw;
        height: 55px;
        background-color: black;
        z-index: 4;
        position: fixed;
        top: -55px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header.novel div.back {
        cursor: pointer;
        user-select: none;
        padding: 0 20px;
    }
    header.novel select {
        height: 25px;
        margin: 0 20px;
    }
    header.novel div.hideHeader {
        height: 100%;
        flex: 1;
        background-color: #f0f;
    }
    div.novelTable {
        margin: 30px 10px 0;
    }
    div.novelTable img.cover {
        width: 100%;
    }
    div.novelTable h1 {
        font-size: 1.5rem;
        cursor: pointer;
        user-select: none;
    }
    div.novelTable h2 {
        margin: 20px auto;
    }
    div.novelItem p.hr {
        font-size: 2rem;
    }
    div.novelItem p.update {
        margin: 5px auto;
    }
    div.novelTable ul.novelIndex {
        width: 200px;
        margin: 20px auto;
        padding: 0;
    }
    ul.novelIndex.flex li, ul.novelIndex.flex li h4 {
        display: flex;
    }
    ul.novelIndex li {
        padding: 0 20px;
    }
    ul.novelIndex li.subtitle {
        cursor: pointer;
        user-select: none;
    }
    ul.novelIndex li.h4 {
        font-size: 1.3rem;
        padding: 0;
    }
    li.h4 h4 {
        width: 100%;
        margin: 10px auto;
    }
    ul.novelIndex div {
        padding: 0;
    }
    ul.novelIndex div.noSubtitle {
        text-align: center;
    }
    div.line {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.line hr {
        width: 100%;
    }
    div.container.novelView {
        overflow: hidden;
    }
    div.novelPages {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        padding: 5vh 5vw 0;
        display: fixed;
        top: 0;
        z-index: 1;
    }
    div.novelPages div.void {
        width: 5vw;
    }
    div.novelPages div.shell {
        width: 100vw;
        height: auto;
        padding: 0 5vw;
        box-sizing: border-box;
    }
    div.novelPage {
        width: 90vw;
        height: 90vh;
        margin: 0;
        padding: 0 3vw 0;
        border: 1px solid gray;
        writing-mode: vertical-rl;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    div.novelPage h1 {
        margin: 1em 0 0 1em;
        text-align: justify;
        font-size: 2em;
        line-height: 2em;
    }
    div.novelPage p.line {
        margin: 0;
        text-align: justify;
        font-size: 1em;
        line-height: 2em;
    }
    footer.novel {
        width: 100vw;
        height: 55px;
        background-color: black;
        margin: 0;
        z-index: 4;
        position: fixed;
        top: 100vh;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    footer.novel div.hideFooter {
        height: 100%;
        flex: 1;
        background-color: #f0f;
    }
    footer.novel input {
        direction: rtl;
        width: 70vw;
    }
    footer.novel div.range {
        display: flex;
    }
    div.range div.loc {
        margin: 0 0 0 10px;
    }
    div.range div.locNum {
        width: 50px;
    }


    div.tool div.pageCaption {
        margin: 40px auto 40px;
    }
    div.tool > p {
        display: block;
        margin: 0 auto 20px;
    }
    div.htmlConverter textarea {
        width: 85vw;
        height: 40vh;
        margin: 0 auto 5px;
    }
    div. p {
        font-size: 0.9rem;
    }
    div.htmlConverter h1 {
        margin: 20px auto 30px;
    }
    div.htmlConverter p.checkBoxes {
        padding: 0 10px 0;
    }
    div.htmlConverter p.checkBoxes span {
        padding-right: 5px;
    }
    div.toolItem p.hr {
        font-size: 2rem;
    }
    div.container.tool.mondayTimer {
        height: 75vh;
        color: red;
    }
    div.mondayTimer h1 {
        margin: 5vh auto 20vh;
        color: red;
        font-size: 1.5rem;
    }
    div.mondayTimer span.time {
        margin: 0 5px;
        font-size: 4rem;
    }
    div.mondayTimer span.words {
        font-size: 1rem;
    }
    

    @media (min-width: 800px) {
        header > h1 {
            margin: -3px 15px 0;
            padding-bottom: 3px;
        }
        div.menu {
            display: flex;
            flex-wrap: wrap;
        }
        div.menu > div {
            font-size: 1.2rem;
            text-align: center;
            margin: 0 5px;
            color: gray;
        }
        div.menu a {
            color: #777;
        }
        div.menuForMobile {
            display: none;
        }
        div.menu div.currentPage a {
            color: #ccc;
        }
        div.youAreHere {
            color: #ff0;
        }
        img.lang {
            margin: 4px 2px 0;
        }
        footer {
            display: flex;
        }
        footer > div.c1 {
            margin: 10px 3px 10px auto;
        }
        footer > div.c2 {
            margin: 10px auto 10px 0px;
        }


        img.author {
            width: 800px;
        }


        div.thumbContainer {
            width: 750px;
            margin-bottom: 50px;
        }
        div.illustBoard {
            width: 380px;
        }
        img.thumbnail {
            width: 146px;
        }
        img.illust {
            width: 800px;
        }


        div.comicItem img.cover {
            width: 800px;
        }
        div.container.comicView.scroll {
            width: 100vw;
        }
        div.comicPages.scroll {
            width: 800px;
            margin: 0 auto;
        }


        div.container.game {
            width: 800px;
            margin: 0 auto;
        }
        div.container.game img.game {
            width: 90%;
        }
        div.container.game hr {
            margin: 50px auto;
        }


        div.container.novelTable {
            width: 800px;
            margin: 50px auto 0;
        }
        div.novelTable h1 {
            font-size: 2rem;
        }


        div.container.tool.htmlConverter textarea {
            width: 800px;
        }
        div.htmlConverter p {
            margin: 40px auto 40px;
        }
        div.htmlConverter p.converterAll {
            margin: 10px auto 10px;
        }
        div.htmlConverter p.checkBoxes {
            margin: 30px auto;
            line-height: 3rem;
        }
        div.container.tool.mondayTimer {
            height: 80vh;
        }
        div.mondayTimer h1 {
            font-size: 2rem;
        }
        div.mondayTimer span.time {
            margin: 0 10px;
            font-size: 10rem;
        }
        div.mondayTimer span.words {
            font-size: 4rem;
        }
    }

    @media (min-width:1000px) {
        img.top {
            width: 1000px;
        }
    }
`}</style>