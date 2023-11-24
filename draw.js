let point = new p5.Vector (0,0);

function draw() {
  stroke(0);;
  strokeWeight(8);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
