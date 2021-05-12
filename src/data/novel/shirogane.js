import shiroganeText from "./texts/shiroganeText";
import errorLog from "../../static/errorLog";

const shirogane = (className, num) => {
    const nameOfComponent = "shirogane.js";
    const chapters = [
        { name: "日本編", start: 1 },
        { name: "北朝鮮編", start: 36 },
        { name: "アメリカ編", start: 65 },
    ];
    const subtitles = [
        "訪問者",
        "蹂躙",
        "尋問",
    ];

    switch(className) {
        case "chapters":
            return chapters;
        case "subtitles":
            return subtitles;
        case "texts":
            if(typeof num === "number" && num <= subtitles.length) { 
                // return episodes[num - 1];
                const text = shiroganeText();
                return text[num - 1];
            } else { 
                errorLog([num], "num", "Shirogane", nameOfComponent);
            }
        default: errorLog([className], "className", "Shirogane", nameOfComponent);
    }
}

export default shirogane;