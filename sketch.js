var img;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  img = loadImage('images/earth.jpg');
}

function draw() {
  lights();
  noStroke();
  angleMode(DEGREES);
  //rotateX(millis()/20);
  rotateY(millis()/100);
  sphere(250);
  texture(img);
  translate(0,0);
  console.log("*");
}