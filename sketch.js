var wall , thickness;
var bullet , speed , weight ;
  


function setup() {
  createCanvas(1400,600);
  speed = random( 223 , 321 );
  weight = random(  30 , 50 );
   bullet = createSprite(400, 100, 10, 20);
  bullet.velocityX = 20;
   bullet.shapeColor = "white";

   thickness=random(22 , 83);
   wall = createSprite(1200 , 200 , thickness , height/2 );
}
   function draw (){
    background(80 , 80 , 80);
    if(hasCollided(bullet , wall)){ 
      bullet.velocityX = 0; var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    }
    if(damage>10){ 
      wall.shapeColor = color(255 , 0 , 0); 
    } 
      if(damage<10){
        wall.shapeColor = color( 8 , 255 , 0); 
    } 
     drawSprites(); 
   }
      function hasCollided( Xbullet , Xwall){ 
      bulletRightEdge = Xbullet.x + Xbullet.width; wallLeftEdge = wall.x; 
      if(bulletRightEdge>= wallLeftEdge){ return true; } return false;
   }

