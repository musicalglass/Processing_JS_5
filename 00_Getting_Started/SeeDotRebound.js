// Declare Operator Variable. This will be updated
let dot_Position_X = 40;

// Declare CONSTANT_VARIABLES. These never change
let DOT_SPEED = 3;
let DOT_SIZE = 24;

function setup() {
	describe('Make an object bounce off the edge of the game window.');
	createCanvas(400, 400);

	stroke(255, 0, 0); // Set Color Red
	strokeWeight(12); // Set Point Radius
}


// Begin Game Loop. Everything in here repeats at 60 frame per second
function draw() {
// clear the screen
background(0); // color(greyscale)

dot_Position_X += DOT_SPEED; // Add DOT_SPEED to Position

if (dot_Position_X + (DOT_SIZE/2) > 400 || dot_Position_X - (DOT_SIZE/2) < 0) { // If Dot reaches either Border... 
    DOT_SPEED = -DOT_SPEED; // flip the speed variable
} 

stroke(255, 0, 0); // Set Dot color
strokeWeight(DOT_SIZE); // Set Dot size
point(dot_Position_X, 200); // Make your point using position variable

} // end Game Loop

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */
