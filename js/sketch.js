var pacman , ghost1 , ghost2, ghost3 , ghost4 ;
var pacmanImg,ghost1Img , ghost2Img, ghost3Img , ghost4Img;

function preload(){
pacmanImg= loadAnimation("Images/pacman1.png","Images/")

}
function setup(){
    var wall1 = createSprite(50,50,20,100);
    wall1.shapeColor='orange';
    
    var wall2 = createSprite(115,110,150,20);
    wall2.shapeColor='red';
    
    var wall3 = createSprite(200,95,20,50);
    wall3.shapeColor='orange';
    
    var wall4 = createSprite(105,160,210,20);
    wall4.shapeColor='red';
    
    var wall5 = createSprite(215, 200,20,100);
    wall5.shapeColor='orange';
    
    var wall6=createSprite(205,250,100,20);
    wall6.shapeColor='red';
    
    var wall7=createSprite(160,60,100,20);
    wall7.shapeColor='red';
    
    var wall8=createSprite(265,278,20,75);
    wall8.shapeColor='orange';
    
    var wall9=createSprite(175,300,100,20);
    wall9.shapeColor='red';
    
    var wall10=createSprite(350,210,100,20);
    wall10.shapeColor='red';
    
    var wall11=createSprite(310,280,20,120);
    wall11.shapeColor='orange';
    
    var wall12=createSprite(195,350,250,20);
    wall12.shapeColor='red';
    
    var wall13=createSprite(80,278,20,125);
    wall13.shapeColor='orange';
    
    var wall14=createSprite(50,265,40,20);
    wall14.shapeColor='red';
    
    var wall15=createSprite(120,205,100,20);
    wall15.shapeColor='red';
    
    var wall16=createSprite(325,20,20,40);
    wall16.shapeColor='red';
    
    var wall17=createSprite(290,50,90,20);
    wall17.shapeColor='orange';
    
    var wall18=createSprite(255,85,20,50);
    wall18.shapeColor='red';
    
    var wall19=createSprite(302,100,75,20);
    wall19.shapeColor='orange';
    
    var wall20=createSprite(350,115,20,50);
    wall20.shapeColor='red';
    
    var wall21=createSprite(310,150,100,20);
    wall21.shapeColor='orange';
    
    var wall22=createSprite(270,185,20,50);
    wall22.shapeColor='red';
     function draw(){
      
    background(white)
    
    
    drawSprites();
    }




}