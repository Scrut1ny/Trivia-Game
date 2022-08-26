var startDiv = document.getElementById("start");
var questionDiv = document.getElementById("questions");
var tyDiv = document.getElementById("thankyou");
var catDiv = document.getElementById("cat");

startDiv.style.display = "block";
questionDiv.style.display = "none";
tyDiv.style.display = "none";
catDiv.style.display = "none"; 

//questions
var questions;
var options;
var answers;

var questions2 = questions;
var options2 = options;
var answers2 = answers;
var btn1,btn2,btn3,btn4,b1,b2,b3, bg = 1, sounds = 1, question, answer,
    numCorrect = 0,
    tries = 0,
    time = 10,
    countStatus = 1,
    category;


function start(){
      document.getElementById("start").disabled = true;
      
      tyDiv.style.display = "none";
      startDiv.style.display = "none";
      questionDiv.style.display = "none";
      catDiv.style.display = "block";
      
      btn1 = document.getElementById("btn1");
      btn1.onclick = function(){check(0)};
      
      btn2 = document.getElementById("btn2");
      btn2.onclick = function(){check(1)};
      
      btn3 = document.getElementById("btn3");
      btn3.onclick = function(){check(2)};
      
      btn4 = document.getElementById("btn4");
      btn4.onclick = function(){check(3)};
      
      
}

function cat(catNum){
      switch(catNum) {
      case 1:
            questions = questions1;
            options = options1;
            answers = answers1;
      break;
      case 2:
            questions = questions2;
            options = options2;
            answers = answers2;
      break;
      case 3:
            questions = questions3;
            options = options3;
            answers = answers3;
      break;
      default:
      alert("error");
}
      
      startDiv.style.display = "none";
      questionDiv.style.display = "block";
      tyDiv.style.display = "none";
      catDiv.style.display = "none";
      newQuestion();
}

function newQuestion(){
      window.cancelAnimationFrame(countdown);
      time = 10;
      document.getElementById("btn1").className = "default";
      document.getElementById("btn2").className = "default";
      document.getElementById("btn3").className = "default";
      document.getElementById("btn4").className = "default";

      document.getElementById("btn1").disabled = false;
      document.getElementById("btn2").disabled = false;
      document.getElementById("btn3").disabled = false;
      document.getElementById("btn4").disabled = false;
      
      if(questions.length < 1){
            startDiv.style.display = "none";
            questionDiv.style.display = "none";
            tyDiv.style.display = "block";
            document.getElementById("results").innerHTML = "You got " + numCorrect + " questions right out of " + tries + " tries";
      }
      else{
      question = Math.floor(Math.random() * questions.length);
      answer = answers[question];
      var text = document.getElementById("text");
      
      text.innerHTML = questions[question];
      
      btn1.innerHTML = options[question][0];
      
      btn2.innerHTML = options[question][1];
      
      btn3.innerHTML = options[question][2];
      
      btn4.innerHTML = options[question][3];
      
      countdown(question);
      
}
}

function countdown(que){
      var timer = document.getElementById("timer");
      if(time < 1){
            countStatus = 0; 
            clearTimeout(countdown);
            incorrect();
      }
      if(countStatus == 0){
            clearTimeout(countdown);
            countStatus = 1;
      }
      else{
      timer.innerHTML = time;
      time = time - 1;
      setTimeout(countdown, 1000);
      }
}

function check(num){
      document.getElementById("btn1").disabled = true;
      document.getElementById("btn2").disabled = true;
      document.getElementById("btn3").disabled = true;
      document.getElementById("btn4").disabled = true;
      countStatus = 0
      tries = tries + 1;
      if(options[question][num] == answer){
            numCorrect = numCorrect + 1;
            correct();
      }
      
      else{
            incorrect();
      }
}

function correct(){
      document.getElementById("text").innerHTML = "Correct";
      answers.splice(question, 1);
      options.splice(question, 1);
      questions.splice(question, 1);
      setTimeout(newQuestion, 1000);
}

function incorrect(){
      document.getElementById("text").innerHTML = "Incorrect"; 
      setTimeout(newQuestion, 1000);
}
 
