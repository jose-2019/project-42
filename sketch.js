const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var currentFrame;
var thunder1,thunder2,thunder3,thunder4;
var person; 
var drops =[]
var dropSprite;
var thunderSprite;
function preload(){
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png")
}

function setup(){
   createCanvas(400,400);   
   engine = Engine.create();
   world  = engine.world;

   person = new Umbrella();

   if(frameCount%120 === 0){
       for(var i=0;i<80;i++)
            drops.push(new Drop(random(0,400),random(0,400),3,10));
   }
}

function draw(){
    background(0)
    Engine.update(engine);
    person.display();
    var x=Math.round(random(1,4));
    if(frameCount%120==0)
    {
         thunderSprite = createSprite(random(10,380),30,15,15);
        currentFrame=frameCount;
        switch(x)
        {
            case 1: thunderSprite.addImage(thunder1);
                    thunderSprite.visible =1;
                    break;
            case 2: thunderSprite.addImage(thunder2);
                    thunderSprite.visible =1;
                    break;
            case 3: thunderSprite.addImage(thunder3);
                    thunderSprite.visible =1;
                    break;
            case 4: thunderSprite.addImage(thunder4);
                     thunderSprite.visible =1;
                    break;
          
        }  
    }
    if(frameCount===currentFrame+15 )
    {
        thunderSprite.visible = 0;
    }
    for(var i=0;i<80;i++)
    {
        drops[i].display();
        drops[i].update();
    }
    drawSprites();
}   

