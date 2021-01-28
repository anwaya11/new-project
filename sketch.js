var canvas;
var music;
var box1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

  box1 = createSprite(100,586,195,23);
  box1.shapeColor="yellow";

  box2 = createSprite(300,586,195,23);
  box2.shapeColor="red";

  box3 = createSprite(500,586,195,23);
  box3.shapeColor="skyBlue";

  box4 = createSprite(700,586,195,23);
  box4.shapeColor="pink";

    //create box sprite and give velocity

    square = createSprite(200,50,20,20);
    square.x=Math.round(random(101,500));
}

function draw() {
    background ("lightgreen");
    //create edgeSprite

    square.velocityX=0;
    square.velocityY=4;

    createEdgeSprites();

    if(box1.isTouching(square) && square.bounceOff(box1)){

     square.shapeColor="yellow";

    }
    if(box2.isTouching(square) && square.bounceOff(box2)){

    square.shapeColor="red";

    }    
    if(box3.isTouching(square) && square.bounceOff(box3)){

    square.shapeColor="skyBlue";
    square.velocityX=0;
    square.velocityY=0;

    }
    if(box4.isTouching(square) && square.bounceOff(box4)){

    square.shapeColor="pink";

    }

    
drawSprites();
    //add condition to check if box touching surface and make it box
}
