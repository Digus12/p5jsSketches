function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	translate  (width/ 2, height/2 );

	var circleResolution = map (mouseY,0, height ,1,280);
	var rectResolution = map (mouseY,0, height ,1,30);

	var radius= mouseX - width /12 + 24.5;
	var angle = TWO_PI/ circleResolution*rectResolution;

	strokeWeight(mouseY/100);

	beginShape();
	for (var i = 0; i<= circleResolution; i++) {
		var x = cos(angle * i)* radius;
		var y = sin(angle * i)* radius;
	 line(3,3,x,y);
		//vertrex(x,y)
	}
	endShape(CLOSE);
}
