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
var BeginScreen = (function (_super) {
    __extends(BeginScreen, _super);
    function BeginScreen() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/BeginSence.exml';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    BeginScreen.getInstance = function () {
        if (this.instance == null) {
            this.instance = new BeginScreen();
        }
        return this.instance;
    };
    BeginScreen.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //this.tweenGroup.addEventListener('complete', this.onTweenGroupComplete, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadGame, ScreenControl);
        this.btn_guize.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadHome, ScreenControl);
        this.init();
    };
    BeginScreen.prototype.init = function () {
        this.playAnimation(this.tweenGroup, true);
    };
    /**
     * 动画组播放完成
     */
    BeginScreen.prototype.onTweenGroupComplete = function () {
        console.log('TweenGroup play completed.');
        this.tweenGroup.play();
    };
    BeginScreen.prototype.playAnimation = function (target, isLoop) {
        if (isLoop) {
            for (var key in target.items) {
                target.items[key].props = { loop: true };
            }
        }
        target.play();
    };
    return BeginScreen;
}(eui.Component));
__reflect(BeginScreen.prototype, "BeginScreen");
//# sourceMappingURL=BeginSceen.js.map