// tema: Plantando e Colhendo
let estadoArvores = [0,0,0,0,0,0,0,0,0,0]
let cooldownDasArvore = 10*60
let pontos = 0
function preload() {
  imgmaca = loadImage("maca.png")
  imgsemmaca = loadImage("sem_maca.png")
}


function setup() {
  createCanvas(600, 700);
}

function draw() {
  noSmooth()
  stroke(0)
  strokeWeight(1)
  fill(148, 88, 40)
  background('#8BC34A');
  cenRect(300, 350, 140, 700)
  arvores();
  verificaArvore()
  fill(0)
  strokeWeight(0)
  let texto = "Pontos: " + pontos
  textSize(32)
  text(texto,0,32)
}
 
function arvores() {
  //fico meio complicado
  if (estadoArvores[0] == 0) {
    image(imgmaca, -120, -130, 600, 600)
  } else {
    image(imgsemmaca, -120, -130, 600, 600)
  }

  if (estadoArvores[1] == 0) {
    image(imgmaca, 200, -140, 600, 600)
  } else {
    image(imgsemmaca, 200, -140, 600, 600)
  }

  if (estadoArvores[2] == 0) {
    image(imgmaca, -220, -40, 600, 600)
  } else {
    image(imgsemmaca, -220, -40, 600, 600)
  }

  if (estadoArvores[3] == 0) {
    image(imgmaca, 260, -30, 600, 600)
  } else {
    image(imgsemmaca, 260, -30, 600, 600)
  }

  if (estadoArvores[4] == 0) {
    image(imgmaca, -150, 75, 600, 600)
  } else {
    image(imgsemmaca, -150, 75, 600, 600)
  }

  if (estadoArvores[5] == 0) {
    image(imgmaca, 180, 80, 600, 600)
  } else {
    image(imgsemmaca, 180, 80, 600, 600)
  }

  if (estadoArvores[6] == 0) {
    image(imgmaca, -200, 180, 600, 600)
  } else {
    image(imgsemmaca, -200, 180, 600, 600)
  }

  if (estadoArvores[7] == 0) {
    image(imgmaca, 240, 180, 600, 600)
  } else {
    image(imgsemmaca, 240, 180, 600, 600)
  }

  if (estadoArvores[8] == 0) {
    image(imgmaca, -130, 270, 600, 600)
  } else {
    image(imgsemmaca, -130, 270, 600, 600)
  }

  if (estadoArvores[9] == 0) {
    image(imgmaca, 150, 280, 600, 600)
  } else {
    image(imgsemmaca, 150, 280, 600, 600)
  }

  if (mouseIsPressed){
    print("O botão do mouse foi pressionado!")
  }
}


function mouseClicked()  {
  console.log(mouseX+","+mouseY)
  //arvore
  let vartemp = 0
  if (dist(160,130,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
  if (dist(475,120,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
  if (dist(60,220 ,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
  if (dist(540,230 ,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
  if (dist(125,335,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
   if (dist(460,340,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
   if (dist(80,440,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
   if (dist(520,440,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
  if (dist(150,530,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1  
  if (dist(430,540,mouseX,mouseY)<30){
    if (estadoArvores[vartemp] == 0) {estadoArvores[vartemp] +=cooldownDasArvore; pontos++}
  }
  vartemp +=1
  
  console.log(estadoArvores)
}

function verificaArvore() {
  for (let i = 0; i < estadoArvores.length; i++) {
    if (estadoArvores[i] > 0) {
      estadoArvores[i]--;
    }
  }
}

//ignore vvv
function cenRect(a,b,c,d) {
  rect(a-c/2,b-d/2,c,d)
}
