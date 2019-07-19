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
var GameMap = (function (_super) {
    __extends(GameMap, _super);
    function GameMap() {
        var _this = _super.call(this) || this;
        _this.isReady = false; //是否可以开始
        _this.skinName = 'resource/eui_skins/GameMapSkin.exml';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    GameMap.prototype.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.btn_true.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pass, this);
        this.btn_false.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lose, this);
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.next, this);
        this.init();
    };
    GameMap.prototype.init = function () {
        GameData.resetData();
        this.createTimer();
        this.initView();
    };
    GameMap.prototype.createTimer = function () {
        this.lb_time.text = GameData.time.toString();
        this.timer = new egret.Timer(1000, GameData.time);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.update, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.complete, this);
        this.timer.start();
    };
    GameMap.prototype.update = function () {
        var num = this.timer.repeatCount - this.timer.currentCount;
        //设置显示文本
        this.lb_time.text = num.toString();
        //添加到显示列表
    };
    //计时结束
    GameMap.prototype.complete = function () {
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.update, this);
        this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.complete, this);
        this.showresult();
    };
    //初始化页面
    GameMap.prototype.initView = function () {
        this.initData();
        this.lb_question.text = GameData.elements[GameData.chapter - 1].question;
        this.lb_explain.text = GameData.elements[GameData.chapter - 1].explain;
        this.gp_que.visible = true;
        this.gp_explain.visible = false;
        this.gp_result.visible = false;
    };
    /**
     * 添加数据
     */
    GameMap.prototype.initData = function () {
        var temp = new Array();
        for (var i = 0; i < GameData.getDataNum(); i++) {
            var id = i + 1;
            var item = GameData.getData(i);
            var gele = new GameElement(id, item.question, item.answer, item.explain);
            temp.push(gele);
        }
        GameData.elements = new Array();
        temp = temp.sort(function () { return 0.5 - Math.random(); }); //打乱数据数组
        GameData.elements = temp;
    };
    GameMap.prototype.next = function () {
        if (GameData.chapter == GameData.level) {
            this.showresult();
        }
        else {
            GameData.chapter = GameData.chapter + 1;
            this.lb_question.text = GameData.elements[GameData.chapter - 1].question;
            this.lb_explain.text = GameData.elements[GameData.chapter - 1].explain;
            this.lb_num.text = "第" + GameData.chapter + "题";
            this.gp_explain.visible = false;
            this.timer.start();
        }
    };
    /**
     * 是
     *
     */
    GameMap.prototype.pass = function () {
        if (GameData.elements[GameData.chapter - 1].answer == 1) {
            this.showExplain(true);
        }
        else {
            this.showExplain(false);
        }
    };
    /**
     * 不是
     */
    GameMap.prototype.lose = function () {
        if (GameData.elements[GameData.chapter - 1].answer == 0) {
            this.showExplain(true);
        }
        else {
            this.showExplain(false);
        }
    };
    /**
     * 显示回答结果
     */
    GameMap.prototype.showExplain = function (result) {
        this.timer.stop();
        if (result) {
            GameData.answerNum = GameData.answerNum + 1;
            this.lb_title.text = '你真棒，回答正确！';
            this.gp_explain.visible = true;
            this.onResourceLoadComplete("true_mp3");
        }
        else {
            this.lb_title.text = '很遗憾，回答错误。';
            this.gp_explain.visible = true;
            this.onResourceLoadComplete("false_mp3");
        }
    };
    GameMap.prototype.showresult = function () {
        var text0 = String(GameData.answerNum);
        GameData.saveLocalData(text0);
        this.lb_text0.textFlow = [
            { text: "您共答对了 ", style: { "size": 24 } },
            { text: text0, style: { "textColor": 0xfec969, "size": 30 } },
            { text: " 道题 ", style: { "size": 24 } }
        ];
        var text1 = String(Math.round(GameData.answerNum / GameData.level * 100));
        this.lb_text1.textFlow = [
            { text: "答题正确率  ", style: { "size": 24 } },
            { text: text1, style: { "textColor": 0xfec969, "size": 30 } },
            { text: " % ", style: { "size": 24 } }
        ];
        var text2 = String(this.timer.currentCount);
        this.lb_text2.textFlow = [
            { text: "共计用时  ", style: { "size": 24 } },
            { text: text2, style: { "textColor": 0xfec969, "size": 30 } },
            { text: " 秒 ", style: { "size": 24 } }
        ];
        var text3 = GameData.getRank(text0);
        this.lb_text3.textFlow = [
            { text: "击败了  ", style: { "size": 24 } },
            { text: text3, style: { "textColor": 0xfec969, "size": 30 } },
            { text: " % 的小伙伴 ", style: { "size": 24 } }
        ];
        this.lb_num.text = "你的成绩";
        this.onResourceLoadComplete("result_mp3");
        this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadBegin, ScreenControl);
        this.gp_explain.visible = false;
        this.gp_que.visible = false;
        this.gp_result.visible = true;
    };
    /**播放声音*/
    GameMap.prototype.onResourceLoadComplete = function (text) {
        //获取音乐文件
        var sound = RES.getRes(text);
        //播放音乐文件
        sound.play(0, 1);
    };
    return GameMap;
}(eui.Component));
__reflect(GameMap.prototype, "GameMap");
//# sourceMappingURL=GameMap.js.map