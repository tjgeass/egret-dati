class BackBtnView extends eui.Component {

    private btn_back:eui.Button;


	public constructor() {
		super();
        this.skinName = 'resource/eui_skins/MenuSkin.exml';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}
    private onAddToStage(event: egret.Event) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.back,this)

	}
    //加载主页
    private back()
    {
        ScreenControl.loadBegin();
    }

    //加载主页
    private loadGame()
    {
        ScreenControl.loadGame();
    }
}