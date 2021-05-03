var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cycles,cycle1 ,cycle2,cycle3,cycle4;
var track,cycle1img,cycle2img,cycle3img,cycle4img,groundimg;

function preload(){

  track=loadImage("track.jpg");
  cycle1img=loadImage("cycle1.jpeg");
  cycle2img=loadImage("cycle2.jpeg");
  cycle3img=loadImage("cycle3.jpeg");
  cycle4img=loadImage("cycle4.jpeg");
  groundimg=loadImage("ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
