
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(400,10,800,20);
	bobObject1 = new Bob(200,400,10,10);
	bobObject2 = new Bob(250,400,10,10);
    bobObject3 = new Bob(300,400,10,10);
	bobObject4 = new Bob(350,400,10,10);
	bobObject5 = new Bob(400,400,10,10);

	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
	rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
	rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
	rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObject.display();
  rope1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}



