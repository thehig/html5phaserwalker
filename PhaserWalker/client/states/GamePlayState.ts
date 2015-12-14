/// <reference path="../../typings/meteor/meteor.d.ts" />
/// <reference path="../../typings/phaser/phaser.d.ts" />
/// <reference path="../gameobjects/Player.ts" />
/// <reference path="../gameobjects/MyScene.ts" />

eval('var GameFromScratch = (this.GameFromScratch || (this.GameFromScratch = {}))'); // https://doctorllama.wordpress.com/2015/04/21/meteor-typescript-classes-and-modules/

module GameFromScratch {
	export class GamePlayState extends Phaser.State {
		game: Phaser.Game;
		player: GameFromScratch.Player;
		myScene: GameFromScratch.MyScene;

		constructor() {
			super();
		}

		create() {
			this.myScene = new MyScene(this.game, 0, 0);
			this.player = new Player(this.game, 0, this.game.height - 50);

			this.game.add.existing(this.myScene);
			this.game.add.existing(this.player);

			this.game.world.setBounds(0, 0, this.myScene.width * 2, this.myScene.height);
			this.game.camera.follow(this.player);
		}
	}
}