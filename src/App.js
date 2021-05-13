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

const App = () => {
  const mediaMinWidth = 800;
  const [num, setNum] = useState(0);
  const lang = 1; // Ja
  const [window, setWindow] = useState(null);
  useEffect(() => setWindow(judgeWindowType()));

  return (
      <Layout title="Novel Reader">
        <Novel pageNum={num} lang={lang} mediaMinWidth={mediaMinWidth} />;
      </Layout>
  );
}

export default App;
