var drop1;
var engine, world;
function preload(){
    
}

function setup(){
    //creating canvas
   createCanvas(500,1200);
   engine = Engine.create();
   world = engine.world;

   drop1= new Drops(350,1000,pi/2);
   boy = new Umbrella(400,1200);
  
}

function draw(){
    background(0);
    drop1.display();
    drawSprites();
}   

