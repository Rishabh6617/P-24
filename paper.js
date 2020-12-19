class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x,pos.y,this.r,this.r);
    }
  };