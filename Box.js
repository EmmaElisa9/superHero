class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
  score(){
    if(gameState === "inicio" && this.body.speed > 5 && this.body.position.x > 1000 || this.body.position.x < 0 && this.body.position.y < 900){
      score1++;
    }
  }
  
}