function restart(){
      startDiv.style.display = "block";
      questionDiv.style.display = "none";
      tyDiv.style.display = "none";
      catDiv.style.display = "none";
      
      bg = 1;
      sounds = 1;
      numCorrect = 0;
      tries = 0;
      time = 10;
      countStatus = 1;
      
      
      var questions1 = [
            "What year did gaming become an esport?",
            "what was the first game to have competitive play?",
            "What year was Overwatch officially released?",
            "What is the name of the final course in Mario Kart?",
            "What are Micro-Transactions?",
            "What system sold the most units?",
            "What seperates a gaming pc from a console?",
            "Who made the first videogame?",
            "Why do people typically choose console over pc?",
            "There are four ghosts in Pacman. Inky, Blinky, Pinky and what?"
      ];


      var options1 = [
            ["2015","2005","1972","2018"],["Mario","Gears of War","The Space Invaders","Fortnite"],["2015","2016","2017","2018"],["Rainbow Road","Toad's Factory","Mario Circuit","Rock Rock Mountain"],["Buying small items","In-game purchases","Microsoft money","Microsoft ATM"],["Xbox One","Playstation 4","Playstation 2","Xbox 360"],["Size","More hardware","More games","All of the above"],["Kanye West","Chunky Ragu","William Higinbotham","Alexander Graham Bell"],["Cheaper price","Fast refresh rate","Better graphics","Most games"],["Don","Clyde","Larry","James"]
      ];


      var answers1 = [
            "1972",
            "The Space Invaders",
            "2016",
            "Rainbow Road",
            "In-game purchases", 
            "Playstation 2", 
            "All of the above",
            "William Higinbotham",
            "Cheaper price",
            "Clyde"
      ];



      var questions2 = [
            "Who was the 4th President of the United States?",
            "How many dots are there on two dice?",
            "Which is the largest ocean?",
            "Who Won the first NFL Super bowl?",
            "Which fingernail grows the fastest?"
      ];

      var options2 = [
            ["Chocolate Milk","White Milk","Barack Obama","James Madison"],
            ["32","56","42","26"],
            ["Pacific","Atlantic","Indian","Southern"],
            ["The Chiefs","The Colts","The Packers","The Lions"],
            ["Pinky","Middle","Thumb","Pointer"]
      ];

      var answers2 = [
            "James Madison",
            "42",
            "Pacific",
            "The Packers",
            "Middle"
      ];



      var questions3 = [
            "What NBA player has the most MVPs?",
            "What MLB team has the most World Series wins?",
            "What tennis players has the most titles?",
            "Who won the first NFL Super Bowl?",
            "What MLB player has the highest batting average?",
            "Who has the most sacks in NFL History?",
            "Who is the all-time scoring leader in the NBA?",
            "Who is the only athlete to play in the World Series and Super Bowl?",
            "Who was the first defensive player to win the Heisman award?",
            "What players is 6-0 in the NBA Finals?"
      ];

      var options3 = [
            ["Lebron James","Michael Jordan","Kareem Abdul-Jabaar","Stephen Curry"],
            ["Chicago Cubs","New York Yankees","La Dodgers","Boston Red Sox"],
            ["Roger Federer","Rafeal Nada","Andy Murray","Novak Djokovic"],
            ["The Chiefs","The Colts","The Packers","The Lions"],
            ["Babe Ruth","Jackie Robinson","Hank Aaron","Ty Cobb"],
            ["Micheal Strahan","Bruce Smith","Mean Joe Green","Ray Lewis"],
            ["Kareem Abdul-Jabaar","Lebron James","Wilt Chamberlain","Michael Jordan"],
            ["Bo jackson","Kobe Bryant","Barry Bonds","Deion Sanders"],
            ["Ray Lewis","Charles Woodson","Ed Reed","Rod Woodson"],
            ["Calvin Johnson Jr","Kobe Bryan","Lebron James","Michael Jordan"]
      ];

      var answers3 = [
            "Kareem Abdul-Jabaar",
            "New York Yankees",
            "Roger Federer",
            "The Packers",
            "Ty Cobb",
            "Bruce Smith",
            "Kareem Abdul-Jabaar",
            "Deion Sanders",
            "Charles Woodson",
            "Michael Jordan"
      ];
}








