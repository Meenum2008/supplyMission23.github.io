
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var REB,reb1,reb2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas=createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
   REB=new redbox(width/2, 650, 200, 20 );
   reb1=new redbox(500,610,20,100);
   reb2=new redbox(300,610,20,100)
	rectMode(CENTER);
	
    if(keyPressed){
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2
	
	}
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	
 
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
 

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 
  
}


function draw() {
	background(0);
	Engine.update(engine);
	   
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
  REB.display();
  reb1.display();
  reb2.display();
}

function keyPressed() {
 if (keyDown("DOWN_ARROW")) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody, false);
	
	 
  }
}



