var contestant
var contestantCount = 0;
var gameState = 0;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new  Question();
  game.getState();
  game.start();
}


function draw(){
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
