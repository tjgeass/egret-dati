class GameData {
	//当前舞台
	public static stage: Main;

	//当前场景
	public static screen: eui.Component;

	//最大行列
	public static maxRow = 6;
	public static maxColumn = 6;

	public static cardHorizontalSpacing: number = 52;
	public static cardVerticalSpacing: number = 52;

	//设置的舞台宽高
	public static stageW: number = 960;
	public static stageH: number = 640;

	public static elementWidth: number = 480 / GameData.maxColumn;
	public static elements: GameElement[]; //元素数组





	//地图数据
	public static gameMap: GameMap;
	public static mapData;
	public static promptNum: number = 0;

	public static time: number = 180;
	public static level: number = 20;
	public static chapter: number = 1;
	public static answerNum: number = 0;

	public static backgroundImage: string = "defaultBg_png";

	//时间控制
	public static timerManager: TimerView;

	public static getData(id: number) {
		let json = RES.getRes("gameData_json");
		return json[id];
	}

	public static getDataNum() {
		let json = RES.getRes("gameData_json");
		return json.length;
	}

	public static resetData() {
		this.answerNum = 0;
		this.chapter = 1
	}

	public static saveLocalData(key: string) {
		var temp = egret.localStorage.getItem(key);
		temp = String(Number(temp) + 1);
		egret.localStorage.setItem(key, temp);
		var sum = egret.localStorage.getItem('sum');
		sum = String(Number(sum) + 1);
		egret.localStorage.setItem('sum', sum);
	}
	public static getRank(key: string) {
		let num: number = 0;
		for (let i: number = 0; i < Number(key); i++) {
			var n = Number(egret.localStorage.getItem(String(i)));
			console.log(i + '答对' + n);
			num = num + n;
		}
		var sum = Number(egret.localStorage.getItem('sum'));
		console.log('共计' + sum);
		var rank = (num / sum * 100).toFixed(2);
		return rank;
	}
}