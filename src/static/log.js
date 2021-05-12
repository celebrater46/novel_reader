import TableItem from "../pages/Comic/TableItem";

export default <div>

    開発ログ

    $#########$#########$#########$#########$#########
    引き継ぎ
    $#########$#########$#########$#########$#########

        getTextArray() が相変わらず currentEpisode が初期化される前に実行される。かと言って if 文で必要な引数が揃うまで処理を実行しないように制御するとノベルページでの文章取得に失敗するし。getTextArray を適切なタイミングで動かせるようにしなければならない。
        あと背景色の変更がうまく行かなくなった。ヘッダーの背景色切り替えて、そのあとで文字の大きさを変えるとなぜか反映される。
        novelID, maxEpisode() は一度一覧に戻ってから他の作品を選ばない限り変化することがない。


    $#########$#########$#########$#########$#########
    　ログ
    $#########$#########$#########$#########$#########
    201215

        npm run build がうまく行かない問題、next.js を入れ直してそこにファイルを移植していけば直るんじゃないかと思ってやってみたけど、やはりダメだった。
        next.js インストール直後に Hello World したらそれは成功したが、一度 eningrad7 のデータを移植してからまた全部削除して Hello World のみにしたらやはりダメ。
        node_modules と package-lock.json を消して npm cache clear --force してから　npm install したけどやはりダメ。
        git reset したら直るかと思ったけど、それもだめだった。
        node_modules を消して default/nextjs のをぶちこんだら直った。.gitignore のリストに入っていたので、ここに結局原因があったってことだ。
        _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
        > @ build /Users/enin/Documents/PG/eningrad7/eg7_next
        > next build

        info  - Creating an optimized production build  
        warn  - Compiled with warnings

        ./pages/Novel/data/Shirogane.js
        There are multiple modules with names that only differ in casing.
        This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
        Use equal casing. Compare these module identifiers:
        * /Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4!/Users/enin/Documents/PG/eningrad7/eg7_next/pages/Novel/data/Shirogane.js
            Used by 1 module(s), i. e.
            /Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FNovel%2Fdata%2FShirogane&absolutePagePath=private-next-pages%2FNovel%2Fdata%2FShirogane.js!
        * /Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4!/Users/enin/Documents/PG/eningrad7/eg7_next/pages/Novel/data/shirogane.js
            Used by 4 module(s), i. e.
            /Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4!/Users/enin/Documents/PG/eningrad7/eg7_next/pages/Novel/modules/getInfo.js

        ./pages/Novel/data/Shirogane.js
        There are multiple modules with names that only differ in casing.
        This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
        Use equal casing. Compare these module identifiers:
        * /Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4!/Users/enin/Documents/PG/eningrad7/eg7_next/pages/Novel/data/Shirogane.js
            Used by 1 module(s), i. e.
            multi private-next-pages/Novel/data/Shirogane.js
        * /Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4!/Users/enin/Documents/PG/eningrad7/eg7_next/pages/Novel/data/shirogane.js
            Used by 4 module(s), i. e.
            /Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/webpack/loaders/next-babel-loader.js??ref--4!/Users/enin/Documents/PG/eningrad7/eg7_next/pages/Novel/modules/getInfo.js


        > Build error occurred
        Error: Build optimization failed: found pages without a React Component as default export in 
        pages/Tool/tools/SymbolConverter/CheckFn
        pages/Tool/tools/SymbolConverter
        pages/Tool/tools/SymbolConverter/temp
        pages/Novel/modules/createPages
        pages/Novel/modules/buildIndex
        pages/Novel/modules/oldCreatePages
        pages/Novel/modules/calc
        pages/Novel/modules/getInfo

        See https://err.sh/vercel/next.js/page-without-valid-component for more info.

            at build (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/index.js:21:115)
            at processTicksAndRejections (internal/process/task_queues.js:93:5)
        info  - Collecting page data .npm ERR! code ELIFECYCLE
        npm ERR! errno 1
        npm ERR! @ build: `next build`
        npm ERR! Exit status 1
        npm ERR! 
        npm ERR! Failed at the @ build script.
        npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

        npm ERR! A complete log of this run can be found in:
        npm ERR!     /Users/enin/.npm/_logs/2020-12-15T16_47_41_949Z-debug.log
        _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
        　最初の Shirogane.js は単に import 指定が shirogane.js だったというだけの凡ミス。ファイル名を「shirogane.js」に修正。
        　2個めの「Error: Build optimization failed:」はリスト内のファイルを export default を持つ React コンポーネントにするか、もし React コンポーネントを持たない単なるモジュールなら Components か lib フォルダに移動しろみたいな注意書きがされていた。参照：https://github.com/vercel/next.js/blob/master/errors/page-without-valid-component.md 有効な React コンポーネントのないページ、と表示されている。
        　全部解決してみたら何か……エラーメッセージが増えた。
        _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
        > @ build /Users/enin/Documents/PG/eningrad7/eg7_next
        > next build

        info  - Creating an optimized production build  
        info  - Compiled successfully
        info  - Collecting page data  
        [=== ] info  - Generating static pages (0/47)
        Error occurred prerendering page "/Comic/ComicPage". Read more: https://err.sh/next.js/prerender-error
        TypeError: Cannot read property 'width' of undefined
            at getMargin (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/ComicPage.js:180:29)
            at getImgStyle (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/ComicPage.js:145:18)
            at ComicPage (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/ComicPage.js:215:20)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)

        Error occurred prerendering page "/Game/Bqa". Read more: https://err.sh/next.js/prerender-error
        ReferenceError: window is not defined
            at Bqa (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Game/Bqa.js:144:13)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)

        Error occurred prerendering page "/Game/Sad". Read more: https://err.sh/next.js/prerender-error
        ReferenceError: window is not defined
            at Sad (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Game/Sad.js:199:13)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)

        Error occurred prerendering page "/Game/Rtp". Read more: https://err.sh/next.js/prerender-error
        ReferenceError: window is not defined
            at Rtp (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Game/Sad.js:151:13)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)

        Error occurred prerendering page "/Game/Yq". Read more: https://err.sh/next.js/prerender-error
        ReferenceError: window is not defined
            at Yq (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Game/Yq.js:144:13)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)
        [  ==] info  - Generating static pages (14/47)
        Error occurred prerendering page "/Comic/ComicViewScroll". Read more: https://err.sh/next.js/prerender-error
        TypeError: props.fnames is not iterable
            at getComponents (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/ComicViewScroll.js:474:27)
            at ComicViewScroll (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/ComicViewScroll.js:486:22)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)

        Error occurred prerendering page "/Tool/tools/HTMLConverter/CheckFn". Read more: https://err.sh/next.js/prerender-error
        TypeError: Cannot read property 'map' of undefined
            at CheckFn (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Tool/tools/HTMLConverter/CheckFn.js:128:29)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)

        Error occurred prerendering page "/Tool/tools/HTMLConverter/module". Read more: https://err.sh/next.js/prerender-error
        TypeError: Cannot read property 'checked' of undefined
            at convertText (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Tool/tools/HTMLConverter/module.js:306:34)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)

        Error occurred prerendering page "/Comic/ComicView". Read more: https://err.sh/next.js/prerender-error
        TypeError: Cannot read property 'map' of undefined
            at getXs (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/ComicView.js:358:19)
            at ComicView (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/ComicView.js:461:14)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)

        Error occurred prerendering page "/Game". Read more: https://err.sh/next.js/prerender-error
        TypeError: Cannot read property '400' of undefined
            at getCaptions (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Game.js:604:24)
            at Content (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Game.js:687:19)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
        [   =] info  - Generating static pages (25/47)
        Error occurred prerendering page "/Game/Content". Read more: https://err.sh/next.js/prerender-error
        TypeError: Cannot read property 'undefined' of undefined
            at getCaptions (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Game/Content.js:604:24)
            at Content (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Game/Content.js:687:19)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
        novelID at buildOptions() in buildindex.js.js, either of vars is wrong.
        undefined

        Error occurred prerendering page "/Comic". Read more: https://err.sh/next.js/prerender-error
        ReferenceError: window is not defined
            at judgeStandard (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic.js:1020:13)
            at /Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic.js:1144:80
            at Object.useMemo (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:30:366)
            at exports.useMemo (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react/cjs/react.production.min.js:25:113)
            at Comic (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic.js:1144:73)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
        props.listIsOpen, props.novelID at NovelIndex() in NovelIndex.js.js, either of vars is wrong.
        undefined
        undefined
        props.tools in Tool.js is ... 
        undefined
        route.query.toolID in Tool.js is wrong: undefined

        Error occurred prerendering page "/Tool/Tool". Read more: https://err.sh/next.js/prerender-error
        Error: Minified React error #152; visit https://reactjs.org/docs/error-decoder.html?invariant=152&args[]=Tool for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
            at Za (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:35:465)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:37:55)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)

        Error occurred prerendering page "/Novel/TableItem". Read more: https://err.sh/next.js/prerender-error
        TypeError: Cannot read property 'catchyPhrase' of undefined
            at TableItem (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Novel/TableItem.js:657:35)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)
        id at switchStatus() in HTMLConverter/index.js.js, either of vars is wrong.
        undefined

        Error occurred prerendering page "/Tool/tools/HTMLConverter". Read more: https://err.sh/next.js/prerender-error
        TypeError: Cannot read property 'title' of undefined
            at HTMLConverter (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Tool/tools/HTMLConverter.js:319:36)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
            at renderToHTML (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:1142)
        [    ] info  - Generating static pages (41/47)
        Error occurred prerendering page "/Novel/NovelView". Read more: https://err.sh/next.js/prerender-error
        ReferenceError: window is not defined
            at getFontSize (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Novel/NovelView.js:2485:13)
            at getUnifiedData (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Novel/NovelView.js:2944:20)
            at /Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Novel/NovelView.js:2994:54
            at Object.useMemo (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:30:366)
            at exports.useMemo (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react/cjs/react.production.min.js:25:113)
            at NovelView (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Novel/NovelView.js:2994:47)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)

        Error occurred prerendering page "/Comic/Resize". Read more: https://err.sh/next.js/prerender-error
        ReferenceError: window is not defined
            at getAspect (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/Resize.js:153:9)
            at Resize (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/Comic/Resize.js:164:62)
            at d (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:36:498)
            at $a (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:39:16)
            at a.b.render (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:476)
            at a.b.read (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:44:18)
            at renderToString (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/react-dom/cjs/react-dom-server.node.production.min.js:54:364)
            at Object.renderPage (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/server/render.js:50:851)
            at Function.getInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/.next/server/pages/_document.js:273:19)
            at loadGetInitialProps (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/next-server/lib/utils.js:5:101)
        info  - Generating static pages (47/47)

        > Build error occurred
        Error: Export encountered errors on following paths:
                /Comic
                /Comic/ComicPage
                /Comic/ComicView
                /Comic/ComicViewScroll
                /Comic/Resize
                /Game
                /Game/Bqa
                /Game/Content
                /Game/Rtp
                /Game/Sad
                /Game/Yq
                /Novel/NovelView
                /Novel/TableItem
                /Tool/Tool
                /Tool/tools/HTMLConverter
                /Tool/tools/HTMLConverter/CheckFn
                /Tool/tools/HTMLConverter/module
            at exportApp (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/export/index.js:24:1103)
            at runMicrotasks (<anonymous>)
            at processTicksAndRejections (internal/process/task_queues.js:93:5)
            at async build (/Users/enin/Documents/PG/eningrad7/eg7_next/node_modules/next/dist/build/index.js:37:212)
        npm ERR! code ELIFECYCLE
        npm ERR! errno 1
        npm ERR! @ build: `next build`
        npm ERR! Exit status 1
        npm ERR! 
        npm ERR! Failed at the @ build script.
        npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

        npm ERR! A complete log of this run can be found in:
        npm ERR!     /Users/enin/.npm/_logs/2020-12-15T18_00_31_582Z-debug.log
        _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
        わけがわかんないよ。


    $#########$#########$#########$#########$#########
    201214

        MacでHTML文書変換器に文書突っ込むと改行が無効化される問題。Macで textarea に入力された文章は \n 、だがこれをこのまま出力すると \n が表示され、代わりに \r を出力するようにすると正確に出力される。調べたが、Unix も Mac も Linux も \nで統一されている。サファリでもクロームでも同じ。
        Windowsでやったらどういう結果になったのかも知りたい。とりあえずこのまま放置しておこう。
        BRタグ変換器の方だと \n で正確に改行された。
        原因判明。JSON用の「\\n」変換を無効化したら直った。


    $#########$#########$#########$#########$#########
    201207

        やっぱ文字実体参照変換器と小説変換器は統合しよう。


    $#########$#########$#########$#########$#########
    201203

        さて、全話一挙に表示させるKindle方式か、それとも各話ごとに表示していくカクヨム方式か。決める必要があるな。
        スマホで読む方式をメインとするなら、1エピソードでも10ページ超えるし、細分化するメリットはありそう。
        あと文字の大きさやカラー変更が無効になってる。
        全話一挙に表示させる方式は、たとえば文字サイズの変更が行われる度に全部の再計算がなされる、つまり負荷が高くなるのではないか。
        あとは「全選択」。


    $#########$#########$#########$#########$#########
    201201

        tableとnovelViewは分離しなきゃダメだな。切り替えの時にデータがうまく更新されない。


    $#########$#########$#########$#########$#########
    201130

        各ページの文字数を計測して配列化することで文字サイズ変更時のロケーションのギャップを埋める。
        setStatus() は画面をタップした時に移動をかけるだけで、レイアウトの再構築はしない。setLocation() から発動させるのではなく、ひとつの関数として分離すべき。色の変更も同様。
        changeEpisodes と handleResize はレイアウトの再構築あり、また文字サイズの変化も同様。
        あとはスライドバーからのページ移動。これは結局のところページ移動だけでレイアウトの再編成は入らないから、やはり location とレイアウト再編成イベントを連動させるべきじゃない。
        getTextArray() の引数に route.query.num を仕込むのは？　いや、それだと setCurrentEpisode した時にデータが連動しないな。
        いっそのこと最初から最後の話まで全部読み込んでしまうというのはどうか？　それならエピソードごとにページを再構築する問題も一挙に解決。ただ、エピソードのリングからどう飛ばすかって問題が新たに発生する。
        いや、それは各ページの文字数を記憶する仕組みにしておけば、具体的に何文字めのロケーションに飛べばいいかを判別できるから問題ない。
        promise や async でオブジェクトを生成したとしても、それが関数コンポーネントに反映される前にレンダーが実行される。さらに promise オブジェクトからデータを抜き出す方法がいくら調べても出てこない。おそらくデータを取得するには他の方法を用いるしかない。
        useState の代わりに route.query.hoge を使う手も考えたが、結局値をいじってもレンダリングが発動しない。


    $#########$#########$#########$#########$#########
    201129

        Novel/index.js の novelID や currentEpisode などURLパラメータから引っ張ってくる数値は parseInt せずひとまずそのままぶちこんでみてはどうか。
        引数が来ているかどうかのチェック機構をぶっこんでみたけど、「!hoge」という書き方をすると引数が「０」の時にもひっかかっちまうんだな。もっと厳密なチェック機構を搭載した方がよさそう。
        useMemo でデータを連動的に処理する方法って結局データの数値が動かない場合に反応してくれないからあまり使うべきではないのかもしれない。それなら yield などで制御してしまった方がよいのではないか。あるいはデータを動かしてから戻すような仕組みを導入するべきか。
        今の問題は location の値が更新される前に changePage() が動いてしまうこと。
        location が動かなくとも、レイアウトが変更された時に pages が変更されればページ移動はせざるをえない。
        getTextArray() がどういう時に必要なのか。「レイアウトが変更された時と、novelID, episode ナンバーが変更された時。


    $#########$#########$#########$#########$#########
    201128

        例外処理の発生のさせ方を学んでいたけれど、大抵フレームワークがツッコミ入れてくれるからあまり必要性を感じなかった。
        isset を間違えて書いた時とかは、フレームワークからのツッコミが入らなくてそのまま処理が続行されてしまったので、かえって使わない方がいいのではないか。
        各関数ごとの処理を把握しきれなくなってきたので、エラーログを出力するモジュールを組み込み、引数が正確に渡ってなかったらコンソールに出力できるようにしといた。今後処理の流れを追えないくらいシステムが複雑になってきたら、エラーログ出力機構を搭載するのがいいかもしれない。


    $#########$#########$#########$#########$#########
    201127

        ひとつの話の末尾にリンクを仕込むのではなく、左右タップで移動する方法だとどこまで読んだのかが曖昧になるし、ブックマークが効かなくなるな。やはりURLパラメータをいじってとばすか？
        ただその方法の場合、前話の最終話をどうにかして表示する必要があるな。
        URLパラメータで次のEPナンバーを入れるのは成功し、最初のページまで飛ぶんだけど、表示されるエピソードが1話のまま。
        changeEpisodes in Novel.js で urlパラメータに Location も仕込みたいんだけれど、前のページに戻る時の再計算どうするかな。クイックで計算する方法はあるだろうか。
        currentPage = useEffect in Novel.js が、ページ移動する時に destroy is not function とかエラー吐く。useEffect 以外を使うといいかもしれない。


    $#########$#########$#########$#########$#########
    201126

        厄介なことに、Novel.js で最初のページ移動を果たした後にもう一度ページ移動イベントが起こっている。だからファーストムーブのあとに isDuration が true になってもう一度動いてしまっている。

    
    $#########$#########$#########$#########$#########
    201125

        各関数から都度小説作品情報読み出すの、新しい小説が追加された時の更新が超ダルそう。やはり漫画ページみたいに情報を一箇所に集中させるスタイルの方がよさそう。サブタイトルと本文は別のファイルに。
        小説の p.line のフォントサイズは em に変更し、ウィンドウサイズから算出したフォントサイズは親要素に移動した。そうすることで line-height や h1 のフォントサイズを簡単に変更できるようになる。


    $#########$#########$#########$#########$#########
    201124

        location は行数ではなく文字数にしてしまうか？　文字の大きさが大でも小でもロケーションの値は常に同じになるようにしたい。



    $#########$#########$#########$#########$#########
    201123

        Novel/index.js の「const currentPage = useMemo(() => changePage(lines, location, currentPage), [location]);」で 関数 changePage() に渡される currentPage がなぜか未定義になってしまう。原因不明なので排除する。
        location を動かした状態でフォントサイズを変更すると location の再計算が必要になる問題を解決する必要がある。


    $#########$#########$#########$#########$#########
    201117

        改行なしの長文を分割して1行ずつPタグで表示するスタイルは禁則処理の時に問題が生じる。やはり改行ごとにタグを付けかえた方がいいと思う。
        その場合、行数は文字数から計算するか。禁則処理のイレギュラーはどうするか？　改ページする際には行を分割せざるをえない問題にどう対処するか？
        改ページの時に改行タグを複数入れ、今読んでるページ以外の文章はページの「枠」で隠す方式はどうだろう？
        div.novelPage、フォントの大きさを vh で指定すると行数計算ができないのではないか。
        改ページ問題をどう攻略するか？　禁則処理。
        6ページだとleft座標を-250vwに指定すれば1ページめが正しく表示されるな。計算式は（ページ数　−　１）＊ 50 ？


    $#########$#########$#########$#########$#########
    201116

        getData() in NovelIndex.js で白金記にも極楽戦争にも極楽戦争の目次が表示されてしまった問題、何とswitch文にbreakを書き忘れていたという馬鹿なミスだった。
        小説ページについて。文章を一行ずつ配列に格納し、文字サイズをvwやvhを使うことで調整し、出力しようと思う。


    $#########$#########$#########$#########$#########
    201115

        Novel/index.js の props.isView が未定義のエラー、<NovelIndex />をコメントアウトすると出なくなる。このコンポが有効だと発動するのは間違いないが、原因不明。
        信じられないほどくだらないミスだった。import NovelIndex の from が間違ってたっていうか、最後まで書いてなかっただけ。書きかけのものは動かす時には予期せぬエラー防止とわかりやすいようにコメントアウトしておいたほうがいいな。
        <TableItem />の処理が無限ループする原因は、onClick={} の書き方が原因っぽい。理由はわからんが「onClick={setHoge()}」と書くとダメで、「onClick={() => setHoge()}」と即時関数形式で書く必要があるみたい。


    $#########$#########$#########$#########$#########
    201110

        Tableページから飛んできた時と画面サイズ変更は translate: 0s にしたい。
        関数コンポーネントの中に色んな関数を置くとたしかに引数の表記を省略できてすっきりするのだが、先に関数を定義しておかないと未定義の関数と表記され、エラーになってしまう。
        見開きページだけつなげて見せる処理がめんどくさいし、複雑。うまくページ飛ばないのでやはり左右別々にした方がわかりやすいと思う。見開きで見たけりゃ横長サイズにしてくださいって話。
        いや、でもそうすると見開きページだけつなげることになりかねないな……やはりうまくやれ。


    $#########$#########$#########$#########$#########
    201109

        コミック閲覧ページで height が 100vh になる際のページ間の余白を calc で導き出すための計算方法。
        全体の横幅は vw、画像の横幅は vh * 画像アスペクト比で出せる。故に「100vw - ((100vh * aspect) / 2)」。
        見開きページを持つ漫画のページ表示がずれる問題の解決。これを解決するには「見開きページを1ページずつバラバラにして表示させる」「見開きページ分レイアウトコンテナの位置を修正する」のふたつの解決策がある。前者は縦長画面で見開きページがうまく表示されない、後者はシステムが複雑になるというデメリットがある。縦長画面時はスクロールで見開き表示させたいんだよな。


    $#########$#########$#########$#########$#########
    201105

        漫画閲覧モードで画面サイズが変わった時にうまく切り替えるどころかコードがぐちゃぐちゃになって収集つかなくなったので git reset した。
        現状取りうる手は見開き表示をなくすか、画面が切り替わった時に表示が崩れるのを妥協するかの二択だと思う。
        URLパラメータに resize プロパティをぶちこんだところで、modeProcess が動かないんだからどうしようもない。
        comicPageコンポーネントを left でずらして並べてしまうと、結局縦横比率変わった時、横長から縦長に変化した時に重なって表示されてしまう。
        window.addEventListener を使った方法はなぜか何度も呼び出されるという謎の使用のため、使用を控えるべき。


    $#########$#########$#########$#########$#########
    201104

        見開きページをバラバラに表示するシステムでは、縦長の時に別々に表示されてしまう。
        画面を横長にして全部表示するには、やはりひとつのファイルで見せるのが良いと思われる。
        そして横長画面で2ページ表示する関係上、見開きひとつで2ページという数え方をするべき。
        comicページのselectタグからページを動かす場合、useEffectから動かすのだが、こいつがボタンコンポーネント動作後も作動しちまう。


    $#########$#########$#########$#########$#########
    201101

        LinkにbackIDを仕込む方式では、ブラウザの戻るボタンに対処できない。
        pageNums at Comic/index.js の値は随時ページ遷移するごとに変化する。問題ない。
        backID削除。
        Black Revenger で見開きページ分の調整機能を入れようと思ったが、複雑化を回避するために「見開き＝1ページ」とすることにした。
        漫画のアスペクト比について。Black Revenger = 1.45, Andromeda = 1.52, JKD = 1.41。一定ではない。しかし白金サンタや見開きページのようにアスペクト比が変化する場合もある。
        白金サンタは特殊な構成なので、専用のビューワーを用意しよう。
        見開きは縦長ウィンドウなら1ページとして縮小表示。
        横長ウィンドウなら2ページ分として表示するようにする。
        横長ウィンドウにするかどうかは、2枚並べてみた時のアスペクト比を参照するか。横長アスペクト比よりも横幅が長くなったら2枚並べる構成にしよう。
        アスペクト比を漫画情報配列に入れる。単位は％、正方形を100とした倍率。小数点以下四捨五入。

</div>