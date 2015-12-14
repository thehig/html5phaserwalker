/// <reference path="../typings/meteor/meteor.d.ts" />
/// <reference path="../typings/phaser/phaser.d.ts" />
/// <reference path="resources/states/TitleScreenState.ts" />

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

			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		}
	}
}


if(Meteor.isClient){
	Template['game'].rendered = function(){
		console.log("Game template onLoad"); 
		this.game = new Game.ExtremeWalkingSimulator();
	}
}