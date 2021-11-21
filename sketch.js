const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5, box6, box7,box8,box9, box10, box11,box12,box13, box14, box15,box16;
var box1N2, box2N2, box3N2,box4N2,box5N2, box6N2, box7N2,box8N2,box9N2, box10N2, box11N2,box12N2,box13N2, box14N2, box15N2,box16N2;
var hero,monster,rope,ground,bg;
var score, bg2;
var gameState;

function preload() {
  bg = loadImage("gamingbackground2.png");
  bg2 = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 590, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });

  gameState = "inicio";

  
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 600, 70, 70);
  box2 = new Box(900, 600, 70, 70);
  box3 = new Box(900, 500, 70, 70);
  box4 = new Box(900, 400, 70, 70);
  box5 = new Box(600, 500, 70, 70);
  box6 = new Box(900, 300, 70, 70);
  box7 = new Box(900, 200, 70, 70);
  box8 = new Box(900, 100, 70, 70);
  box9 = new Box(600, 400, 70, 70);
  box10 = new Box(750, 600, 70, 70);
  box11 = new Box(750, 500, 70, 70);
  box12 = new Box(750, 400, 70, 70);
  box13 = new Box(750, 300, 70, 70);
  box14 = new Box(750, 200, 70, 70);
  box15 = new Box(600, 300, 70, 70);
  box16 = new Box(600, 200, 70, 70);

  score1 = 0;

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  hero.display();
  rope.display();


    textSize(30);
    text("puntuación: "+score1,1000,50);


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();


    monster.display();  


    if(score1 >= 1300){
      gameState = "ganaste";
      fill("blue");
      text("¡felicitaciones haz ganado!",500,200);
    }

}


function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
