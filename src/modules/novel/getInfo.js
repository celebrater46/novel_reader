import shirogane from "../../data/novel/shirogane";
import battleOfHeaven from "../../data/novel/battleOfHeaven";
import { getKansujiSubtitle } from "./buildIndex";
import errorLog from "../../static/errorLog";

const nameOfComponent = "getInfo.js";

export const getText = (novelID, episode) => {
    if(episode) {
        switch(novelID) {        
            case 5000: 
                return shirogane("texts", episode);
            default: 
                errorLog([novelID], "novelID", "getText", nameOfComponent);
        }
    } else {
        errorLog([episode], "episode", "getText", nameOfComponent);
    }
}

export const getData = (novelID) => {
    let chapters;
    let subtitles;
    switch(novelID) {
        case 5000: 
            chapters = shirogane("chapters", 0);
            subtitles = shirogane("subtitles", 0);
            break;
        case 4000: 
            chapters = battleOfHeaven("chapters", 0);
            subtitles = battleOfHeaven("subtitles", 0);
            break;
        default: 
            errorLog([novelID], "novelID", "getData", nameOfComponent);
            break;
    }
    return { chapters: chapters, subtitles: subtitles };
}

export const getSubtitle = (novelID, episode) => {
    if(novelID && episode) {
        const data = getData(novelID);
        const kansujiTitle = getKansujiSubtitle(episode);
        return kansujiTitle + "――" + data.subtitles[episode];
    } else {
        errorLog([novelID, episode], "novelID, episode", "getData", nameOfComponent);
    }
}

export const getInfo = () => {
    return {
        5000: { 
            title: "白金記 - Unify the World",
            catchyPhrase: { letters: 13, text: "騙しあい殺しあい、飛び交う銃弾と権謀術数。" },
            outline: "　この世界からありとあらゆる争いを根絶し、全人類が平和で豊かで健やかに暮らせる《完全世界》を作るべく活動する、謎の組織・白金機関の水面下で行われる世界の破壊と再構築を描く謀略と革命の物語。",
            lastUpdate: "2020-03-24",
        },
        4000: {
            title: "極楽戦争 - End of End",
            catchyPhrase: { letters: 14, text: "十五歳以上の男女を対象とした《少年徴兵制》――開始。" },
            outline: "二十世紀末。極東の軍事国家日本帝国は、イデオロギーの対立により内戦に突入。全国各地で国づくりの理想を巡って政府軍と反乱軍による武力衝突が起きていた。戦は泥沼化し、両軍で十五歳以上の男女を対象とした《少年徴兵制》が開始される。舞台は全国有数の激戦区、尾張県極楽市。政府軍の軍事高等学校白虎学園と、反乱軍の軍事高等学校青龍学院がこの地の覇権を賭け、日夜骨肉の争いをくり広げていた。長期にわたる戦争で治安は崩壊、誰もが生きるのに必死で、弱い者から順に死んでいく地獄。生きるために平気で他人を裏切り、騙し、そして殺す。誰が味方で誰が敵なのか。生き残るには悪事に手を染めるほかないのか。この戦争を終わらせることは、果たしてできるのか……",
            lastUpdate: "2017-06-01"
        },
    };
}