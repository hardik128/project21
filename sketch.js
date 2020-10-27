var bullet,wall,weight,speed,damage,thickness;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 5);
  thickness=random(22,83);
  wall=createSprite(1500,200, thickness ,200);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
       
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage = 0.5 * weight * speed * speed/thickness/thickness/thickness;
     if (damage>10){
      wall.shapeColor=color(255,0,0)
     }
     
    if (damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }

  drawSprites();
}

function hasCollided(obj1,obj2){

bulletRightEdge=obj1.x + obj1.width;
wallLeftEdge=obj2.x;

  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
 return false;
}




