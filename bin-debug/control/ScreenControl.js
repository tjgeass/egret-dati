var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ScreenControl = (function () {
    function ScreenControl() {
    }
    //加载开始页面
    ScreenControl.loadBegin = function () {
        this.load(new BeginScreen());
    };
    //加载主页面
    ScreenControl.loadHome = function () {
        this.load(new HomeScreen());
    };
    //加载游戏页面
    ScreenControl.loadGame = function () {
        this.load(new GameScreen());
    };
    ScreenControl.load = function (fn) {
        GameData.stage.removeChildren();
        var child = fn;
        GameData.screen = child;
        GameData.stage.addChild(child);
    };
    return ScreenControl;
}());
__reflect(ScreenControl.prototype, "ScreenControl");
//# sourceMappingURL=ScreenControl.js.map