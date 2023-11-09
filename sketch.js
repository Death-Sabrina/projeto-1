function setup() {
     createCanvas(800, 800);
     background("red");
  }
  
  function draw() {
   
      fill("crimson")
      stroke("black")
      if(mouseIsPressed){
      rect(mouseX,mouseY,20,20);
  }
  }
