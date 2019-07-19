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
var NewsView = (function (_super) {
    __extends(NewsView, _super);
    function NewsView() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/NewsViewSkin.exml';
        return _this;
        //this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    Object.defineProperty(NewsView.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (v) {
            this._title = v;
            this.lbl_text.text = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsView.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (v) {
            this._image = v;
            this.img.source = RES.getRes(v);
            ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsView.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (v) {
            this._desc = v;
        },
        enumerable: true,
        configurable: true
    });
    return NewsView;
}(eui.Component));
__reflect(NewsView.prototype, "NewsView");
//# sourceMappingURL=NewsView.js.map