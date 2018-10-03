var x= 500;
var y= 500;
function setup() {
createCanvas(2000,1000);
}


function draw(){
  background(0);
  fill(255);
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW){
        x = x - 5;
    } else if(keyCode == RIGHT_ARROW){
      x = x + 5;
    } else if(keyCode == UP_ARROW){
       y = y - 5;
    } else if(keyCode == DOWN_ARROW){
      y = y + 5;
    } else if(key == 'd'){
      line(x+10,y,width,y);
      stroke(255,255,0);
    }
  }
  rect(x,y,100,100);
}
//js stands for java script , set ups draw once while draw puts up 60 frames per second
