
var monkey , monkey_running
var banana1 ,bananaImage, obstacle1, obstaclesImage
var foodGroup, obstacleGroup
var score,survivalTime=0

function preload(){
  
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function obstacles(){
  if(frameCount%80===0){
  obstacle1=createSprite(300,150,20,20)
  obstacle1.addImage(obstaclesImage)
  obstacle1.velocityX=-5
  obstacle1.lifetime=130
  }  
}

function banana(){
  if(frameCount%80===0){
  banana1=createSprite(600,150,20,20)
  banana1.addImage(bananaImage)
  banana1.velocityX=-5
  banana1.lifetime=130
  banana1.scale=0.1
  banana1.y=Math.round(random(100,200))
  }
}


function setup() {
  createCanvas(600,300)
  
  monkey=createSprite(80,250,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground= createSprite(300,270,600,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)

  
  textSize(20)
  fill("white")
  text("score:"+score,150,50)

 stroke("black") 
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
}


function draw() {
background("white")
monkey.collide(ground)
if(keyDown("space")&& monkey.y >= 160) {
 monkey.velocityY = -6;
}
  monkey.velocityY=monkey.velocityY+0.5
  if(ground.x<0){
ground.x=ground.width/2
}
  banana()
  
  obstacles()
  
  drawSprites()
  
}






