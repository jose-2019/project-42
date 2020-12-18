class Umbrella { 
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 25;
         this.body = Matter.Bodies.circle(200,250,radius, options);
         this.image = loadImage("walking_1.png")
         World.add(world, this.body);
    }

    display(){
         var umbpos = this.body.position;
         image(this.image,umbpos.x-90,umbpos.y-20,166,160);
    }
    
}