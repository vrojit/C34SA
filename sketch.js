const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  //Load Background , sound
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");

}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  

}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  
 /*var collision = Matter.SAT.collides(boggie6.body,rock1.body);
  if(collision.collided)
  {
    flag=1;
    
    
  }
  if(flag ===1){
    textSize(30);
    stroke(3);
    fill('blue');
    text("CRASH",500,200);
    crashSound.play();
  }*/
  
  }
/*
function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y},
        {x:0.5,y:0});
        trainSound.play();
    }


  }
*/
 


  