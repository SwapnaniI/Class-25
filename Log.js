class Log extends Base{
constructor(x,y,w,angle){
    var options={
        'restitution': 0.6,
        'friction': 1
    }
this.body=Bodies.rectangle(x,y,w,20,options)
this.width=w;
this.height=20;
Matter.Body.setAngle(this.body,angle);
World.add(myWorld,this.body)
}
display(){
rectMode(CENTER)
var pos=this.body.position;
var angle=this.body.angle;
push()
fill("white")
translate(pos.x,pos.y);
rotate(angle);
strokeWeight(4)
stroke("green")
rect(0,0,this.width,this.height);
pop()
}

}