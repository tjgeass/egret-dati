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
var BackBtnView = (function (_super) {
    __extends(BackBtnView, _super);
    function BackBtnView() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/MenuSkin.exml';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    BackBtnView.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.back, this);
    };
    //加载主页
    BackBtnView.prototype.back = function () {
        ScreenControl.loadBegin();
    };
    //加载主页
    BackBtnView.prototype.loadGame = function () {
        ScreenControl.loadGame();
    };
    return BackBtnView;
}(eui.Component));
__reflect(BackBtnView.prototype, "BackBtnView");
//# sourceMappingURL=BackBtnView.js.map