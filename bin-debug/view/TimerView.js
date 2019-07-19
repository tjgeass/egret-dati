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
var TimerView = (function (_super) {
    __extends(TimerView, _super);
    function TimerView() {
        var _this = _super.call(this) || this;
        _this._timeTxt = "00:00:00";
        _this.initView();
        _this.addEventListener("timeChange", _this.onTimeReflash, _this); //
        return _this;
    }
    Object.defineProperty(TimerView.prototype, "timeTxt", {
        get: function () {
            return this._timeTxt;
        },
        enumerable: true,
        configurable: true
    });
    TimerView.prototype.initView = function () {
        this.timeLabel = new eui.Label();
        this.addChild(this.timeLabel);
        this._timeCount = new Date().getTime();
        this._time = new egret.Timer(1000);
    };
    TimerView.prototype.startPlay = function () {
        this._time.addEventListener(egret.TimerEvent.TIMER, this.onTimeHandler, this);
        this._time.start();
    };
    TimerView.prototype.stopTime = function () {
        this._time.stop();
        this._time.removeEventListener(egret.TimerEvent.TIMER, this.onTimeHandler, this);
    };
    /**
     * 时间
     */
    TimerView.prototype.onTimeHandler = function (event) {
        var timeCount = new Date().getTime() - this._timeCount;
        this._timeTxt = this.parseTime(timeCount);
        this.dispatchEvent(new egret.Event("timeChange"));
    };
    /**
     * 刷新label
     */
    TimerView.prototype.onTimeReflash = function (event) {
        this.timeLabel.text = this._timeTxt;
    };
    /**
     * 格式化时间
     */
    TimerView.prototype.parseTime = function (t) {
        var hour = 0;
        var minute = 0;
        var second = 0;
        hour = Math.floor(t / 3600000);
        minute = Math.floor((t % 3600000) / 60000);
        second = Math.floor((t % 60000) / 1000);
        return (this.getTwoLength(hour) + ":" + this.getTwoLength(minute) + ":" + this.getTwoLength(second));
    };
    TimerView.prototype.getTwoLength = function (data) {
        if (data < 10) {
            return "0" + data;
        }
        else {
            return "" + data;
        }
    };
    return TimerView;
}(eui.Component));
__reflect(TimerView.prototype, "TimerView");
//# sourceMappingURL=TimerView.js.map