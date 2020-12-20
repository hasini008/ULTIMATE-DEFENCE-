var wall , thickness;
var bullet , speed , weight ;
  
}

function setup() {
  createCanvas(1600,400);
  speed = random( 223 , 321 );
  weight = random(  30 , 50 );
   bullet = createSprite(400, 200, 10, 20);
   bullet.shapeColor("white");

   thickness=random(22 , 83);
   wall = createSprite(1200 , 200 , thickness , height/2 );
    
   function draw (){
    background(80 , 80 , 80);
    






    drawSprites();
   }