// Declare Constant Variables
let DOT_SPEED = 4.8;
let DOT_RADIUS = 24;
// Operator Variables
let dotPositionX = 40;
let dotPositionY = 40;
let dotDirectionX = "forward"; 
let dotDirectionY = "up";

// Begin Game Loop. Everything in here repeats at 60 frame per second
function setup() {
	createCanvas(400, 400);

	stroke(255, 0, 0); // Set Color Red
	strokeWeight(12); // Set Point Radius

	describe('Make an object bounce off the edge of the game window.');
}

function draw() {
	// Black screens save power on handheld devices ;)
	background(0); // color(greyscale)

	// Make your point
	stroke(255, 0, 0); // Set color
	strokeWeight(DOT_RADIUS); // Set 
	point(dotPositionX, dotPositionY);

	// If Dot reaches the Border... 
	if (dotPositionX > 399 - (DOT_RADIUS / 2) ) {
		dotDirectionX = "reverse"; // Change it's "flag"
	} // If it's on the left
	if (dotPositionX < 0 + (DOT_RADIUS / 2) ){ 
		dotDirectionX = "forward"; // It must be Red
	}

	// Do the same for the Y Axis
	if (dotPositionY < 0  + (DOT_RADIUS / 2) ) {
		dotDirectionY = "down"; 
	} 
	if (dotPositionY > 399 - (DOT_RADIUS / 2) ){ 
		dotDirectionY = "up"; 
	}

	if(dotDirectionY === "up"){
	// Increment the Position each time loop repeats
	dotPositionY -= DOT_SPEED; // Subtract DOT_SPEED from Position
	}
	if(dotDirectionY === "down"){ // otherwise...
		dotPositionY += DOT_SPEED; // Add DOT_SPEED
	}

	if(dotDirectionX === "forward"){
	dotPositionX += DOT_SPEED;  // Add DOT_SPEED
	}
	else{ // otherwise...
	 // Since there are only 2 possibilities, anything but "forward" ends up here. You could say dot_Direction = 0
		dotPositionX -= DOT_SPEED; // Subtract DOT_SPEED
	}

} // end Game Loop

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */
