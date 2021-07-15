var garden,rabbit, apple;
var gardenImg,rabbitImg, appleIMG;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
createApples();
  drawSprites();
}
function createApples(){
  apple = createSprite (randomNumber(1-400), 0, 30, 30)
  apple.addImage (appleIMG)
  apple.scale= 0.1
  apple.velocityY=1
}