let DOT_SPEED = 2.8;
let dot_Position_X = 40;

function setup() {
	describe('A motion fade effect creating the illusion of speed.');

	createCanvas(400, 400);
}

// Begin Game Loop
draw = function(){
	// Add 4th parameter to fill color to define opacity (0-255)
	fill(0, 0, 0, 30);
	noStroke(); // No Border drawn around rectangle
	// Draw fullscreen, semi transparent square over entire screen
	rect(0, 0, 400, 400);

	// Draw Point
	stroke(255, 0, 0);  // Set the color
	strokeWeight(12); // Set the Point's Width
	point(dot_Position_X, 200);

	// Increment the Position each time Game Loop repeats
	dot_Position_X += DOT_SPEED; // Add DOT_SPEED to Position

	// If Dot goes offsceen on the Right... 
	// if the X Position is greater than the Screen Width (400) + Point's Radius
	if (dot_Position_X > 406 ) { 
		dot_Position_X = -6 ; // reset it's Position to the Left
	}

}; // end Game Loop

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */
