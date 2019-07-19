var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NewsConfig = (function () {
    function NewsConfig() {
    }
    NewsConfig.getData = function (id) {
        var json = RES.getRes("newsList_json");
        return json[id];
    };
    NewsConfig.getNewsNum = function () {
        var json = RES.getRes("newsList_json");
        return Object.keys(json).length;
    };
    return NewsConfig;
}());
__reflect(NewsConfig.prototype, "NewsConfig");
//# sourceMappingURL=NewsConfig.js.map