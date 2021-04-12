var car1, car2, car3, car4, wall;
var speed1, speed2, speed3, speed4, weight;
var img1, img2, img3, img4, wImg;
var c1red, c1yellow, c1green;
var c2red, c2yellow, c2green;
var c3red, c3yellow, c3green;
var c4red, c4yellow, c4green;
var b1, b2, b3, b4
var deformation1, deformation2, deformation3, deformation4;
var aud1, aud2, aud3;

function preload(){
  
}

function setup() {
  createCanvas(1535, 750);
 
  speed1 = random(55, 90);
  speed2 = random(55, 90);
  speed3 = random(55, 90);
  speed4 = random(55, 90);
  weight = random(400, 1500);

 car1 = createSprite(140, 50, 30, 30);
  car1.velocityX = 0;
  car1.shapeColor = "green";
  
  car2 = createSprite(140, 155, 30, 30);
  car2.velocityX = 0;
  car2.shapeColor = "red";
 
  car3 = createSprite(140, 280, 30, 30);
  car3.velocityX = 0;
  car3.shapeColor = "purple";
  
  car4 = createSprite(140, 385, 30, 30);
  car4.velocityX = 0;
  car4.shapeColor = "orange";
 

  b1 = createSprite(20, 50, 100, 50);
  b1.shapeColor = "violet";
  b2 = createSprite(20, 150, 100, 50);
  b2.shapeColor = "pink";
  b3 = createSprite(20, 260, 100, 50);
  b3.shapeColor = rgb(255, 28, 28);
  b4 = createSprite(20, 385, 100, 50);
  b4.shapeColor = "cyan" ;
  wall = createSprite(1500, -40, 20, 975);
  
  wall.shapeColor = "brown";
  deformation1 = Math.round(0.5 * 2170 * Math.round(speed1) * Math.round(speed1) / 22500);
  deformation2 = Math.round(0.5 * 1550 * Math.round(speed2) * Math.round(speed2) / 22500);
  deformation3 = Math.round(0.5 * 1800 * Math.round(speed3) * Math.round(speed3) / 22500);
  deformation4 = Math.round(0.5 * 615 * Math.round(speed4) * Math.round(speed4) / 22500);
}

function draw() {
  background(0);
  drawSprites();

 fill(250);
 textSize(20);
 text("Test",2,60);
 text("Test",2,160); 
 text("Test",2,270); 
 text("Test",2,395);

  fill(255);
  textSize(20);
  text("Car Name", 100, 500);
  text("Weight (in Kg)", 500, 500);
  text("Speed", 925, 500);
  text("Deformation", 1250, 500);


//  fill(255);
  rect(0, 87, 1470, 5);
  rect(0, 198, 1470, 5);
  rect(0, 330, 1470, 5);
  rect(0, 450, 1600, 5);
  rect(0, 550, 1600, 5);
  rect(0, 600, 1600, 5);
  rect(0, 650, 1600, 5);
  rect(0, 700, 1600, 5)

  for (var x = 400; x < 1300; x = x + 400) {
    fill(255);
    rect(x, 450, 5, 500);
    rect(50, 450, 5, 500);
  }

  if (mousePressedOver(b1)) {
    car1.velocityX = speed1;
  }

  if (mousePressedOver(b2)) {
    car2.velocityX = speed2;
  }

  if (mousePressedOver(b3)) {
    car3.velocityX = speed3;
  }

  if (mousePressedOver(b4)) {
    car4.velocityX = speed4;
  }

  

  if(wall.x-car2.x < (car2.width+wall.width)/2)  {

    car2.velocityX = 0;

    text("Honda", 130, 637);
    text(1550, 530, 637);
    text(Math.round(speed2), 930, 637);
    text(deformation2, 1350, 637)

  }

  if(wall.x-car3.x < (car3.width+wall.width)/2) {

    car3.velocityX = 0;

    text("Seltoz", 130, 687);
    text("1800", 530, 687);
    text(Math.round(speed3), 930, 687);
    text(deformation3, 1350, 687)

  }

  if(wall.x-car4.x < (car4.width+wall.width)/2) {

    car4.velocityX = 0;

    text("Wolkswagen", 130, 737);
    text("615", 530, 737);
    text(Math.round(speed4), 930, 737);
    text(deformation4, 1350, 737);


  }
 if(wall.x-car1.x < (car1.width+wall.width)/2)
  {
    car1 .velocityX=0;
  
   
    text("Swift", 130, 587);
    text(2170, 530, 587);
    text(Math.round(speed1), 930, 587);
    text(deformation1, 1350, 587)
     
  }
}
function isTouching(object1,object2){
  if(object1.x-object2.x===object1.width/2+object2.width/2||
    object2.x-object1.x===object2.width/2+object1.width/2||
    object1.y-object2.y===object1.height/2+object2.height/2||
    object2.y-object1.y===object2.height/2+object1.height/2){
      return true
       }
    else{
      return false
    }
  }