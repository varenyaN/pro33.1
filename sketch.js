const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var  bg;
var web1,web2,web3;
function preload() {
  bg = loadImage("snow3.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  web1= new Web(200,100);
  web2= new Web(400,100);
  web3= new Web(500,200);
 


}

function draw() {
  background(bg); 
  Engine.update(engine);
  web1.display();
  web2.display();
  web3.display();
  
  drawSprites();
}