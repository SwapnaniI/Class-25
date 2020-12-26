class Base {
    constructor(x,y,width,height,angle){
      
        var box_options={
        restitution:0.8
        }
  
        this.body=Bodies.rectangle(x,y,20,20,box_options);
        this.width = 20;
        this.height = 20;
        this.image=loadImage("sprites/base.png")
        World.add(myWorld,this.body);
      }
      display(){
        var pos=this.body.position
        var angle = this.body.angle;
        push();
        strokeWeight(5);
        stroke("green")
        fill("red");
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER); 
        image(this.image, 0, 0, this.width, this.height)      
        //rectMode(CENTER)      
        //rect(0,0,this.width,this.height)
        pop();
      }
}