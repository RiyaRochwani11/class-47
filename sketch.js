const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
  createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
ground = new Ground (windowWidth/2,windowHeight-10,windowWidth,50);
ball= new Ball (windowWidth/2+300,windowHeight-70,70);

slingShot = new SlingShot(ball.body,{x:windowWidth/2+300,y:windowHeight-200})
basket1= new Basket (windowWidth/2-375,windowHeight/2-200,150,5)
basket2 = new Basket (windowWidth/2-450,windowHeight/2,5,550)
basket3 = new Basket (windowWidth/2-300,windowHeight/2-130,5,150)
basket4 = new Basket(windowWidth/2-375,windowHeight/2-60,150,5)
  
}

function draw() {
  background("blue");  
  drawSprites();
  ground.display();
  ball.display();
  slingShot.display();
  basket1.display();
  basket2.display();
  basket3.display();
  basket4.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}