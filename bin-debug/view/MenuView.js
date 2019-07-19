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
var MenuView = (function (_super) {
    __extends(MenuView, _super);
    function MenuView() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/MenuSkin.exml';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    MenuView.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loadHome, this);
        this.btn_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loadGame, this);
        this.init();
    };
    MenuView.prototype.init = function () {
        switch (GameData.screen.name) {
            case "Home":
                this.btn_home.enabled = false;
                break;
            case "Article":
                this.btn_article.enabled = false;
                break;
            case "Game":
                this.btn_game.enabled = false;
                break;
        }
        //(<eui.Label>this.btn_article.labelDisplay).size = 42;
    };
    //加载主页
    MenuView.prototype.loadHome = function () {
        ScreenControl.loadHome();
    };
    //加载主页
    MenuView.prototype.loadGame = function () {
        ScreenControl.loadGame();
    };
    return MenuView;
}(eui.Component));
__reflect(MenuView.prototype, "MenuView");
//# sourceMappingURL=MenuView.js.map