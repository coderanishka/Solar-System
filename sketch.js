var sun,mercury,venus,mars;
var sun_img, mercury_img, venus_img, mars_img;
var angleSpeed = 0.2;
var angle = 0;
var sun_radius;

function preload(){
sun_img = loadImage("sun.jpg");
mercury_img = loadImage("planet1.png");
venus_img = loadImage("planet2.png");
mars_imag = loadImage("planet3.png");


}



function setup() {
  createCanvas(800,800);

  

  sun = createSprite(400,400,50,50);
 // sun.addImage(sun_img);
 // sun.setCollider("circle",-85,-65,120);
 // sun.debug=true;

  mercury = createSprite(170,120,10,10);
 // mercury.addImage(mercury_img);
 // mercury.setCollider("circle",0,0,200);
//  mercury.debug=true;


  venus = createSprite(120,50,15,15);
//  venus.addImage(venus_img);
 // venus.setCollider("circle",0,0,30);
 // venus.debug=true;

  mars = createSprite(200,200,20,20);
 // mars.addImage(mars_img);
 // mars.setCollider("circle",0,0,30);
//  mars.debug=true;

mercury.rotateToDirection=true;
mercury.velocityX = 3;
}

function draw() {
  
 background(5,5,20); 
 mercury.rotation = mercury.rotation + 6

/* angleMode(DEGREES);
 translate(width/2,height/2);
 rotate(angle);
 angle = angle+angleSpeed;
 */
 if(frameCount%1===0){
   sun.scale=sun.scale+0.001;
 }
 drawSprites();

}

