
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,side1,side2;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
    

	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,450,40);
	ground = new Ground(800,670,1600,20);
	side1 = new Dustbin(1200,610,20,100);
	side2 = new Dustbin(1400,610,20,100);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  drawSprites();
 
}
function keyPressed(){
       if(keyCode===32){
		   	Body.applyForce(paper.body,paper.body.position,{x:0.1,y:-0.1});
	   }

}



