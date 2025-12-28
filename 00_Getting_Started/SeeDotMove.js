// Declare a CONSTANT_VARIABLE. This never changes.
var DOT_SPEED = 1.8;
// Declare an operatorVariable. This will be updated.
var dotPositionX = 1;
	
function setup() {
	describe('Use a Variable to change Point Position in the X Axis, by updating it in the Game Loop.');

	createCanvas(400, 400);
}



// Begin Game Loop. Everything in here will loop at 60 FPS
function draw() {
	// Erase everything and paint the background black
	background(0, 0, 0); 

	// Draw Point
	stroke(255, 0, 0);  // Set Color
	strokeWeight(12); // Set Point Diameter
	point(dotPositionX, 200); // Make your point :)

	 // Increment the Position each time loop repeats
	dotPositionX = dotPositionX + DOT_SPEED;

}; // end Game Loop

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */
