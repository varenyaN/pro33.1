class Web {
 
    constructor(x,y) {
    
      this.body = Bodies.rectangle(x,y,200,200);
      this.image = loadImage("snow4.webp");
      this.x=x;
      this.y=y;
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // rectMode(CENTER);
      image(this.image, pos.x, pos.y , this.width, this.height);
      
    }
  }
