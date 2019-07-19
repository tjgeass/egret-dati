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
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView(id, name, gp_id, click_num) {
        if (id === void 0) { id = 1; }
        if (name === void 0) { name = "字"; }
        var _this = _super.call(this) || this;
        _this.elePadding = 5;
        _this.skinName = 'resource/eui_skins/CardViewSkin.exml';
        _this.touchChildren = false;
        _this.id = id;
        _this.lb_text.text = name;
        _this.gp_id = gp_id;
        _this.click_num = click_num;
        return _this;
    }
    CardView.prototype.addBorder = function () {
        this.bg.strokeWeight = 3;
    };
    CardView.prototype.removeBorder = function () {
        this.bg.strokeWeight = null;
    };
    CardView.prototype.clicked = function () {
        this.click_num = this.click_num - 1;
        if (this.click_num == 0) {
            this.touchEnabled = false;
        }
    };
    //连线点定位
    CardView.prototype.targetX = function (floatLeft) {
        if (floatLeft === void 0) { floatLeft = true; }
        if (floatLeft) {
            var x = this.x;
        }
        else {
            var x = this.x + this.width;
        }
        return x;
    };
    //连线点定位
    CardView.prototype.targetY = function () {
        var y = this.y + (this.height / 2);
        return y;
    };
    return CardView;
}(eui.Component));
__reflect(CardView.prototype, "CardView");
//# sourceMappingURL=CardView.js.map