/// <reference path="../../typings/meteor/meteor.d.ts" />
/// <reference path="../../typings/phaser/phaser.d.ts" />
/// <reference path="../gameobjects/Player.ts" />

eval('var GameFromScratch = (this.GameFromScratch || (this.GameFromScratch = {}))'); // https://doctorllama.wordpress.com/2015/04/21/meteor-typescript-classes-and-modules/

module GameFromScratch {
	export class GamePlayState extends Phaser.State {
		game: Phaser.Game;
		player: GameFromScratch.Player;
		constructor() {
			super();
		}

		create() {
			this.player = new Player(this.game, 0, this.game.height - 50);
			this.game.add.existing(this.player);
		}
	}
}