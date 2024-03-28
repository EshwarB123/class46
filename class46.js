let ground;
let lander;
var lander_img;
var bg_img;
var spike1,spike2,spike3
var landingpad
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");
  spikes_image = loadImage("spikes.png")
  landingpad_image = loadImage("landingpad.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.5;

  spike1 = createSprite(100,650,30,30)
  spike1.addImage(spikes_image)
  spike1.scale = 1.2
  spike2 = createSprite(400,650,30,30)
  spike2.addImage(spikes_image)
  spike2.scale = 1.2
  spike3 = createSprite(870,650,30,30)
  spike3.addImage(spikes_image)
  spike3.scale = 1.2

  landingpad = createSprite(630,620,40,40) 
  landingpad.addImage(landingpad_image)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  fly();
  drawSprites();
  win();
}

function fly(){
  if(keyDown("up")){
    lander.position.y-=20
  }

  if(keyDown("down")){
    lander.position.y+=10
  }

  if(keyDown("left")){
    lander.position.x-=10
  }

  if(keyDown("right")){
    lander.position.x+=10
  }

}

function win(){
  if(lander.isTouching(landingpad)){
    clear()
    background(bg_img)
    fill("White")
    textSize(40);
    text("You Win",250, 200);

    gamestate(1)
  }
}