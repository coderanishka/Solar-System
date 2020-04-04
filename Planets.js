
class Planets {
 constructor(x,y,radius,width,height){
  var options ={
   isStatic: true
  }
  
  World.add(world, this.body);
 }

 display(){
 var pos = this.body.position;
 ellipesMode(RADIUS)
 strokeWeight(4);
 stroke(225);
 fill(255);
 circle(0, 0, this.width, this.height);
 pop();

 }

};