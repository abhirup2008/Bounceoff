var fixed, object;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 100, 50, 80);
  fixed.shapeColor = "green";
  fixed.debug = true;
  object = createSprite(400, 800,80,30);
  object.shapeColor = "green";
  object.debug = true;

  object.velocityY = -5;
 fixed.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceoff(fixed,object);
  drawSprites();
}
