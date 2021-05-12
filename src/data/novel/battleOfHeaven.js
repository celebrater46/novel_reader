import errorLog from "../../static/errorLog";

const battleOfHeaven = (className) => {
    const nameOfComponent = "shirogane.js";
    switch(className) {
        case "updateDay":
            return "2017-08-23";
        case "chapters":
            return [
                { name: "序章「天上天下」", start: 1 }, 
                { name: "第一章「極楽地獄」", start: 13 }, 
                { name: "第二章「<ruby><rb>陥穽</rb><rp>（</rp><rt>かんせい</rt><rp>）</rp></ruby>」", start: 26 }, 
                { name: "第三章「<ruby><rb>天道是非</rb><rp>（</rp><rt>てんどうぜひ</rt><rp>）</rp></ruby>」", start: 41 }, 
                { name: "第四章「<ruby><rb>捲土重来</rb><rp>（</rp><rt>けんどちょうらい</rt><rp>）</rp></ruby>」", start: 54 }, 
                { name: "第五章「赤」", start: 68 }, 
                { name: "第六章「最終戦争」", start: 84 }, 
            ];
        case "subtitles":
            return [
                "屈辱",
                "学園",
                "夢葉",
            ];
        case "texts":
            return [
                "　テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。",
                "　テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。",
                "　テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。テスト。",
            ];
        default: errorLog([className], "num", "Shirogane", nameOfComponent);
    }
}

export default battleOfHeaven;