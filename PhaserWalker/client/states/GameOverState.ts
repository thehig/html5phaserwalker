/// <reference path="../../typings/meteor/meteor.d.ts" />
/// <reference path="../../typings/phaser/phaser.d.ts" />

eval('var GameFromScratch = (this.GameFromScratch || (this.GameFromScratch = {}))'); // https://doctorllama.wordpress.com/2015/04/21/meteor-typescript-classes-and-modules/

module GameFromScratch {
	export class GameOverState extends Phaser.State {
		game: Phaser.Game;
		gameOverSprite: Phaser.Sprite;

		constructor() {
			super();
		}

		create(){
			this.gameOverSprite = this.add.sprite(0, 0, "gameover", 0);
			this.gameOverSprite.scale.setTo(
				this.game.width / this.gameOverSprite.width,
				this.game.height / this.gameOverSprite.height);

			this.input.onDown.add(() => { 
				this.game.state.start("TitleScreenState", true);
			});
		}
	}
}