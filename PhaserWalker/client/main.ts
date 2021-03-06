/// <reference path="../typings/meteor/meteor.d.ts" />
/// <reference path="../typings/phaser/phaser.d.ts" />
/// <reference path="states/TitleScreenState.ts" />
/// <reference path="states/GamePlayState.ts" />
/// <reference path="states/GameOverState.ts" />

eval('var GameFromScratch = (this.GameFromScratch || (this.GameFromScratch = {}))'); // https://doctorllama.wordpress.com/2015/04/21/meteor-typescript-classes-and-modules/

module Game {
	export class ExtremeWalkingSimulator {
		game: Phaser.Game;

		constructor(){
			this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
				create: this.create,
				preload: this.preload
			});
		}

		preload(){

			// Graphics
			this.game.load.image("title", "/resources/graphics/TitleScreen.png");
			this.game.load.image("scene", "/resources/graphics/scene720p.png");
			this.game.load.image("gameover", "/resources/graphics/GameOver.png");

			// Spritesheets
			this.game.load.atlasXML("HERO_WALKING",
				"/resources/graphics/Hero_Walking.png",
				"/resources/graphics/Hero_Walking.xml");
			this.game.load.atlasXML("HERO_IDLE",
				"/resources/graphics/Hero_Idle.png",
				"/resources/graphics/Hero_Idle.xml");

			// Audio
			this.game.load.audio("TitleSong", [
				"/resources/sounds/TitleSong.mp3", 
				"/resources/sounds/TitleSong.ogg", 
				"/resources/sounds/TitleSong.wav"]);
		}

		create(){
			this.game.state.add("TitleScreenState", GameFromScratch.TitleScreenState, true);
			this.game.state.add("GamePlayState", GameFromScratch.GamePlayState, false);
			this.game.state.add("GameOverState", GameFromScratch.GameOverState, false);

			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		}
	}
}

console.log("[+] Game.ExtremeWalkingSimulator module loaded");

if(Meteor.isClient){
	Template['game'].rendered = function(){
		console.log("Game template onLoad"); 
		this.game = new Game.ExtremeWalkingSimulator();
	}
}
