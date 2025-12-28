function setup() {
	describe('Display X and Y position of Mouse onscreen.');
	createCanvas(400, 400);
	textSize(18);
}
// Begin Game Loop
function draw() {
    background(255);    // Clear the Screen White
    
    // draw the background grid
	stroke(128, 255, 255);	// Set grid color
	for (var i= 0; i < 400 ; i = i + 10) {
		line(i, 0, i, 400);
		line(0, i, 400, i);
	}
    
    fill(0, 0, 0); // Set the Text color to Black
    text("Mouse Position X = " + mouseX, 15, 30); 
    text("Mouse Position Y = " + mouseY, 15, 60); 
    
    stroke(0); // color black
    // Create a Cursor icon
    point(mouseX, mouseY);	// Draw a Point at Mouse Position(X, Y)
    // Draw 4 Lines around Mouse Position
    line(mouseX, mouseY - 14, mouseX, mouseY - 7); 
    line(mouseX, mouseY + 7, mouseX, mouseY + 14); 
    line(mouseX - 14, mouseY, mouseX - 7, mouseY );     
    line(mouseX + 7, mouseY, mouseX + 14, mouseY ); 

}; // End Game Loop

/* Tutorials in plain English by Dillinger © 2025 
All code is owned by its respective author 
and made available under an MIT license:
http://opensource.org/licenses/mit-license.php */
