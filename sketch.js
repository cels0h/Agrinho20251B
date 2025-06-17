let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
    background('#00FA12');
    let distancia;
  distancia = dist(mouseX, mouseY,x,y);
  circle(mouseX,mouseY,distancia)
    
   if(distancia < 50){
        fill('blue')
      }
  
  if(distancia > 51){
    fill('red')
  }
  
  if(distancia > 100){
    fill('purple')
  }
  
  if(distancia < 30){
    fill('black')
  }
    if(distancia < 5) {
        text('ENCONTREI!', 200, 200);
        noLoop();
    }
}