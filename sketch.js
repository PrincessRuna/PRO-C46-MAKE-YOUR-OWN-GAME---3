
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var diver , bg 
var diverimg , bgImg
function preload()
{
	diverimg = loadImage("assets/diver.png")
	bgImg = loadImage("assets/underwaterbg.webp")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg = createSprite(windowWidth/2-20,windowHeight/2-40,20,20)
	bg.addImage(bgImg)
	bg.scale = 1.1
	  
	diver = createSprite(windowWidth-1150, windowHeight-300, 50, 50);
	diver.addImage(diverimg)
	  diver.scale = 0.3

	Engine.run(engine);
  
}


function draw() {
  background(0);
  if(keyDown("UP_ARROW")){
	diver.y = diver.y-30
  }
  
  if(keyDown("DOWN_ARROW")){
   diver.y = diver.y+30
  }
  
  if(keyDown("LEFT_ARROW")){
	diver.x = diver.x-30
  }
  
  if(keyDown("RIGHT_ARROW")){
   diver.x = diver.x+30
  }

  bg.velocityX=-4+80/43
if (bg.x < 600){
 bg.x = bg.width/2
 }

  drawSprites();
 
}


