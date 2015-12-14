/// <reference path="../../typings/meteor/meteor.d.ts" />
/// <reference path="../../typings/phaser/phaser.d.ts" />

eval('var GameFromScratch = (this.GameFromScratch || (this.GameFromScratch = {}))'); // https://doctorllama.wordpress.com/2015/04/21/meteor-typescript-classes-and-modules/

module GameFromScratch {
	export class TitleScreenState extends Phaser.State {
		game: Phaser.Game;
		music: Phaser.Sound;
		titleScreenImage: Phaser.Sprite;

		constructor() {
			super();
		}

		create() {
			this.titleScreenImage = this.add.sprite(0, 0, "title");
			this.titleScreenImage.scale.setTo(
				this.game.width / this.titleScreenImage.width,
				this.game.height / this.titleScreenImage.height);

			this.music = this.game.add.audio("TitleSong");
			this.music.volume = 100;
			this.music.loop = true;
			this.music.play();
		}
	}
}