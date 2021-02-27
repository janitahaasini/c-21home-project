var bullet, wall,thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);


  bullet= createSprite(50, 200, 50, 50);
  wall = createSprite (1200, 200, thickness, height/2);
  

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet.velocityX = speed;
  
  
}

function draw() {

  background("black");  

  if (wall.x-bullet.x < (bullet.width/2+wall.width/2) 
  {
    bullet.velocityX=0;

  var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180) {
  bullet.shapeColor = "white";
  }
  if (deformation<180 && deformation>100) {
  bullet.shapeColor = "white";
  }
  if (deformation<100) {
  bullet.shapeColor = "white";
  }
  }

if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10)
  {
    wall.shapeColor="red";
  }
  if (damage<10)
  {
    wall.shapeColor="green";
  }

}



  drawSprites();
}

function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  if(bulletRightEdge>=bulletLeftEdge){
    return true;
  }
    return false;

}