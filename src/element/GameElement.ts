class GameElement extends egret.Sprite {
	public id: number;
	public question: string;
	public answer: number;
	public explain: string;
	constructor(id, question, answer,explain) {
		super();
		this.id = id;
		this.question = question;
		this.answer = answer;
		this.explain =explain;
	}
	public update(id: number) {
	}
}