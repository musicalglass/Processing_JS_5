// Declare CONSTANT_VARIABLE for Ball Speed
let BALL_SPEED = 2.2;
// Declare operatorVariable for Ball X Position
let ballPositionX = 0;


function setup() {
	createCanvas(400, 400);

	stroke(255, 0, 0); // Set Color Red
	strokeWeight(12); // Set Point Radius

	describe('If point goes offscreen, set it back to the other side.');
}

function draw() {
	background(0); // Clear the Screen for next Draw

    point(ballPositionX, 200); // Draw Point

    ballPositionX += BALL_SPEED; // Update Position

    if(ballPositionX > 412){ // If it goes offscreen...
        ballPositionX = -12; // Set it back to the other side
    }
}

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */