var PLAY = 1;
var END = 0;
var score = 0/3;
var gameState = PLAY;
var inputBox;
var button;

function preload(){
  red1 = loadImage("Red.png")
  redflip = loadImage("redFlip.png");
  green1 = loadImage("Green.png")
  greenFlip = loadImage("greenFlip.png");
  blue1 = loadImage("Blue.png")
  blueFlip = loadImage("blueFlip.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
  openingImg = loadImage("opening.png")
  Arena1 = loadImage("Waiting.png")
  q1Img = loadImage("Q1.png")
  q2Img = loadImage("L5.png")
  congratulations = loadImage("Congratulations.png")
  wellDone = loadImage("WellDone.png")
  again = loadImage("TryAgain.png")
  wrong = loadSound("Wrong.mp3")
  correct = loadSound("Correct.mp3")
}

//everything you only want once
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(openingImg);
  openingImg.scale = 0.75

  fill("black")
  textSize(25)
  text("Enter your name below:", width/2 - 130, windowHeight/2 + 250)

  inputBox = createInput("").attribute("placeholder", "Enter your name");
  inputBox.style('color', 'black') 
  inputBox.style('font-size', '20px')
  inputBox.position(width/2 - 105, windowHeight/2 + 260)
  inputBox.size(200, 30) 

  button = createButton("Submit")
  button.style('background-color', "#FFBD59")
  button.style('color', "black")
  button.style('font-size', '25px')
  button.position(windowWidth/2 - 50, windowHeight/2 + 320)

  button.mousePressed(()=>{
    name1 = inputBox.value()
    if(name1 === ""){
      alert("Please enter your name in the space provided below")
      return  false
    }
    else{
      button.mousePressed(greeting)
    }
  })
}

//everything you want repeatedly

function draw() {  
  drawSprites();
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
}

function greeting(){
  background(Arena1)
  inputBox.hide()
  button.hide()

  message = inputBox.value()
  greeting = createElement("h1");
  greeting.html("Hello " + message + "!") 
  greeting.style('font-size', '50px')
  greeting.position(windowWidth/2 - 100, windowHeight/2 - 50)
  greeting.style('color', "white")

  message = inputBox.value()  
  greeting1 = createElement("h1");
  greeting1.html("Are you ready to test your knowledge of the wonderous world below the sea?")
  greeting1.style('font-size', '50px')
  greeting1.position(windowWidth/2 + (-800), windowHeight/2 - (-70))
  greeting1.style('color', "white")

  button1 = createButton("Start Here")
  button1.style('background-color', "#FFBD59")
  button1.style('color', "black")
  button1.style('font-size', '25px')
  button1.position(windowWidth/2 - 50, windowHeight/2 + 320)
  button1.mouseClicked(Question1)

  red = createSprite(width/7 - 50, height/2)
  red.addImage(red1)
  red.scale = 0.5

  green = createSprite(width/2, height/6 + 50)
  green.addImage(green1)
  green.scale = 0.5

  blue = createSprite(width/1.25, height/1.5 + 100)
  blue.addImage(blue1)
  blue.scale = 0.5
}

function greeting1(){
  greeting1 = createElement("h1");
  greeting1.html("Are you ready to test your knowledge of the wonderous world below the sea?")
  greeting1.style('font-size', '50px')
  greeting1.position(windowWidth/2 - 500, windowHeight/2 - 100)
  greeting1.style('color', "white")
}

/* Code for Question1*/

function Question1(){
  background(q1Img)
  button1.hide()
  greeting.hide()
  greeting1.hide()
  Q1 = createElement("h1")
  Q1.html("Q1.How many arms does a squid have?")
  //10 arms
  Q1.style("color", "black")
  Q1.style('background-color', "white")
  Q1.style("fontSize", "25")
  Q1.position(windowWidth/2, windowHeight/2)

  Q1A1 = createButton("1. 7")
  Q1A1.style('background-color', "white")
  Q1A1.style('color', "black")
  Q1A1.style('font-size', '25px')
  Q1A1.position(1000,500)
  Q1A1.mousePressed(Q1Option1)
  
  Q1A2 = createButton("2. 8")
  Q1A2.style('background-color', "white")
  Q1A2.style('color', "black")
  Q1A2.style('font-size', '25px')
  Q1A2.position(1000,550)
  Q1A2.mousePressed(Q1Option2)

  Q1A3 = createButton("3. 9")
  Q1A3.style('background-color', "white")
  Q1A3.style('color', "black")
  Q1A3.style('font-size', '25px')
  Q1A3.position(1000, 600)
  Q1A3.mousePressed(Q1Option3)

  Q1A4 = createButton("4. 10")
  Q1A4.style('background-color', "white")
  Q1A4.style('color', "black")
  Q1A4.style('font-size', '25px')
  Q1A4.position(1000, 650)
  Q1A4.mousePressed(Q1Option4)

  button2 = createButton("Next Question")
  button2.style('background-color', "#FFBD59")
  button2.style('color', "black")
  button2.style('font-size', '25px')
  button2.position(windowWidth/2 - 50, windowHeight/2 + 320)
  button2.mouseClicked(Question2)
}

function Q1Option1(){
  Q1A1.style("background-color", "red")
  Q1A4.style("background-color", "green")
  Q1A1.attribute("disabled", "")
  Q1A2.attribute("disabled", "")
  Q1A3.attribute("disabled", "")
  Q1A4.attribute("disabled", "")
  wrong.play()
}

function Q1Option2(){
  Q1A2.style("background-color", "red")
  Q1A4.style("background-color", "green")
  Q1A1.attribute("disabled", "")
  Q1A2.attribute("disabled", "")
  Q1A3.attribute("disabled", "")
  Q1A4.attribute("disabled", "")
  wrong.play()
}

function Q1Option3(){
  Q1A3.style("background-color", "red")
  Q1A4.style("background-color", "green")
  Q1A1.attribute("disabled", "")
  Q1A2.attribute("disabled", "")
  Q1A3.attribute("disabled", "")
  Q1A4.attribute("disabled", "")
  wrong.play()
}

function Q1Option4(){
  Q1A4.style("background-color", "green")
  Q1A1.attribute("disabled", "")
  Q1A2.attribute("disabled", "")
  Q1A3.attribute("disabled", "")
  Q1A4.attribute("disabled", "")
  score += 1
  correct.play()
}

/* Code for Question2*/

function Question2(){
  background("q2Img")
  button2.hide()
  Q1.hide()
  Q1A1.hide()
  Q1A2.hide()
  Q1A3.hide()
  Q1A4.hide()

  Q2 = createElement("h1")
  Q2.html("Q2.What is the name of the organ used by fish to obtain oxygen from water?")
  //Gills
  Q2.style("color", "black")
  Q2.style('background-color', "white")
  Q2.style("fontSize", "25")
  Q2.position(windowWidth/2, windowHeight/2 - 25)

  Q2A1 = createButton("1. Fins")
  Q2A1.style('background-color', "white")
  Q2A1.style('color', "black")
  Q2A1.style('font-size', '25px')
  Q2A1.position(1000,500)
  Q2A1.mousePressed(Q2Option1)
  
  Q2A2 = createButton("2. Lungs")
  Q2A2.style('background-color', "white")
  Q2A2.style('color', "black")
  Q2A2.style('font-size', '25px')
  Q2A2.position(1000,550)
  Q2A2.mousePressed(Q2Option2)

  Q2A3 = createButton("3. Gills")
  Q2A3.style('background-color', "white")
  Q2A3.style('color', "black")
  Q2A3.style('font-size', '25px')
  Q2A3.position(1000, 600)
  Q2A3.mousePressed(Q2Option3)

  Q2A4 = createButton("4. Cillia")
  Q2A4.style('background-color', "white")
  Q2A4.style('color', "black")
  Q2A4.style('font-size', '25px')
  Q2A4.position(1000, 650)
  Q2A4.mousePressed(Q2Option4)

  button3 = createButton("Next Question")
  button3.style('background-color', "#FFBD59")
  button3.style('color', "black")
  button3.style('font-size', '25px')
  button3.position(windowWidth/2 - 50, windowHeight/2 + 320)
  button3.mouseClicked(Question3)
}

function Q2Option1(){
  Q2A1.style("background-color", "red")
  Q2A3.style("background-color", "green")
  Q2A1.attribute("disabled", "")
  Q2A2.attribute("disabled", "")
  Q2A3.attribute("disabled", "")
  Q2A4.attribute("disabled", "")
  wrong.play()
}

function Q2Option2(){
  Q2A2.style("background-color", "red")
  Q2A3.style("background-color", "green")
  Q2A1.attribute("disabled", "")
  Q2A2.attribute("disabled", "")
  Q2A3.attribute("disabled", "")
  Q2A4.attribute("disabled", "")
  wrong.play()
}

function Q2Option3(){
  Q2A3.style("background-color", "green")
  Q2A1.attribute("disabled", "")
  Q2A2.attribute("disabled", "")
  Q2A3.attribute("disabled", "")
  Q2A4.attribute("disabled", "")
  score += 1
  correct.play()
}

function Q2Option4(){
  Q2A4.style("background-color", "red")
  Q2A3.style("background-color", "green")
  Q2A1.attribute("disabled", "")
  Q2A2.attribute("disabled", "")
  Q2A3.attribute("disabled", "")
  Q2A4.attribute("disabled", "")
  wrong.play()
}

/* Code for Question3*/

function Question3(){
  background("brown")
  button3.hide()
  Q2.hide()
  Q2A1.hide()
  Q2A2.hide()
  Q2A3.hide()
  Q2A4.hide()

  Q3 = createElement("h1")
  Q3.html("Q3.What is the name of the organ used by fish to obtain oxygen from water?")
  //Gills
  Q3.style("color", "black")
  Q3.style('background-color', "white") 
  Q3.style("fontSize", "25")
  Q3.position(windowWidth/2, windowHeight/2 - 25)

  Q3A1 = createButton("1. Fins")
  Q3A1.style('background-color', "white")
  Q3A1.style('color', "black")
  Q3A1.style('font-size', '25px')
  Q3A1.position(1000,500)
  Q3A1.mousePressed(Q3Option1)
  
  Q3A2 = createButton("2. Lungs")
  Q3A2.style('background-color', "white")
  Q3A2.style('color', "black")
  Q3A2.style('font-size', '25px')
  Q3A2.position(1000,550)
  Q3A2.mousePressed(Q3Option2)

  Q3A3 = createButton("3. Gills")
  Q3A3.style('background-color', "white")
  Q3A3.style('color', "black")
  Q3A3.style('font-size', '25px')
  Q3A3.position(1000, 600)
  Q3A3.mousePressed(Q3Option3)

  Q3A4 = createButton("4. Cillia")
  Q3A4.style('background-color', "white")
  Q3A4.style('color', "black")
  Q3A4.style('font-size', '25px')
  Q3A4.position(1000, 650)
  Q3A4.mousePressed(Q3Option4)

  button4 = createButton("Check your score")
  button4.style('background-color', "#FFBD59")
  button4.style('color', "black")
  button4.style('font-size', '25px')
  button4.position(windowWidth/2 - 50, windowHeight/2 + 320)
  button4.mouseClicked(Question4)
}

function Q3Option1(){
  Q3A1.style("background-color", "red")
  Q3A3.style("background-color", "green")
  Q3A1.attribute("disabled", "")
  Q3A2.attribute("disabled", "")
  Q3A3.attribute("disabled", "")
  Q3A4.attribute("disabled", "")
  wrong.play()
}

function Q3Option2(){
  Q3A2.style("background-color", "red")
  Q3A3.style("background-color", "green")
  Q3A1.attribute("disabled", "")
  Q3A2.attribute("disabled", "")
  Q3A3.attribute("disabled", "")
  Q3A4.attribute("disabled", "")
  wrong.play()
}

function Q3Option3(){
  Q3A3.style("background-color", "green")
  Q3A1.attribute("disabled", "")
  Q3A2.attribute("disabled", "")
  Q3A3.attribute("disabled", "")
  Q3A4.attribute("disabled", "")
  score += 1
  correct.play()
}

function Q3Option4(){
  Q3A4.style("background-color", "red")
  Q3A3.style("background-color", "green")
  Q3A1.attribute("disabled", "")
  Q3A2.attribute("disabled", "")
  Q3A3.attribute("disabled", "")
  Q3A4.attribute("disabled", "")
  wrong.play()
}

/* Code for Question4*/

function Question4(){
  background("purple")
  button4.hide()
  Q3.hide()
  Q3A1.hide()
  Q3A2.hide()
  Q3A3.hide()
  Q3A4.hide()

  Q4 = createElement("h1")
  Q4.html("Q3.What is the name of the organ used by fish to obtain oxygen from water?")
  //Gills
  Q4.style("color", "black")
  Q4.style('background-color', "white") 
  Q4.style("fontSize", "25")
  Q4.position(windowWidth/2, windowHeight/2 - 25)

  Q4A1 = createButton("1. Fins")
  Q4A1.style('background-color', "white")
  Q4A1.style('color', "black")
  Q4A1.style('font-size', '25px')
  Q4A1.position(1000,500)
  Q4A1.mousePressed(Q3Option1)
  
  Q4A2 = createButton("2. Lungs")
  Q4A2.style('background-color', "white")
  Q4A2.style('color', "black")
  Q4A2.style('font-size', '25px')
  Q4A2.position(1000,550)
  Q4A2.mousePressed(Q3Option2)

  Q4A3 = createButton("3. Gills")
  Q4A3.style('background-color', "white")
  Q4A3.style('color', "black")
  Q4A3.style('font-size', '25px')
  Q4A3.position(1000, 600)
  Q4A3.mousePressed(Q3Option3)

  Q4A4 = createButton("4. Cillia")
  Q4A4.style('background-color', "white")
  Q4A4.style('color', "black")
  Q4A4.style('font-size', '25px')
  Q4A4.position(1000, 650)
  Q4A4.mousePressed(Q3Option4)

  button5 = createButton("Check your score")
  button5.style('background-color', "#FFBD59")
  button5.style('color', "black")
  button5.style('font-size', '25px')
  button5.position(windowWidth/2 - 50, windowHeight/2 + 320)
  button5.mouseClicked(LastPage)
}

function Q4Option1(){
  Q4A1.style("background-color", "green")
  Q4A1.attribute("disabled", "")
  Q4A2.attribute("disabled", "")
  Q4A3.attribute("disabled", "")
  Q4A4.attribute("disabled", "")
  score += 1
  correct.play()
}

function Q4Option2(){
  Q4A2.style("background-color", "red")
  Q4A1.style("background-color", "green")
  Q4A1.attribute("disabled", "")
  Q4A2.attribute("disabled", "")
  Q4A3.attribute("disabled", "")
  Q4A4.attribute("disabled", "")
  wrong.play()
}

function Q4Option3(){
  Q3A3.style("background-color", "red")
  Q3A1.style("background-color", "green")
  Q3A1.attribute("disabled", "")
  Q3A2.attribute("disabled", "")
  Q3A3.attribute("disabled", "")
  Q3A4.attribute("disabled", "")
  wrong.play()
}

function Q4Option4(){
  Q4A4.style("background-color", "red")
  Q4A3.style("background-color", "green")
  Q4A1.attribute("disabled", "")
  Q4A2.attribute("disabled", "")
  Q4A3.attribute("disabled", "")
  Q4A4.attribute("disabled", "")
  wrong.play()
}
function LastPage(){
  button5.hide()
  Q4.hide()
  Q4A1.hide()
  Q4A2.hide()
  Q4A3.hide()
  Q4A4.hide()

 if(score === 4) {
  background("Congratulations.png")
}

 if(score === 2 || score === 3){
   background("WellDone.png")
 }

 if(score === 1){
   background("TryAgain.png")
 }

  text( score + "/4", windowWidth/2 + 500, windowHeight/2 - 300)

}
