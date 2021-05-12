// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

// const getPictureSize = (info) => {
//     consoleLog([info], "info, info.width, info.height", "getPictureSize", "Comic/index");
//     console.log("info:");
//     console.log(info);
//     if(info) {
//         return { width: info.width, height: info.height };
//     } else {
//         return { width: null, height: null };
//     }
// }

// const getWindowSize = () => {
//     const w = window.innerWidth;
//     const h = window.innerHeight;
//     return { width: w, height: h };
// }

const judgeWindowType = () => {
  // const wSize = getWindowSize();
  const w = window.innerWidth;
  const h = window.innerHeight;
  if(w > h) {
    return "x";
  } else {
    return "y";
  }
  // if(window !== undefined) {

  // } else {
  //     console.log("window is not defined.")
  //     return null;
  // }
  // const w = window.innerWidth;
  // const h = window.innerHeight;
}

// const judgeStandard = (pw, ph, window) => {
//     if(pw === null) { return; }
//     const wSize = getWindowSize();
//     const pictureAspect = pw / ph;
//     const pictureAspectDouble = (pw * 2) / ph;
//     const windowAspect = wSize.width / wSize.height;
//     if(window === "x") {
//         if(windowAspect > pictureAspectDouble) {
//             return "height";
//         } else {
//             return "width";
//         }
//     } else {
//         if(windowAspect > pictureAspect) {
//             return "height";
//         } else {
//             return "width";
//         }
//     }
// }

// const getLangNum = (lang) => {
//   if(lang === undefined) {
//     return 1;
//   } else {
//     return parseInt(lang);
//   }
// }

// const getPageNum = (page) => {
//   switch(page) {
//     case undefined: return 0;
//     case "Top": return 0;
//     case "Profile": return 1;
//     case "Gallery": return 2;
//     case "Comic": return 3;
//     case "Game": return 4;
//     case "Novel": return 5;
//     case "Diary": return 6;
//     case "Tool": return 7;
//     case "Test": return 8;
//     default: console.log("pageName is not valid. pageName is " + page); break;
//   }
// }

// const getPageNames = () => {
//   return (
//       [
//         ["Top", "表紙"],
//         ["Profile", "管理人"],
//         ["Gallery", "絵"],
//         ["Comic", "漫画"],
//         ["Game", "ゲーム"],
//         ["Novel", "小説"],
//         ["Diary", "ブログ"],
//         ["Tool", "ツール"],
//         ["Test", "テスト"],
//       ]
//   );
// }

// const isViewOrNot = (id) => {
//   if(id !== undefined) { return true; } else { return false; }
// }

const moveHeaderAndFooter = (bool) => {
  let y = {};
  if(bool){
    y =  { header: 55, footer: -55 };
  } else {
    y =  { header: 0, footer: 0 };
  }
  const header = document.querySelector("header.movable");
  const footer = document.querySelector("footer.movable");
  // const h = window.innerHeight;
  if(header) {
    header.style.transform = "translate(0, " + y.header + "px)";
    header.style.transitionDuration = "0.5s";
  }
  if(footer) {
    footer.style.transform = "translate(0, " + y.footer + "px)";
    footer.style.transitionDuration = "0.5s";
  }
}
// const moveFooter = (bool) => {
//     let yMove = 0;
//     if(bool){ yMove = 55; }
//     const footer = document.querySelector("footer.movable");
//     if(footer) {
//         footer.style.transform = "translate(0, " + yMove + "px)";
//         footer.style.transitionDuration = "0.5s";
//     }
// }

const App = () => {
  // const route = useRouter();
  const mediaMinWidth = 800;
  const [headerState, setHeaderState] = useState(false); // false = hidden, includes also footer.
  const [num, setNum] = useState(0);
  const [lang, setLang] = useState(0); // Ja
  const [window, setWindow] = useState(null);
  // const num = useMemo(() => getPageNum(route.query.page), [route.query.page]);
  // const lang = useMemo(() => getLangNum(route.query.lang), [route.query.lang]);
  const [isView, setIsView] = useState(false);
  // const isView = {
  //     comic: useMemo(() => isViewOrNot(route.query.comicID), [route.query.comicID]),
  //     novel: useMemo(() => isViewOrNot(route.query.novelID), [route.query.novelID]),
  // }
  // const pageNames = getPageNames();
  useEffect(() => setWindow(judgeWindowType()));
  // const window = judgeWindowType();
  // const standard = judgeStandard();
  // consoleLog([isView, pageNames], "isView, pageNames", "Index", "Index");

  const toggleHeaderAndFooter = () => {
    moveHeaderAndFooter(!headerState);
    setHeaderState(!headerState);
    console.log("setHeader succeeded: " + headerState);
  };

  return (
      <Layout title="ENINGRAD" pageNum={num} lang={lang} isView={isView} headerState={headerState} >
        <Switch pageNum={num} lang={lang} isView={isView} window={window} headerState={headerState} mediaMinWidth={mediaMinWidth} toggleHeaderAndFooter={() => toggleHeaderAndFooter()} moveHeader={(bool) => moveHeaderAndFooter(bool)} judgeWindowType={() => setWindow(judgeWindowType)} />
      </Layout>
  );
}

export default App;
