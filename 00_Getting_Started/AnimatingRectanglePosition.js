	// Declare CONSTANT_VARIABLE (this never changes)
	let RECT_POSITION_X = 140;
	// Declare operatorVariable (this will be updated)
	let rectPositionY = 320;

function setup() {
	createCanvas(400, 400);
	
	describe('Move a Rectangle by changing its Y value each time through the Game Loop.');
}

function draw() {
	// Erase everything and repaint the screen Black
	background(0); 

	// Update the Position each time through the Loop
	rectPositionY = rectPositionY + -1.5;

	// Set Drawing color
	fill(127, 0, 255); 

	// Draw Rectangle using Variables for X and Y Position
	rect(RECT_POSITION_X, rectPositionY, 100, 100); 

	// If it tries to go offscreen...
	if (rectPositionY < -100){
		rectPositionY = 400; // set it back to the beginning ;)
	}
}

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */