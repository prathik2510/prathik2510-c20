var fixedrect,movingrect;
var obj1,obj2;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,200,40,30);

  obj2 = createSprite(500, 100, 50, 50);
  obj1 = createSprite(100,100,40,30);
  
  obj1.velocityX = 4;
  obj2.velocityX = -4;

  fixedrect.debug = true;
  movingrect.debug = true;
}

function draw() {
  background(0);  

  movingrect.y = mouseY;
  movingrect.x = mouseX;

  bounceOff();
  isTouching();
  drawSprites();
}

function isTouching(){

  if(movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 
    && fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2  
    && movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2 
    && fixedrect.y - movingrect.y <= movingrect.height/2 + fixedrect.height/2){
    
    //change the color 
    movingrect.shapeColor  = "red";
    fixedrect.shapeColor  = "red";
  }

  else{
    movingrect.shapeColor  = "blue";
    fixedrect.shapeColor  = "blue";
  }

}

function bounceOff(){
  if(obj2.x - obj1.x < obj2.width/2 + obj1.width/2 
    && obj1.x - obj2.x < obj2.width/2 + obj1.width/2 )
    {obj2.velocityX = obj2.velocityX * (-1)
     obj1.velocityX = obj1.velocityX * (-1)

    } 


}                                                                                 