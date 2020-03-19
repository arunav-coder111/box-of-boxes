const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var boxes = [];
var gSlider;
 
 
function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world; 
    
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    var ground_static = 
    isStatic = true

   var options = {
 restitution=1
    }
 
    ground = Bodies.rectangle(200,390,200,20,ground_static);

}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes = Bodies.rectangle(mouseX,mouseY,20,50);
    }
}
 
function draw() {
    background(0);

    Engine.update(engine);
    rect(ground.position.x,ground.position.y,400,20);
    rect(mouseX,mouseY,20,50,option);

    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
//function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
  
  

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
   // this.show = function () {
    
   // }
//}