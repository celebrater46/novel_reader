// 4桁までの半角数字を漢数字変換
const kansuji = (num) => {
    if (num === undefined || num === null || num === "") {
        alert("無効な文字列です！");
        return;
    }
  
    if (!(/^-?[0-9]+$/g.test(num))) {
        alert("無効な文字列です！");
        return;
    }
  
    if (num >= 10000) {
        alert("有効な数字は9999までです。");
        return;
    }
  
    if (num === 0) {
        return "零";
    }
  
    let result = "";
    if (num < 0) {
        result += "マイナス";
        num *= -1;
    }
  
    let kanjiNums = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    let kanjiFigures = ["十", "百", "千"];
    let figures = [10, 100, 1000];
    let keta = figures.length - 1;
    figures.forEach(() => {
        if (num >= figures[keta]) {
            let max = Math.floor(num / figures[keta]);
            if (max >= 10) {
                result += kansujiLite(max);
            } else {
                if (!(max === 1 && figures[keta] <= 1000)) { // 漢数字が「一」かつ4桁以下なら処理せず
                    result += kanjiNums[max];
                }
            }
            result += kanjiFigures[keta];
            num -= max * figures[keta];
        }
        keta--; 
    });
    result += kanjiNums[num];
    return result;
};
  
export default kansuji;