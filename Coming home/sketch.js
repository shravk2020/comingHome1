var ben, idleBen, runningBen, jumpingBen, deadBen;
var ground, groundImage, invisibleGround;
var edges;
var gameState = 0;
var score = 0;


function preload(){
  idleBen = loadAnimation("GP/Idle.png");
  runningBen = loadAnimation("GP/Run1.png", "GP/Run2.png", "GP/Run3.png", "GP/Run4.png", "GP/Run5.png", "GP/Run6.png", "GP/Run7.png", "GP/Run8.png", "GP/Run9.png", "GP/Run10.png");
  jumpingBen = loadAnimation("GP/Jump1.png", "GP/Jump2.png", "GP/Jump3.png", "GP/Jump4.png", "GP/Jump5.png", "GP/Jump6.png", "GP/Jump7.png", "GP/Jump8.png", "GP/Jump9.png", "GP/Jump10.png");
  deadBen = loadAnimation("GP/Dead1.png", "GP/Dead2.png", "GP/Dead3.png", "GP/Dead4.png", "GP/Dead5.png", "GP/Dead6.png", "GP/Dead7.png", "GP/Dead8.png");
  groundImage = loadImage("GP/background.png");
}


function setup() {
  createCanvas(1000, 500);

  invisibleGround = createSprite(500, 500, 1000, 10);

  edges = createEdgeSprites();

  ground = createSprite(750, 250,1500,500);
  ground.addImage(groundImage);
  ground.scale = 3.5;
  ground.x = ground.width /2;

  ground.velocityX = -5;

  ben = createSprite(70, 415, 20, 21);
  ben.addAnimation("idle", idleBen);
  ben.addAnimation("run", runningBen);
  ben.addAnimation("jump", jumpingBen);
  ben.addAnimation("dead", deadBen);
  ben.scale = 0.2;
  


}

function draw() {
  background(180);

  if(gameState == 1){
    if(keyDown("space") && ben.y >= 159) {
      ben.velocityY = -12;
    }

    ben.velocityY = ben.velocityY + 0.8;

    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    ben.collide(invisibleGround);
    ben.changeAnimation("run", runningBen);
  }
  

  if(gameState == 0 && keyDown('enter')){
    gameState = 1;
  }

  drawSprites();

  textSize(30);
  fill('white');
  text("Score: " + score, 10, 35);
}







