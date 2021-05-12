import './App.css';
import {useEffect, useState} from "react";
import Layout from "./components/Layout";
import Novel from "./pages/Novel";

const judgeWindowType = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if(w > h) {
    return "x";
  } else {
    return "y";
  }
}

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

const App = () => {
  const mediaMinWidth = 800;
  const [headerState, setHeaderState] = useState(false); // false = hidden, includes also footer.
  const [num, setNum] = useState(0);
  const [lang, setLang] = useState(0); // Ja
  const [window, setWindow] = useState(null);
  const [isView, setIsView] = useState(false);
  useEffect(() => setWindow(judgeWindowType()));

  const toggleHeaderAndFooter = () => {
    moveHeaderAndFooter(!headerState);
    setHeaderState(!headerState);
    console.log("setHeader succeeded: " + headerState);
  };

  return (
      <Layout title="ENINGRAD" pageNum={num} lang={lang} isView={isView} headerState={headerState} >
        <Novel lang={props.lang} isView={props.isView.novel} headerState={props.headerState} mediaMinWidth={props.mediaMinWidth} toggleHeaderAndFooter={() => toggleHeaderAndFooter()} />;
      </Layout>
  );
}

export default App;
