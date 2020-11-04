const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var helicopter,helicopterImg;
var ground;
var package,packageImg;



function preload(){

packageImg = loadImage ("package.png")
    
helicopterImg = loadImage("helicopter.png")

}

function setup (){
var canvas = createCanvas(500,500);

engine = Engine.create();
world = engine.world;

var choice = {isStatic:true}
ground = Bodies.rectangle(250,490,500,20,choice);
World.add(world,ground);

var option = {restitution : 3,isStatic:true}
package = Bodies.circle(250,100,30,option);
World.add(world,package);
package.addImage(packageImg);

helicopter = Bodies.rectangle(250,80,40,40);
helicopter.addImage(helicopterImg);
World.add(world,helicopter)

}

function draw() {
background(220);
    
var pos = ground.position;
rectMode(CENTER);
rect(pos.x,pos.y,500,20);

var dis = package.position;
ellipseMode(CENTER);
ellipse(dis.x,dis.y,30,30);

var posi = helicopter.position;
rectMode(CENTER);
rect(posi.x,posi.y,40,40);
}
