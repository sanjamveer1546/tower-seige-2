const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var block1,block2 ,block3, block4,block5,block6,block7,block8,block9,block10;
var platform1,platform2;
var ball,polygon;
function preload(){
polygon=loadImage("polygon.png");

}
function setup() {
	createCanvas(700, 500);
    engine = Engine.create();
	world = engine.world;

    platform1 = new Platform(500,300,200,10);

    block1 = new Block(450,280,30,40);
    block2 = new Block(485,280,30,40);
    block3 = new Block(520,280,30,40);
    block4 = new Block(555,280,30,40);

    block5 = new Block(465,240,30,40);
    block6 = new Block(500,240,35,40);
    block7 = new Block(535,240,30,40);

    block8 = new Block(480,200,35,40);
    block9 = new Block(515,200,30,40);

    block10 = new Block(495,160,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
  
    slingShot1 = new SlingShot(this.ball,{x:100,y:200});
  
}

function draw() {
    rectMode(CENTER);
    background(0);
    engine =Engine.update(engine);
platform1.display();
fill("pink");
block1.display();
block2.display();
block3.display();
block4.display();
fill("green");
block5.display();
block6.display();
block7.display();
fill("cyan");
block8.display();
block9.display();
fill("yellow");
block10.display();

slingShot1.display();

imageMode(CENTER)
image(polygon,ball.position.x,ball.position.y,40,40);
    drawSprites(); 
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot1.fly();
  }
  
function keyPressed(){
    if(keyCode === 32){
        slingShot1.attach(ball.body);
        
    }
}
