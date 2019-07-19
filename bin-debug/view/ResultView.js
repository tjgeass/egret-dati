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
var ResultView = (function (_super) {
    __extends(ResultView, _super);
    function ResultView() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    ResultView.prototype.init = function () {
        var image = new eui.Image();
        image.horizontalCenter = 0;
        image.verticalCenter = 0;
        image.source = RES.getRes("win_png");
        this.anchorOffsetX = image.width / 2;
        this.anchorOffsetY = image.height / 2;
        this.addChild(image);
    };
    return ResultView;
}(eui.Component));
__reflect(ResultView.prototype, "ResultView");
//# sourceMappingURL=ResultView.js.map