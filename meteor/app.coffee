class ExtremeWalkingSimulator
	constructor: () ->
		@game = new (Phaser.Game)(1280, 720, Phaser.Auto, 'content',
			create: @create
			preload: @preload)

	create: ()->
	preload: ()->

window.onload = ()->
	game = new Game.ExtremeWalkingSimulator();