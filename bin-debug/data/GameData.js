var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.getData = function (id) {
        var json = RES.getRes("gameData_json");
        return json[id];
    };
    GameData.getDataNum = function () {
        var json = RES.getRes("gameData_json");
        return json.length;
    };
    GameData.resetData = function () {
        this.answerNum = 0;
        this.chapter = 1;
    };
    GameData.saveLocalData = function (key) {
        var temp = egret.localStorage.getItem(key);
        temp = String(Number(temp) + 1);
        egret.localStorage.setItem(key, temp);
        var sum = egret.localStorage.getItem('sum');
        sum = String(Number(sum) + 1);
        egret.localStorage.setItem('sum', sum);
    };
    GameData.getRank = function (key) {
        var num = 0;
        for (var i = 0; i < Number(key); i++) {
            var n = Number(egret.localStorage.getItem(String(i)));
            console.log(i + '答对' + n);
            num = num + n;
        }
        var sum = Number(egret.localStorage.getItem('sum'));
        console.log('共计' + sum);
        var rank = (num / sum * 100).toFixed(2);
        return rank;
    };
    //最大行列
    GameData.maxRow = 6;
    GameData.maxColumn = 6;
    GameData.cardHorizontalSpacing = 52;
    GameData.cardVerticalSpacing = 52;
    //设置的舞台宽高
    GameData.stageW = 960;
    GameData.stageH = 640;
    GameData.elementWidth = 480 / GameData.maxColumn;
    GameData.promptNum = 0;
    GameData.time = 180;
    GameData.level = 20;
    GameData.chapter = 1;
    GameData.answerNum = 0;
    GameData.backgroundImage = "defaultBg_png";
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map