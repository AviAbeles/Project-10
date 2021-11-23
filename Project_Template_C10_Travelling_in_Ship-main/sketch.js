var sea, ship, seaimg, shipimg;
function preload(){
seaimg = loadImage("sea.png");
shipimg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  background("blue")
  sea = createSprite(400, 200);
  sea.addImage(seaimg);
  sea.velocityX = -4;
  sea.scale = 0.3;

  ship=createSprite(130, 200, 30, 30);
  ship.addAnimation("movingship", shipimg);
  ship.scale = 0.25
}

function draw() {
  background("white");
  if(sea.x < 0) {
    sea.x = sea.width/8;
  }
 drawSprites ();
}