var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(800,400);
  wall=createSprite(650, 200, thickness, height/2);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,50)
  car=createSprite(50,200,50,50)
  car.velocityX = speed;
  
}

function draw() {
  background("black");  
 wall.shapeColor=color("brown")
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0
  var deformation=0.5 * weight * speed * speed/22500;
  if(deformation>180){
    car.shapeColor=color(255,0,0)
  }

  if(deformation<180 && deformation>180){
    car.shapeColor=color(230,230,0)
  }

  if(deformation<100){
    car.shapeColor=color(0,255,0)
  }

}

if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var Damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

  if (Damage>10){
    wall.shapeColor=color(255,0,0);
  }

if (damaga<10){
  wall.shapeColor=color(0,255,0);
}

}
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}