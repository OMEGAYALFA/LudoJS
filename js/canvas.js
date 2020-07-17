// v1.0


var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d')

var canvasDice = document.querySelector('#Dice');
var ctx2 = canvasDice.getContext('2d')


var verde = new Image()
verde.src = './img/verde.png'

var rojo = new Image()
rojo.src = './img/rojo.png'

var azul = new Image()
azul.src = './img/azul.png'

var amarillo = new Image()
amarillo.src = './img/amarillo.png'


var tokens = new Image()
tokens.src = './img/tokens.png'

var dado = new Image()
dado.src = './img/dice.png'

var images = [verde, rojo, azul, amarillo, tokens, dado]

var diceSound = new Audio()
diceSound.src = './sound/roll.wav'



// TOKENS
	var red1 = {
		x: 580,
		y: 80
	}
	var red2 = {
		x: 530,
		y: 130
	}
	var red3 = {
		x: 630,
		y: 130
	}
	var red4 = {
		x: 580,
		y: 180
	}
	var green1 = {
		x: 130,
		y: 80
	}
	var green2 = {
		x: 80,
		y: 130
	}
	var green3 = {
		x: 180,
		y: 130
	}
	var green4 = {
		x: 130,
		y: 180
	}
	var blue1 = {
		x: 580,
		y: 530
	}
	var blue2 = {
		x: 530,
		y: 580
	}
	var blue3 = {
		x: 630,
		y: 580
	}
	var blue4 = {
		x: 580,
		y: 630
	}
	var yellow1 = {
		x: 130,
		y: 530
	}
	var yellow2 = {
		x: 80,
		y: 580
	}
	var yellow3 = {
		x: 180,
		y: 580
	}
	var yellow4 = {
		x: 130,
		y: 630
	}


//  SQUARES

	var square = [
	  	{
	  		x: 5,
	  		y: 305
	  	},
	  	{
	  		x: 55,
	  		y: 305
	  	},
	  	{
	  		x: 105,
	  		y: 305
	  	},
	  	{
	  		x: 155,
	  		y: 305
	  	},
	  	{
	  		x: 205,
	  		y: 305
	  	},
	  	{
	  		x: 255,
	  		y: 305
	  	},
	  	{
	  		x: 305,
	  		y: 255
	  	},
	  	{
	  		x: 305,
	  		y: 205
	  	},
	  	{
	  		x: 305,
	  		y: 155
	  	},
	  	{
	  		x: 305,
	  		y: 105
	  	},
	  	{
	  		x: 305,
	  		y: 55
	  	},
	  	{
	  		x: 305,
	  		y: 5
	  	},
	  	{
	  		x: 355,
	  		y: 5
	  	},
	  	{
	  		x: 405,
	  		y: 5
	  	},
	  	{
	  		x: 405,
	  		y: 55
	  	},
	  	{
	  		x: 405,
	  		y: 105
	  	},
	  	{
	  		x: 405,
	  		y: 155
	  	},
	  	{
	  		x: 405,
	  		y: 205
	  	},
	  	{
	  		x: 405,
	  		y: 255
	  	},
	  	{
	  		x: 455,
	  		y: 305
	  	},
	  	{
	  		x: 505,
	  		y: 305
	  	},
	  	{
	  		x: 555,
	  		y: 305
	  	},
	  	{
	  		x: 605,
	  		y: 305
	  	},
	  	{
	  		x: 655,
	  		y: 305
	  	},
	  	{
	  		x: 705,
	  		y: 305
	  	},
	  	{
	  		x: 705,
	  		y: 355
	  	},
	  	{
	  		x: 705,
	  		y: 405
	  	},
	  	{
	  		x: 655,
	  		y: 405
	  	},
	  	{
	  		x: 605,
	  		y: 405
	  	},
	  	{
	  		x: 555,
	  		y: 405
	  	},
	  	{
	  		x: 505,
	  		y: 405
	  	},
	  	{
	  		x: 455,
	  		y: 405
	  	},
	  	{
	  		x: 405,
	  		y: 455
	  	},
	  	{
	  		x: 405,
	  		y: 505
	  	},
	  	{
	  		x: 405,
	  		y: 555
	  	},
	  	{
	  		x: 405,
	  		y: 605
	  	},
	  	{
	  		x: 405,
	  		y: 655
	  	},
	  	{
	  		x: 405,
	  		y: 705
	  	},
	  	{
	  		x: 355,
	  		y: 705
	  	},
	  	{
	  		x: 305,
	  		y: 705
	  	},
	  	{
	  		x: 305,
	  		y: 655
	  	},
	  	{
	  		x: 305,
	  		y: 605
	  	},
	  	{
	  		x: 305,
	  		y: 555
	  	},
	  	{
	  		x: 305,
	  		y: 505
	  	},
	  	{
	  		x: 305,
	  		y: 455
	  	},
	  	{
	  		x: 255,
	  		y: 405
	  	},
	  	{
	  		x: 205,
	  		y: 405
	  	},
	  	{
	  		x: 155,
	  		y: 405
	  	},
	  	{
	  		x: 105,
	  		y: 405
	  	},
	  	{
	  		x: 55,
	  		y: 405
	  	},
	  	{
	  		x: 5,
	  		y: 405
	  	},
	  	{
	  		x: 5,
	  		y: 355
	  	},
	]