var questions1 = [
	"What year did gaming become an esport?",
	"what was the first game to have competitive play?",
	"What year was Overwatch officially released?",
	"What is the name of the final course in Mario Kart?",
	"What are Micro-Transactions?",
	"What system sold the most units?",
	"What seperates a gaming pc from a console?",
	"Who made the first videogame?",
	"Why do people typically choose console over pc?",
	"There are four ghosts in Pacman. Inky, Blinky, Pinky and what?"
];


var options1 = [
	["2015","2005","1972","2018"],["Mario","Gears of War","The Space Invaders","Fortnite"],["2015","2016","2017","2018"],["Rainbow Road","Toad's Factory","Mario Circuit","Rock Rock Mountain"],["Buying small items","In-game purchases","Microsoft money","Microsoft ATM"],["Xbox One","Playstation 4","Playstation 2","Xbox 360"],["Size","More hardware","More games","All of the above"],["Kanye West","Chunky Ragu","William Higinbotham","Alexander Graham Bell"],["Cheaper price","Fast refresh rate","Better graphics","Most games"],["Don","Clyde","Larry","James"]
];


var answers1 = [
	"1972",
	"The Space Invaders",
	"2016",
	"Rainbow Road",
	"In-game purchases", 
	"Playstation 2", 
	"All of the above",
	"William Higinbotham",
	"Cheaper price",
	"Clyde"
];



var questions2 = [
      "Who was the 4th President of the United States?",
      "How many dots are there on two dice?",
      "Which is the largest ocean?",
      "Who Won the first NFL Super bowl?",
      "Which fingernail grows the fastest?"
];

var options2 = [
      ["Chocolate Milk","White Milk","Barack Obama","James Madison"],
      ["32","56","42","26"],
      ["Pacific","Atlantic","Indian","Southern"],
      ["The Chiefs","The Colts","The Packers","The Lions"],
      ["Pinky","Middle","Thumb","Pointer"]
];

var answers2 = [
      "James Madison",
      "42",
      "Pacific",
      "The Packers",
      "Middle"
];



var questions3 = [
      "What NBA player has the most MVPs?",
      "What MLB team has the most World Series wins?",
      "What tennis players has the most titles?",
      "Who won the first NFL Super Bowl?",
      "What MLB player has the highest batting average?",
      "Who has the most sacks in NFL History?",
      "Who is the all-time scoring leader in the NBA?",
      "Who is the only athlete to play in the World Series and Super Bowl?",
      "Who was the first defensive player to win the Heisman award?",
      "What players is 6-0 in the NBA Finals?"
];

var options3 = [
      ["Lebron James","Michael Jordan","Kareem Abdul-Jabaar","Stephen Curry"],
      ["Chicago Cubs","New York Yankees","La Dodgers","Boston Red Sox"],
      ["Roger Federer","Rafeal Nada","Andy Murray","Novak Djokovic"],
      ["The Chiefs","The Colts","The Packers","The Lions"],
      ["Babe Ruth","Jackie Robinson","Hank Aaron","Ty Cobb"],
      ["Micheal Strahan","Bruce Smith","Mean Joe Green","Ray Lewis"],
      ["Kareem Abdul-Jabaar","Lebron James","Wilt Chamberlain","Michael Jordan"],
      ["Bo jackson","Kobe Bryant","Barry Bonds","Deion Sanders"],
      ["Ray Lewis","Charles Woodson","Ed Reed","Rod Woodson"],
      ["Calvin Johnson Jr","Kobe Bryan","Lebron James","Michael Jordan"]
];

var answers3 = [
      "Kareem Abdul-Jabaar",
      "New York Yankees",
      "Roger Federer",
      "The Packers",
      "Ty Cobb",
      "Bruce Smith",
      "Kareem Abdul-Jabaar",
      "Deion Sanders",
      "Charles Woodson",
      "Michael Jordan"
];