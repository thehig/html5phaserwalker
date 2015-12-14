/// <reference path="../../typings/meteor/meteor.d.ts" />
/// <reference path="../../typings/phaser/phaser.d.ts" />

eval('var GameFromScratch = (this.GameFromScratch || (this.GameFromScratch = {}))'); // https://doctorllama.wordpress.com/2015/04/21/meteor-typescript-classes-and-modules/

module GameFromScratch {
	export enum PlayerState { IDLE, WALKING }

	export class Player extends Phaser.Sprite {
		game: Phaser.Game;
		playerState: PlayerState;

		RIGHT_ARROW: Phaser.Key;
		LEFT_ARROW: Phaser.Key;
		ESCAPE: Phaser.Key;

		walkingSpeed: number;
		public static MAX_SPEED: number = 30;

		constructor(game:Phaser.Game, x:number, y:number) {
			this.game = game;
			this.walkingSpeed = 0;
			this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
			this.RIGHT_ARROW.onDown.add(Player.prototype.MoveRight, this);

			this.LEFT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
			this.LEFT_ARROW.onDown.add(Player.prototype.MoveLessRight, this);

			this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
			this.ESCAPE.onDown.add(Player.prototype.GameOver, this);

			super(game, x, y, "HERO_WALKING", 0);

			this.anchor.set(0.0, 1.0);
			this.StartIdle();
		}

		update(){
			if (this.game.time.elapsedMS == 0) return;

			if(this.playerState == PlayerState.WALKING){
				this.x += (this.walkingSpeed / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);

				var stageWidth = this.game.stage.getChildAt(0).getBounds().width;
				if (this.x > stageWidth * .75)
					this.x = stageWidth * .25;
			}
		}

		MoveRight() {
			if(this.playerState == PlayerState.IDLE){
				this.StartWalking();
			}
			else{
				if(this.walkingSpeed < Player.MAX_SPEED){
					this.walkingSpeed++;
					this.animations.currentAnim.speed = this.walkingSpeed;
				}
			}
		}

		MoveLessRight(){
			if (this.playerState != PlayerState.IDLE) {
				this.walkingSpeed--;

				if (this.walkingSpeed > 0)
					this.animations.currentAnim.speed = this.walkingSpeed;
				else
					this.StartIdle();
			}
		}

		GameOver(){
			this.game.state.start("GameOverState");
		}

		StartWalking() {
			this.playerState = PlayerState.WALKING;
			this.walkingSpeed = 5;
			this.loadTexture("HERO_WALKING", 0);
			this.animations.add("walk");
			this.animations.play("walk", this.walkingSpeed, true);
		}

		StartIdle(){
			this.playerState = PlayerState.IDLE;
			this.walkingSpeed = 0;
			this.loadTexture("HERO_IDLE", 0);
			this.animations.add("idle");
			this.animations.play("idle", 15, true);
		}
	}
}