// FINAL SQUARES

	//GREEN

	 	var endgreen = [

		 	{
		 		x: 5,
		 		y: 355
		 	},
		 	{
		 		x: 55,
		 		y: 355
		 	},
		 	{
		 		x: 105,
		 		y: 355
		 	},
		 	{
		 		x: 155,
		 		y: 355
		 	},
		 	{
		 		x: 205,
		 		y: 355
		 	},
		 	{
		 		x: 255,
		 		y: 355
		 	},
		 	{
		 		x: 305,
		 		y: 355
		 	}

	 	]

	//RED

		var endred = [
			{
				x: 355,
				y: 5
			},
			{
				x: 355,
				y: 55
			},
			{
				x: 355,
				y: 105
			},
			{
				x: 355,
				y: 155
			},
			{
				x: 355,
				y: 205
			},
			{
				x: 355,
				y: 255
			},
			{
				x: 355,
				y: 305
			}
		]

	//BLUE

	 	var endblue = [

		 	{
		 		x: 705,
		 		y: 355
		 	},
		 	{
		 		x: 655,
		 		y: 355
		 	},
		 	{
		 		x: 605,
		 		y: 355
		 	},
		 	{
		 		x: 555,
		 		y: 355
		 	},
		 	{
		 		x: 505,
		 		y: 355
		 	},
		 	{
		 		x: 455,
		 		y: 355
		 	},
		 	{
		 		x: 405,
		 		y: 355
		 	}

	 	]

	//YELLOW

		var endyellow = [
			{
				x: 355,
				y: 605
			},
			{
				x: 355,
				y: 655
			},
			{
				x: 355,
				y: 605
			},
			{
				x: 355,
				y: 555
			},
			{
				x: 355,
				y: 505
			},
			{
				x: 355,
				y: 455
			},
			{
				x: 355,
				y: 405
			}
		]


var click = {
	x: 0,
	y: 0
}

var all = [green1, green2, green3, green4, red1, red2, red3, red4, yellow1, yellow2, yellow3, yellow4, blue1, blue2, blue3, blue4]

for(let item of all) {
	item.start = true
	item.pos = 0
	item.endsteps = 0
	item.win = false
	item.round = false
	item.value = 1
	item.content = []
	item.firstPos = {x: item.x, y: item.y, pos: 0, endsteps: 0, round: false, start: true, win: false, value: 1, content: []}
}



var greens = [green1, green2, green3, green4]
var reds = [red1, red2, red3, red4]
var blues = [blue1, blue2, blue3, blue4]
var yellows = [yellow1, yellow2, yellow3, yellow4]




for(let item of images) {
	item.onload = function  () {
		Draw()
		ctx2.drawImage(dado, 0, 0, 200, 210, 0, 0, 150, 150);
	}
}


// Global Var's
	var size = 40
	var roll = false
	var rolling = false
	var dice = null
	var frameX = 0
	var frameY = 0
	var turn = 'g'
	var move = false
	var capture = false
	var greenWins = 0
	var redWins = 0
	var blueWins = 0
	var yellowWins = 0
	var colorGreen = 155
	var colorRed = 155
	var colorBlue = 155
	var colorYellow = 155
	var upColorG = true
	var upColorR = true
	var upColorB = true
	var upColorY = true


function Draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);


	// TURNS

		if (turn == 'g') {
			if (upColorG) {
				colorGreen += 5
				if (colorGreen >= 255) {
					upColorG = false
				}
			}else {
				colorGreen -= 5
				if (colorGreen <= 150) {
					upColorG = true
				}
			}
			ctx.fillStyle = "rgba(0, " + colorGreen + ", 0, 0.5)";
			ctx.fillRect(0, 0, 300, 300);
		} else if (turn == 'r') {
			if (upColorR) {
				colorRed += 5
				if (colorRed >= 255) {
					upColorR = false
				}
			}else {
				colorRed -= 5
				if (colorRed <= 150) {
					upColorR = true
				}
			}
			ctx.fillStyle = "rgba(" + colorRed + ", 0, 0, 0.5)";
			ctx.fillRect(canvas.width - 300, 0, 300, 300);
		} else if (turn == 'b') {
			if (upColorB) {
				colorBlue += 5
				if (colorBlue >= 255) {
					upColorB = false
				}
			}else {
				colorBlue -= 5
				if (colorBlue <= 150) {
					upColorB = true
				}
			}
			ctx.fillStyle = "rgba(0, 0, " + colorBlue + ", 0.5)";
			ctx.fillRect(canvas.width - 300, canvas.height - 300, 300, 300);
		} else if (turn == 'y') {
			if (upColorY) {
				colorYellow += 5
				if (colorYellow >= 255) {
					upColorY = false
				}
			}else {
				colorYellow -= 5
				if (colorYellow <= 150) {
					upColorY = true
				}
			}
			ctx.fillStyle = "rgba(" + colorYellow + ", " + colorYellow + ", 0, 0.5)";
			ctx.fillRect(0, canvas.width - 300, 300, 300);
		}

	// GREEN

		for(let item of greens) {
			if (item.pos != 'hide') {
				if (!item.win) {
					ctx.drawImage(tokens, (item.value * 100) - 100, 0, 100, 100, item.x, item.y, size, size);
				} else{
					if (greenWins >= 1 ) {
						ctx.drawImage(verde, item.x, item.y-24, size/1.5, size/1.5);
					} 
					if (greenWins >= 2) {
						ctx.drawImage(verde, item.x, item.y+1, size/1.5, size/1.5);
					} 
					if (greenWins >= 3) {
						ctx.drawImage(verde, item.x, item.y+26, size/1.5, size/1.5);
					} 
					if (greenWins == 4) {
						ctx.drawImage(verde, item.x+25, item.y+1, size/1.5, size/1.5);
					}
				}
			}
			
		}

	// RED

		for(let item of reds) {
			if (item.pos != 'hide') {
				if (!item.win) {
					ctx.drawImage(tokens, (item.value * 100) - 100, 100, 100, 100, item.x, item.y, size, size);
				} else{
					if (redWins >= 1 ) {
						ctx.drawImage(rojo, item.x-24, item.y, size/1.5, size/1.5);
					} 
					if (redWins >= 2) {
						ctx.drawImage(rojo, item.x+1, item.y, size/1.5, size/1.5);
					} 
					if (redWins >= 3) {
						ctx.drawImage(rojo, item.x+26, item.y, size/1.5, size/1.5);
					} 
					if (redWins	 == 4) {
						ctx.drawImage(rojo, item.x+1, item.y+25, size/1.5, size/1.5);
					}
				}
			}
			
		}

	// BLUE

		for(let item of blues) {
			if (item.pos != 'hide') {
				if (!item.win) {
					ctx.drawImage(tokens, (item.value * 100) - 100, 200, 100, 100, item.x, item.y, size, size);
				} else{
					if (blueWins >= 1 ) {
						ctx.drawImage(azul, item.x+16, item.y-24, size/1.5, size/1.5);
					} 
					if (blueWins >= 2) {
						ctx.drawImage(azul, item.x+16, item.y+1, size/1.5, size/1.5);
					} 
					if (blueWins >= 3) {
						ctx.drawImage(azul, item.x+16, item.y+26, size/1.5, size/1.5);
					} 
					if (blueWins == 4) {
						ctx.drawImage(azul, item.x-6, item.y+1, size/1.5, size/1.5);
					}
				}
			}
			
		}

	// YELLOW

		for(let item of yellows) {
			if (item.pos != 'hide') {
				if (!item.win) {
					ctx.drawImage(tokens, (item.value * 100) - 100, 300, 100, 100, item.x, item.y, size, size);
				} else{
					if (yellowWins >= 1 ) {
						ctx.drawImage(amarillo, item.x-24, item.y+16, size/1.5, size/1.5);
					} 
					if (yellowWins >= 2) {
						ctx.drawImage(amarillo, item.x+1, item.y+16, size/1.5, size/1.5);
					} 
					if (yellowWins >= 3) {
						ctx.drawImage(amarillo, item.x+26, item.y+16, size/1.5, size/1.5);
					} 
					if (yellowWins == 4) {
						ctx.drawImage(amarillo, item.x+1, item.y-6, size/1.5, size/1.5);
					}
				}
			}
			
		};

	if (rolling) {
		if(frameX >= 1800 && frameY < 1800){
			frameX = 0
			frameY += 200
		}else if (frameX >= 200 && frameY >= 600) {
			frameX = 0
			frameY = 0
		}else {
			frameX += 200
		}
		ctx2.clearRect(0, 0, canvas.width, canvas.height);
		ctx2.drawImage(dado, frameX + 10, frameY + 10, 200, 200, 0, 0, 150, 150);
	}

}

