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
var HomeScreen = (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        var _this = _super.call(this) || this;
        _this.name = "Home";
        _this.skinName = 'resource/eui_skins/HomeSence.exml';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HomeScreen.getInstance = function () {
        if (this.instance == null) {
            this.instance = new HomeScreen();
        }
        return this.instance;
    };
    HomeScreen.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadBegin, ScreenControl);
        this.init();
    };
    HomeScreen.prototype.init = function () {
    };
    return HomeScreen;
}(eui.Component));
__reflect(HomeScreen.prototype, "HomeScreen");
//# sourceMappingURL=HomeSceen.js.map