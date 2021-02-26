var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime,score=0;
var jungle,jungleImg;
var ground,groundImg;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImg=loadImage("backgroundjungle.png");
  
}



function setup() {
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  

  jungle=createSprite(400,500,900,10);
  jungle.addImage("jungle",jungleImg)
  jungle.velocityX=-4;
  jungle.x=jungle.width/2;
  
  monkey=createSprite(80,100,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(400,650,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  score=0;
  survivalTime=0;
 
       
}


function draw() {
  createCanvas(700,700)
  background("white");
 
   if (keyDown ("space")&&monkey.y>=200){
   monkey.velocityY=-12
   }
  
     monkey.velocityY=monkey.velocityY+0.8
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(jungle.x<100){
    jungle.x=jungle.width/2;
  }
   monkey.collide(ground)
   
     
    food(); 
    rock();
     
     if(FoodGroup.isTouching(monkey)){
     FoodGroup.destroyEach();
       survivalTime=survivalTime+2;
       
     }
    
   
 
  drawSprites();

  score.visible=true;
  stroke("White");
  textSize(20);
  fill("White");
  text("score:"+score,500,50);
  stroke("black");
  textSize(20); 
  fill("black"); 
  text("survivalTime:"+survivalTime,100,50);        survivalTime=Math.ceil(frameCount/frameRate());
}
function food(){
  if(World.frameCount%75==0){
    banana=createSprite(300,100,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(300,400));
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=150;
    FoodGroup.add(banana);
    
  }
}
function rock(){
  if(World.frameCount%100==0){
    obstacle=createSprite(400,630,20,20);
    obstacle.scale=0.1;
    obstacle.velocityX=-5;
    obstacle.lifetime=150;
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle)
  }
}





