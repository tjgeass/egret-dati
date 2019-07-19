class GameMap extends eui.Component {
	public thisParent: GameScreen;
	private gp_que: eui.Group;

	private timer: egret.Timer;
	private lb_time: eui.Label;
	private lb_question: eui.Label;
	private lb_num: eui.Label;
	private btn_true: eui.Button;
	private btn_false: eui.Button;


	private gp_explain: eui.Group;
	private lb_title: eui.Label;
	private lb_explain: eui.Label;
	private btn_next: eui.Button;

	private gp_result: eui.Group;
	private lb_text0: eui.Label;
	private lb_text1: eui.Label;
	private lb_text2: eui.Label;
	private lb_text3: eui.Label;
	private btn_restart: eui.Button;

	public tweenGroup: egret.tween.TweenGroup;

	public isReady: boolean = false;//是否可以开始


	public constructor() {
		super();
		this.skinName = 'resource/eui_skins/GameMapSkin.exml';
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.btn_true.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pass, this);
		this.btn_false.addEventListener(egret.TouchEvent.TOUCH_TAP, this.lose, this);
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.next, this);
		this.init();
	}

	private init() {
		GameData.resetData();
		this.createTimer();
		this.initView();
	}

	private createTimer() {
		this.lb_time.text = GameData.time.toString();
		this.timer = new egret.Timer(1000, GameData.time);
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.update, this);
		this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.complete, this);
		this.timer.start();
	}

	public update() {
		let num: number = this.timer.repeatCount - this.timer.currentCount;
		//设置显示文本
		this.lb_time.text = num.toString();
		//添加到显示列表
	}
	//计时结束
	private complete() {
		this.timer.removeEventListener(egret.TimerEvent.TIMER, this.update, this);
		this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.complete, this);
		this.showresult();
	}


	//初始化页面
	private initView() {
		this.initData();
		this.lb_question.text = GameData.elements[GameData.chapter - 1].question;
		this.lb_explain.text = GameData.elements[GameData.chapter - 1].explain;
		this.gp_que.visible = true;
		this.gp_explain.visible = false;
		this.gp_result.visible = false;
	}

	/**
	 * 添加数据
	 */
	private initData() {
		let temp: GameElement[] = new Array();
		for (let i: number = 0; i < GameData.getDataNum(); i++) {
			let id = i + 1;
			let item = GameData.getData(i);
			let gele: GameElement = new GameElement(id, item.question, item.answer,item.explain);
			temp.push(gele);
		}
		GameData.elements = new Array();
		temp = temp.sort(() => 0.5 - Math.random()); //打乱数据数组
		GameData.elements = temp;
	}



	private next() {
		if (GameData.chapter == GameData.level) {
			this.showresult();
		} else {
			GameData.chapter = GameData.chapter + 1;
			this.lb_question.text = GameData.elements[GameData.chapter - 1].question;
			this.lb_explain.text = GameData.elements[GameData.chapter - 1].explain;
			this.lb_num.text = "第" + GameData.chapter + "题";
			this.gp_explain.visible = false;
			this.timer.start();
		}

	}
	/**
	 * 是
	 *
	 */
	private pass() {
		if (GameData.elements[GameData.chapter - 1].answer == 1) {
			this.showExplain(true);
		} else {
			this.showExplain(false);
		}
	}
	/**
	 * 不是
	 */

	private lose() {
		if (GameData.elements[GameData.chapter - 1].answer == 0) {
			this.showExplain(true);
		} else {
			this.showExplain(false);
		}
	}
	/**
	 * 显示回答结果
	 */
	private showExplain(result: boolean) {
		this.timer.stop();
		if (result) {
			GameData.answerNum = GameData.answerNum + 1;
			this.lb_title.text = '你真棒，回答正确！';
			this.gp_explain.visible = true;
			this.onResourceLoadComplete("true_mp3");
		} else {
			this.lb_title.text = '很遗憾，回答错误。';
			this.gp_explain.visible = true; 
			this.onResourceLoadComplete("false_mp3");
		}

	}

	private showresult() {
		var text0 = String(GameData.answerNum);
		GameData.saveLocalData(text0);
		this.lb_text0.textFlow = <Array<egret.ITextElement>>[
			{ text: "您共答对了 ", style: { "size": 24 } }
			, { text: text0, style: { "textColor": 0xfec969, "size": 30 } }
			, { text: " 道题 ", style: { "size": 24 } }
		];
		var text1 = String(Math.round(GameData.answerNum / GameData.level * 100));
		this.lb_text1.textFlow = <Array<egret.ITextElement>>[
			{ text: "答题正确率  ", style: { "size": 24 } }
			, { text: text1, style: { "textColor": 0xfec969, "size": 30 } }
			, { text: " % ", style: { "size": 24 } }
		];
		var text2 = String(this.timer.currentCount);
		this.lb_text2.textFlow = <Array<egret.ITextElement>>[
			{ text: "共计用时  ", style: { "size": 24 } }
			, { text: text2, style: { "textColor": 0xfec969, "size": 30 } }
			, { text: " 秒 ", style: { "size": 24 } }
		];
		var text3 = GameData.getRank(text0);
		this.lb_text3.textFlow = <Array<egret.ITextElement>>[
			{ text: "击败了  ", style: { "size": 24 } }
			, { text: text3, style: { "textColor": 0xfec969, "size": 30 } }
			, { text: " % 的小伙伴 ", style: { "size": 24 } }
		];
		this.lb_num.text = "你的成绩"
		this.onResourceLoadComplete("result_mp3");
		this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadBegin, ScreenControl);
		this.gp_explain.visible = false;
		this.gp_que.visible = false;
		this.gp_result.visible = true;
	}


	/**播放声音*/
	private onResourceLoadComplete(text: string) {
		//获取音乐文件
		var sound: egret.Sound = RES.getRes(text);
		//播放音乐文件
		sound.play(0, 1);
	}
}