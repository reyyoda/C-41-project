

class createDrops{

    constructor(x,y,width,height){
        var options = {
          //  restitution = 0.1,
            friction: 0.001
        };
        this.body = Bodies.circle(x,y,5);
        this.radius = 5;
        World.add(world,this.body);
    }

        update(){
            if(this.body.position.y<400){
                Matter.Body.setPosition, (this.body, {x: random(0,500), 
                y: random(0,650)
              });
            }
        }
        display(){
            noStroke();
            fill("blue");
            ellipseMode(RADIUS);
            ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
          }
}
