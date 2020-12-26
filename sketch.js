

  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

  var myEngine,myWorld, ground, obj1,obj2,pig,log,obj4,obj5,pig2,log2;
  var box,log4,log3,bird;
  

  function setup() {
    var canvas = createCanvas(1200,600);
    //createSprite(200, 200, 50, 50);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    
    obj1 = new Box(762,545,70,70);
    obj2 = new Box(903,545,70,70);
    pig  =new Pig(835,545,);
    log = new Log(833.5,520,213.5,PI)
    obj4 = new Box(762,455,70,70);
    obj5 = new Box(903,455,70,70);
    pig2  =new Pig(835,455,);
    log2 = new Log(835,450,213,PI)
    box = new Box(835,385,70,70);
    log3 = new Log(903,350,120,PI/4)
    log4 = new Log(772,350,120,-PI/4)
    bird = new Bird(200,200)
    ground = new Ground(600,590,1200,20);
     
  }


 


  function draw() {   
    Engine.update(myEngine);
    background(0);

    console.log(pig2.body.position.y);
    obj2.display();
    obj1.display();
    obj4.display();
    obj5.display();
    pig2.display();
    pig.display();
    log.display();
    log2.display();
    box.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
  }



