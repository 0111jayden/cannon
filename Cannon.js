class Cannon {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':2,
          'density':5.0
          
      }
      this.body = Bodies.rectangle(x, y, 100, 60, options);
      this.width = 100;
      this.height = 60;
      
      World.add(world, this.body);
    }
    display(){
     // var pos =this.body.position;
     // var angle = this.body.angle;
      push();
     // translate(pos.x,pos.y);
     // rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("purple");
      fill(150, 150, 150);
      rect(x,y, this.width, this.height);
      pop();
    }
  };
  