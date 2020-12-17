var unicorn, unicornImage; 
var trainImage;
var backgroundImage;
var trains = [];

function preload(){
unicornImage = loadImage('unicorn.jpg')
trainImage = loadImage('train.png')
backgroundImage = loadImage('background.jpeg')
}

function setup(){
  createCanvas (800, 450)  
  unicorn = new Unicorn();
}

function keyPressed() {
  if(key == ' ') {
    unicorn.jump();
  }
}

function draw(){

  if(random(1) < 0.01) {
    trains.push(new Train());
  }

  background(backgroundImage);

  for (let t of trains) {
    t.move();
    t.show();
      }

  if(unicorn.hits(trains)) {
    console.log('gameover');
    noLoop();
  }

  unicorn.show();
  unicorn.move();

  
  }
