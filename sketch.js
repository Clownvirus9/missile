
var Missile,Missileimage;
var impact;

var Speed;
var Weight;

function setup() {
  createCanvas(800,400);

  Speed = random(55,90);
  Weight = random(400,1500);


  Missile = new Ellipse(200, 200, 90, 50);
  Missile.vx = Speed;
  Missile.shapeColor = "white";
  
  impact = createSprite(650,200, 60, 400);
  impact.shapeColor = "White";
  
}

function draw() {
  background("Orange");
  
  if(impact.x - Missile.x < (Missile.width+impact.width)/2){

    Missile.vx = 0;
    
    var Deformation = 0.5 * Weight * Speed* Speed/22509;
    if(Deformation>180)
    {
        Missile.shapeColor=color("Green");
    }
    
    if(Deformation<180 && Deformation>100){
        Missile.shapeColor=color("Yellow");
    }

    if(Deformation<100){
        Missile.shapeColor=color("Red");
    }
  }
  
  Missile.display();
  

  drawSprites();
}

class Ellipse{
  constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;

      this.shapeColor = "grey";
      this.vx = 0;
      this.vy = 0;

  }

  display(){

      fill(this.shapeColor);
      this.x = this.x+this.vx;
      this.y = this.y+this.vy;
  

      ellipse(this.x,this.y,this.width,this.height);

  }
}