// Declare a CONSTANT_VARIABLE. This never changes.
let DOT_SPEED = 4.2;
// Declare an operatorVariable. This will be updated.
let dotPositionX = 200;
let dotPositionY = 200;


function setup() {
	describe('Use the built in Keyboard Functions to update Variables.');
	createCanvas(400, 400);
}

// Begin Game Loop. Everything in here repeats at 60 frame per second
function draw() {
// Erase everything and paint the background black
background(0); 

	if(keyIsPressed){ // If any key is pressed...
		// Check for specific keys
		if(keyCode === DOWN_ARROW){ 
			// Add DOT_SPEED to Y Position Variable
			dotPositionY = dotPositionY + DOT_SPEED; 
		}
		if(keyCode === UP_ARROW){
			// Subtract DOT_SPEED from Y Position Variable
			dotPositionY = dotPositionY - DOT_SPEED;
		}
		if(keyCode === RIGHT_ARROW){
			// Another way to add 2 numbers
			dotPositionX += DOT_SPEED; 
		}
		if(keyCode === LEFT_ARROW){
			// Another way to increment by 1
			dotPositionX -= DOT_SPEED; 
		}   
	}

	// Draw Point
	stroke(255, 0, 0);  // Set Color
	strokeWeight(12); // Set Point Radius 
	// Draw point using updated Variables
	point(dotPositionX, dotPositionY); 

} // end Game Loop

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */
