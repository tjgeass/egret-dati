var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript file
var GameScreen = (function (_super) {
    __extends(GameScreen, _super);
    function GameScreen() {
        var _this = _super.call(this) || this;
        _this.name = "Game";
        _this.skinName = 'resource/eui_skins/GameSence.exml';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    GameScreen.getInstance = function () {
        if (this.instance == null) {
            this.instance = new GameScreen();
        }
        return this.instance;
    };
    GameScreen.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.init();
    };
    GameScreen.prototype.init = function () {
        //加载地图数据
        //GameData.timerManager = this.time_manager ;
        //GameData.timerManager.startPlay();
        //加载地图数据
        //this.gm.th
        this.gm.thisParent = this;
        GameData.gameMap = this.gm;
        // 
    };
    //游戏结束
    //游戏结束
    GameScreen.prototype.showResult = function (result) {
        this.gm.touchChildren = false;
        var rv = new ResultView();
        rv.verticalCenter = 0;
        rv.horizontalCenter = 0;
        this.addChild(rv);
        setTimeout(function () {
            ScreenControl.loadBegin();
        }, 60000);
    };
    return GameScreen;
}(eui.Component));
__reflect(GameScreen.prototype, "GameScreen");
//# sourceMappingURL=GameSceen.js.map