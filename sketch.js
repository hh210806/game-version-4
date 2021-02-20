
var containmentzone, containmentImg;
var Patient,patientImg;
var background,backgroundImg;
var firstaid,firstaidImg;
var kadha,kadhaImg;
var runner,runnerImg;

function preload()
{
	runnerImg = loadAnimation("runner-1.png","runner-2.png");


	kadhaImg = loadImage("download 2.png");
firstaidImg = loadImage("download.png");

backgroundImg = loadImage("road2.png");
patientImg = loadImage("infected person.png");
	containmentImg = loadImage("containment zone.png");
}

function setup() {
	createCanvas(600, 600);
background = createSprite(300,300);
background.addImage(backgroundImg);
background.scale = 1;

  
}


function draw() {

containmentZone();
patient();
firstaidkit();
Kadha();


	background.velocityY = 3;
if (background.y > 400){


	background.y = 300;
  }
  
 


runner = createSprite(200,200,60,60);
runner.addAnimation("runner",runnerImg);
runner.scale = 0.1;
if(keyDown(RIGHT_ARROW)){
	runner.x = runner.x + 2;
  }
  
  if(keyDown(LEFT_ARROW)){
	runner.x = runner.x - 2;
  }
  if(keyDown(UP_ARROW)){
	runner.y = runner.y - 2;
  }
  
  if(keyDown(DOWN_ARROW)){
	runner.y = runner.y + 2;
  }
  


	

 
drawSprites();

}
function containmentZone (){
	if (frameCount % 50 === 0) {
		containmentzone = createSprite(random(100, 500), 0, 100, 100);
		containmentzone.addImage("conatinment",containmentImg);
		containmentzone.velocityY = 6;
		containmentzone.scale = 0.1;
	  lifetime = 700;
	  
	 
	}
}
function patient(){
	if (frameCount % 400 === 0) {
		
		
		Patient = createSprite(random(100, 500), 0, 100, 100);
	
		Patient.addImage("patient",patientImg);
		Patient.velocityY = 6;
		Patient.scale = 0.1;
lifetime = 700;
	  
	  
	 
	}
}

function firstaidkit(){
	if (frameCount % 700 === 0) {
		firstaid = createSprite(random(100, 500), 0, 100, 100);
		firstaid.addImage("firstaid",firstaidImg);
		firstaid.velocityY = 6;
		firstaid.scale = 0.1;
	  lifetime = 700;
	  
	 
	}
}

function Kadha(){
	if (frameCount % 500 === 0) {
		kadha = createSprite(random(100, 500), 0, 100, 100);
		kadha.addImage("kadha",kadhaImg);
		kadha.velocityY = 6;
		lifetime = 700
	  
	  
	 
	}
}
