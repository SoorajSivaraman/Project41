var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player, form, game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var errorState = 0;
var reset = null;

function preload(){
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  fruitGroup = createGroup();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  if(gameState === 1)
  {
    clear();
    game.play();

    fill("white");
    textFont("Lucida Calligraphy");
    textSize(15);
    text("Use LEFT and RIGHT Arrow keys to move your basket to collect fruits", 350, 50);
    text("Press 'Reset Game' Button to reset the game for both the players and refresh the page to begin the game from first.", 10, 580);
    var y = 50;
    var i = 1;
    for(var plr in allPlayers)
    {
      fill("white");
      text("Player " + i + " (" + allPlayers[plr].name + ") Score: " +  allPlayers[plr].score, 50, y);
      if(allPlayers[plr].score === 10)
      {
        end();
      }
      y = y + 50;
      i = i + 1; 
    }
  }

  if(gameState === 1 || gameState === 2)
  {
    reset = createButton('Reset Game');
    reset.position(250,250);
    reset.style('width', '100px');
    reset.style('height', '20px');
    reset.style('background', 'lightpink');
    
    reset.mousePressed(() => 
    {
      game.update(0);
      player.updateCount(0);
    });
  }
  if(gameState === 2) end();
  if(playerCount === 2) game.update(1);
}

function end(){
  game.update(2);
  player.updateCount(0);
  clear();
  background(back_img);
  fill("white");
  textFont("Lucida Calligraphy");
  textSize(20);
  text("Game Over !! Press 'Reset Button' and refresh the page to play again.", 50, 300);
}