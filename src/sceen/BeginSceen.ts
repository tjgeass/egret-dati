// TypeScript file
class BeginScreen extends eui.Component {
    private btn_start: eui.Button;
    private btn_guize: eui.Button;
    public tweenGroup: egret.tween.TweenGroup;
    public image: eui.Image;


    public constructor() {
        super();
        this.skinName = 'resource/eui_skins/BeginSence.exml';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private static instance: BeginScreen;

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new BeginScreen();
        }
        return this.instance;
    }
    private onAddToStage(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //this.tweenGroup.addEventListener('complete', this.onTweenGroupComplete, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadGame, ScreenControl)
        this.btn_guize.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadHome, ScreenControl)
        this.init();
    }
    private init() {
        this.playAnimation(this.tweenGroup, true);
    }
    /**
     * 动画组播放完成
     */
    private onTweenGroupComplete(): void {
        console.log('TweenGroup play completed.');
        this.tweenGroup.play();
    }

    private playAnimation(target: egret.tween.TweenGroup, isLoop: boolean): void {
        if (isLoop) {
            for (var key in target.items) {
                target.items[key].props = { loop: true };
            }
        }
        target.play();
    }
}