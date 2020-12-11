var bullet,wall,weight,speed,deformation,thickness;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 5);
  thickness=random(22,83);
  wall=createSprite(1500,200, thickness ,200);
  wall.shapeColor=color(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
       
  if (bullet.collide(wall)){
    bullet.velocityX=0;
    deformation = 0.5 * weight * speed * speed/thickness*thickness*thickness;
     if (deformation>10){
      wall.shapeColor=color(255,0,0)
     }
     
    if (deformation<10){
      wall.shapeColor=color(0,255,0)
    }
  }

  drawSprites();
}