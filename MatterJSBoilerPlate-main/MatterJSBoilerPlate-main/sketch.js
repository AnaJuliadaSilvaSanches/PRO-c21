
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.2,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(100,10,15,ball_options);
	ellipseMode(CENTER);
	World.add(world,ball);

	ground = new Ground(450,490,1000,10);
	leftSide = new Ground(550,430,10,110);
	rightSide = new Ground(800,430,10,110);

	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,30);
  ground.display();
  leftSide.display();
  rightSide.display();

  keyPressed();

  rectMode(CENTER);
  drawSprites();
}

function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:-1});
	}
}