function rollDice () {
	if(!roll && !rolling){
		rolling = true
		diceSound.play()
		setTimeout(() => {
			rolling = false
			ctx2.clearRect(0, 0, canvas.width, canvas.height);
			ctx2.drawImage(dado, 210 + (200 * dice), 610, 200, 200, 0, 0, 150, 150);
		}, 500)
		dice = Math.ceil(Math.random() * 6)
		roll = true
	}
}

document.addEventListener('keydown',(e) => {
	if (e.keyCode == 32){
		rollDice()
	}
	if (e.keyCode == 122) {
		setTimeout(() => {
		  document.documentElement.requestFullscreen()
		}, 1000)
	}

});

// function windowSize (){
// 	console.log(window.fullScreen)
// 	if (window.fullScreen) {
// 		document.body.style.zoom = "100%"
// 	}else {	
// 		document.body.style.zoom = "80%"
// 	}

// };


function Main () {
	Draw()
	Move()
	Collisons()
	move = false

	requestAnimationFrame(Main)
	
}

Main()




function detectCLicks () {
	canvas.onmousedown = function (e) {
		if (roll) {
			click.x = e.layerX
			click.y = e.layerY
		};
	}
}




function Collisons () {

	if (!roll && !capture) {

		if (turn == 'g') {
			for(let item of greens) {
				for(let item2 of all) {
					if (item.x == item2.x && item.y == item2.y) {
						if (!(greens.includes(item2)) && item.pos != 1 && item.pos != 14 && item.pos!= 27 && item.pos != 40) {
							Object.assign(item2, item2.firstPos)
							capture = true
							turn = 'g'
						} else if (greens.includes(item2) && item != item2 && item.pos == item2.pos && item2.pos != 'hide') {
							item.content = item.content.concat(item2.content)
							item.content.push(item2)
							item.value += item2.value	
							item2.pos = 'hide'
							capture = true
							turn = 'g'
						} else if (dice != 6 && dice != 1 && move && !capture) {
							turn = 'r'
						}
					} 
					
				}
			}
		} else if (turn == 'r') {
			for(let item of reds) {
				for(let item2 of all) {
					if (item.x == item2.x && item.y == item2.y) {
						if (!(reds.includes(item2)) && item.pos != 1 && item.pos != 14 && item.pos!= 27 && item.pos != 40) {
							Object.assign(item2, item2.firstPos)
							capture = true
							turn = 'r'
						} else if (reds.includes(item2) && item != item2 && item.pos == item2.pos && item2.pos != 'hide') {
								item.content = item.content.concat(item2.content)
								item.content.push(item2)
								item.value += item2.value	
								item2.pos = 'hide'
								capture = true
								turn = 'r'
						} else if (dice != 6 && dice != 1 && move && !capture) {
							turn = 'b'
						}
					}
				}
			}
		} else if (turn == 'b') {
			for(let item of blues) {
				for(let item2 of all) {
					if (item.x == item2.x && item.y == item2.y) {
						if (!(blues.includes(item2)) && item.pos != 1 && item.pos != 14 && item.pos!= 27 && item.pos != 40) {
							Object.assign(item2, item2.firstPos)
							capture = true
							turn = 'b'
						} else if (blues.includes(item2) && item != item2 && item.pos == item2.pos && item2.pos != 'hide') {
							item.content = item.content.concat(item2.content)
							item.content.push(item2)
							item.value += item2.value	
							item2.pos = 'hide'
							capture = true
							turn = 'b'
						} else if (dice != 6 && dice != 1 && move && !capture) {
							turn = 'y'
						}
					}
				}
			}
		} else if (turn == 'y') {
			for(let item of yellows) {
				for(let item2 of all) {
					if (item.x == item2.x && item.y == item2.y) {
						if (!(yellows.includes(item2))) {
							Object.assign(item2, item2.firstPos)
							capture = true
							turn = 'y'
						} else if (yellows.includes(item2) && item != item2 && item.pos == item2.pos && item2.pos != 'hide') {
							item.content = item.content.concat(item2.content)
							item.content.push(item2)
							item.value += item2.value	
							item2.pos = 'hide'
							capture = true
							turn = 'y'
						} else if (dice != 6 && dice != 1 && move && !capture) {
							turn = 'g'
						}
					}
				}
			}
		}

	};

}



