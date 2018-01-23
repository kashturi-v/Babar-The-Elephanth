/**
 * In this program, we will use shapes and variables
 * to create Babar the Elephant. The variables help 
 * move and re-size Babar the Elephant.
 * Date:February 26,2015
 * Author:KashturiV
 * */

//sky
background(188, 235, 235);
noStroke();
var draw = function() {
//left shrub
fill(91,209,67);
ellipse(0,240,80,80);
ellipse(40,210,60,60);
ellipse(80,240,100,152);
ellipse(128,240,80,104);
ellipse(320,240,80,80);
ellipse(148,204,80,80);
//right shrub
ellipse(300,240,80,80);
ellipse(340,210,60,60);
ellipse(380,240,100,152);
ellipse(2+2,240,80,80);

//sun
fill(247,247,195);
ellipse(380,15,70,70);


//clouds
var cloudsX=100;
var cloudsY=40;
var clouds=5;
noStroke();
fill(255,245,248);
ellipse(0,45,80,25);
ellipse(35,49,40,35);
ellipse(62,54,50,30);
ellipse(85,44,35,20);

ellipse(230,45,80,25);
ellipse(265,45,40,35);
ellipse(290,40,50,30);
ellipse(210,35,35,20);
ellipse(320,35,80,25);

//ground
fill(33, 128, 14);
rect(0,260,400,140);

//shadow
noStroke();
fill(30, 107, 30);
ellipse(178,340,260,28);

// Elephant
var bodySize=95;
var x=20;
var y=10;

//back legs
var backLegsX= x+(bodySize*0.85);
var backLegsY=y+ (bodySize*0.6);
var backLegs=(bodySize*0.05);
fill(148,142,150);
rect(backLegsX,backLegsY+(backLegs*0.4),backLegs*10,backLegs*15);
rect(backLegsX+(backLegs*28),backLegsY+(backLegs*3),backLegs*10,backLegs*15);


//body
var bodyX= x+(bodySize*1.8);
var bodyY= y+(bodySize*2.1);
var body= bodySize*2.2;
fill(138,131,138);
ellipse(bodyX,bodyY,body,body);
fill(148,142,150);
ellipse(bodyX,bodyY-(body*0.009),body*0.98,body*0.9);


//ears
var earX= x+bodySize;
var earY= y+(bodySize*1.38);
var ear= bodySize*1.27;
fill(138,131,138);
ellipse(earX+(bodySize*0.16),earY+(bodySize*0.08),bodySize*0.99,bodySize*1.27);
ellipse(earX+(bodySize*0.06),earY-(bodySize*0.36),bodySize*1.27,bodySize*1.27);
fill(148,142,150);
ellipse(earX+(ear*0.20),earY,ear*0.78,ear);
ellipse(earX+(ear*0.07),earY-(ear*0.30),ear,ear);
noStroke();
ellipse(earX+(ear*0.09),earY,ear*0.68,ear);
fill(138,131,138);
ellipse(earX+(bodySize*1.61),earY+(bodySize*0.05),bodySize*0.95,bodySize*1.27);
ellipse(earX+(bodySize*1.77),earY-(bodySize*0.46),bodySize*1.37,bodySize*1.27);
fill(148,142,150);
ellipse(earX+(ear*1.3),earY,ear*0.75,ear);
ellipse(earX+(ear*1.4),earY-(ear*0.35),ear,ear);
noStroke();
ellipse(earX+(ear*1.3),earY,ear*0.40,ear);


//face
var faceX= x+(bodySize*1.8);
var faceY= y+(bodySize*1.4);
var face= bodySize*1.14;
fill(138,131,138);
ellipse(faceX,faceY+(face*0.02),face*1.12,face*1.13);
fill(148,142,150);
ellipse(faceX,faceY,face,face);
stroke(0, 0, 0);
strokeWeight(5);
fill(0,0,0);
ellipse(faceX-(face*0.28),faceY+(face*0.02),face*0.03,face*0.16);
ellipse(faceX+(face*0.28),faceY+(face*0.008),face*0.04,face*0.16);



//trunk
var trunkX= x+(bodySize*1.8);
var trunkY= y+(bodySize*1.6);
var trunk= bodySize*0.4;
fill(148,142,150);
strokeWeight(1);
stroke(115, 110, 115);
ellipse(trunkX,trunkY,trunk*0.95,trunk*0.95);
ellipse(trunkX,trunkY+(trunk*0.125),trunk*0.98,trunk*0.98);
ellipse(trunkX,trunkY+(trunk*0.35),trunk,trunk);
ellipse(trunkX,trunkY+(trunk*0.65),trunk*1.025,trunk*1.025);
ellipse(trunkX,trunkY+(trunk),trunk*1.05,trunk*1.05);
ellipse(trunkX,trunkY+(trunk*1.3),trunk*1.05,trunk*1.05);
ellipse(trunkX,trunkY+(trunk*1.6),trunk*1.025,trunk*1.025);
ellipse(trunkX,trunkY+(trunk*1.9),trunk*0.99,trunk*0.99);
fill(143, 137, 143);
ellipse(trunkX,trunkY+(trunk*2.025),trunk*0.94,trunk*0.94);
ellipse(trunkX,trunkY+(trunk*2.2),trunk*0.9,trunk*0.9);
ellipse(trunkX,trunkY+(trunk*2.4),trunk*0.88,trunk*0.88);
ellipse(trunkX,trunkY+(trunk*2.4),trunk*0.85,trunk*0.85);
ellipse(trunkX,trunkY+(trunk*2.6),trunk*0.88,trunk*0.88);
ellipse(trunkX,trunkY+(trunk*2.65),trunk*0.75,trunk*0.75);
fill(148,142,150);
stroke(148,142,150);
ellipse(trunkX+(trunk*-0.002),trunkY+(trunk*0.275),trunk*0.601,trunk*2.418);

//nostrils
strokeWeight(17);
var nostrilsX= x+(bodySize*1.8);
var nostrilsY= y+(bodySize*2.6);
var nostrils= bodySize*2.7;
strokeWeight(5);
stroke(0, 0, 0);
ellipse(nostrilsX+(nostrils*0.015),nostrilsY+(nostrils*0.022), nostrils*0.004, nostrils*0.015);
ellipse(nostrilsX-(nostrils*0.0185),nostrilsY+(nostrils*0.022),nostrils*0.004,nostrils*0.015);



//front feet
var frontFeetX= x+(bodySize*0.8);
var frontFeetY= y+(bodySize*2.7);
var frontFeet= bodySize*0.05;
stroke(143, 136, 143);
rect(frontFeetX+(frontFeet*3),frontFeetY,frontFeet*10,frontFeet*15,10);
rect(frontFeetX+(frontFeet*27),frontFeetY,frontFeet*10,frontFeet*15,10);
noStroke();
ellipse(frontFeetX+(frontFeet*9.6),frontFeetY,frontFeet*13,frontFeet*14);
ellipse(frontFeetX+(frontFeet*30.4),frontFeetY,frontFeet*13,frontFeet*14);
};

