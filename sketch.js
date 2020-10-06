var wall,thickness;
var bullet,speed,weight;
 var lwall, lbullet;

function setup(){

  createCanvas(1600,400);
    speed=random(223,321);
    thickness=random(22,83);
    weight=random(30,52);
    
    bullet = createSprite(50,200,50,30);
    wall = createSprite(1200,200,thickness,height/2);;
    

    bullet.velocityX = speed;

    wall.shapeColor=color(80,80,80);
    bullet.shapeColor=color("white");

    function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}
  
  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage>10)

    {
      wall.shapeColor=color(255,0,0);
    }



    if (damage<10)

    {
      wall.shapeColor=color(0,255,0);
    }

  }
}


function draw(){
  background(0);
  drawSprites();
}