function Move () {


	greenWins = greens.filter(wins => wins.win == true).length
	redWins = greens.filter(wins => wins.win == true).length
	blueWins = greens.filter(wins => wins.win == true).length
	yellowWins = greens.filter(wins => wins.win == true).length
					

	// Change X & Y Values
		if(roll){
			


			if(turn == 'g'){
				for(let item of greens) {

					if (greens.every(allStart => allStart.start == true) && dice != 6 && dice != 1) {
						turn = 'r'
						roll = false
					}

					
					detectCLicks()

					if(click.x >= item.x && click.x <= item.x + size && click.y >= item.y && click.y <= item.y + size
					 && ((click.x < 300 || click.x > 450) || (click.y < 300 || click.y > 450)) && (roll  && item != null)){
						click.x = 0
						click.y = 0
						roll = false

						if (item.start) {
							if (dice == 6 || dice == 1) {
								item.start = false
								item.pos = 1
							} else {
								if (greens.every(allStart => allStart.start == true)) {
									turn = 'r'
								} else {
									roll = true
								}
							}
						}else {

							if (item.pos != null) {
								item.pos += dice
							}else if(item.endsteps < 5){
								item.endsteps += dice
								if (item.endsteps > 5) {
									item.endsteps = 6
									item.win = true
								};
							}else{
								item.endsteps = 6
								item.win = true
							}

							if(item.pos > 51){
								let extra = (item.pos - 51)
								item.pos = null
								item.endsteps += extra
							}
							move = true

							if (capture) {
								capture = false
							}
						}


					}
				}
			} else if(turn == 'r'){
				for(let item of reds) {

					if (reds.every(allStart => allStart.start == true) && dice != 6 && dice != 1) {
						turn = 'b'
						roll = false
					}

					detectCLicks()

					if(click.x >= item.x && click.x <= item.x + size && click.y >= item.y && click.y <= item.y + size
					 && ((click.x < 300 || click.x > 450) || (click.y < 300 || click.y > 450)) && roll){
						click.x = 0
						click.y = 0
						roll = false
						if (item.start) {
							if (dice == 6 || dice == 1) {
								item.start = false
								item.pos = 14
							} else {
								let allStart = 0
								if (reds.every(allStartR => allStartR.start == true)) {
									turn = 'b'
								} else {
									roll = true
								}
							}
						}else {

							if (item.pos != null) {
								item.pos += dice
							}else if(item.endsteps < 5){
								item.endsteps += dice
								if (item.endsteps > 5) {
									item.endsteps = 6
									item.win = true
								};
							}else{
								item.endsteps = 6
								item.win = true
							}

							if(item.pos > 12 && item.round){
								let extra = (item.pos - 12)
								item.pos = null
								item.endsteps += extra
							}

							move = true
							if (capture) {
								capture = false
							}
						}

					}


					if(item.pos > 51){
						item.pos -= 52
						item.round = true 
					}
				}
			} else if(turn == 'b'){
				for(let item of blues) {

					if (blues.every(allStart => allStart.start == true) && dice != 6 && dice != 1) {
						turn = 'y'
						roll = false
					}
					
					detectCLicks()

					if(click.x >= item.x && click.x <= item.x + size && click.y >= item.y && click.y <= item.y + size
					 && ((click.x < 300 || click.x > 450) || (click.y < 300 || click.y > 450)) && roll){
						click.x = 0
						click.y = 0
						roll = false
						if (item.start) {
							if (dice == 6 || dice == 1) {
								item.start = false
								item.pos = 27
							} else {
								if (blues.every(allStart => allStart.start == true)) {
									turn = 'y'
								} else {
									roll = true
								}
							}
						}else {

							if (item.pos != null) {
								item.pos += dice
							}else if(item.endsteps < 5){
								item.endsteps += dice
								if (item.endsteps > 5) {
									item.endsteps = 6
									item.win = true
								};
							}else{
								item.endsteps = 6
								item.win = true
							}

							if(item.pos > 25 && item.round){
								let extra = (item.pos - 25)
								item.pos = null
								item.endsteps += extra
							}
							move = true
							if (capture) {
								capture = false
							}
						}


					}

					if(item.pos > 51){
						item.pos -= 52
						item.round = true 
					}
				}
			} else if(turn == 'y'){
				for(let item of yellows) {

					if (yellows.every(allStart => allStart.start == true) && dice != 6 && dice != 1) {
						turn = 'g'
						roll = false
					}
					
					detectCLicks()

					if(click.x >= item.x && click.x <= item.x + size && click.y >= item.y && click.y <= item.y + size
					 && ((click.x < 300 || click.x > 450) || (click.y < 300 || click.y > 450)) && roll){
						click.x = 0
						click.y = 0
						roll = false
						if (item.start) {
							if (dice == 6 || dice == 1) {
								item.start = false
								item.pos = 40
							} else {
								if (greens.every(allStart => allStart.start == true)) {
									turn = 'g'
								} else {
									roll = true
								}

							}
						}else {

							if (item.pos != null && item.pos != 'hide') {
								item.pos += dice
							}else if(item.endsteps < 5){
								item.endsteps += dice
								if (item.endsteps > 5) {
									item.endsteps = 6
									item.win = true
								};
							}else{
								item.endsteps = 6
								item.win = true
							}

							if(item.pos > 38 && item.round){
								let extra = (item.pos - 38)
								item.pos = null
								item.endsteps += extra
							}
							move = true
							if (capture) {
								capture = false
							}
						}


					}

					if(item.pos > 51){
						item.pos -= 52
						item.round = true 
					}
				}
			}
		}

	// Position Update
		for(let item of all) {
			if (!item.start && item.pos != null && item.pos != 'hide') {
				Object.assign(item, square[item.pos])
			}else if (item.pos == 'hide') {
				for(let item2 of all) {
					if (item2.content.includes(item)) {
						Object.assign(item, square[item2.pos])
					}
				}
			}
		}

		for(let item of greens) {
			if(item.pos == null && item.pos != 'hide'){
				Object.assign(item, endgreen[item.endsteps])
			}else if (item.pos == 'hide') {
				for(let item2 of greens) {
					if (item2.content.includes(item) && item2.pos == null) {
						Object.assign(item, endgreen[item2.endsteps])
						item.win = item2.win
						
					}
				}
			}
		}
		for(let item of reds) {
			if(item.pos == null && item.pos != 'hide'){
				Object.assign(item, endred[item.endsteps])
			}else if (item.pos == 'hide') {
				for(let item2 of reds) {
					if (item2.content.includes(item) && item2.pos == null) {
						Object.assign(item, endred[item2.endsteps])
						item.win = item2.win
						
					}
				}
			}
		}
		for(let item of blues) {
			if(item.pos == null && item.pos != 'hide'){
				Object.assign(item, endblue[item.endsteps])
			}else if (item.pos == 'hide') {
				for(let item2 of blues) {
					if (item2.content.includes(item) && item2.pos == null) {
						Object.assign(item, endblue[item2.endsteps])
						item.win = item2.win
						
					}
				}
			}
		}
		for(let item of yellows) {
			if(item.pos == null && item.pos != 'hide'){
				Object.assign(item, endyellow[item.endsteps])
			}else if (item.pos == 'hide') {
				for(let item2 of yellows) {
					if (item2.content.includes(item) && item2.pos == null) {
						Object.assign(item, endyellow[item2.endsteps])
						item.win = item2.win
						
					}
				}
			}
		}

}


