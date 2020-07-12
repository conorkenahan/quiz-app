//questions

let score = 0;
let currentQuestion =0;
const STORE = [
  {
    title: 'Who are the two original founding members of Steely Dan?',
    image: '<img class="questionImage" src="images/steelydan2.jpg" alt="steely dan 2">',
    answers: [
      '• John Lennon & Paul McCartney',
      '• Don Henley and Joe Walsh',
      '• Donald Fagen and Walter Becker',
      '• Daryl Hall and John Oates'
    ],
    correct:
      '• Donald Fagen and Walter Becker'
  },
  {
    title:
      'In what year was Steely Dan’s debut album, "Cant Buy A Thrill," released?',
      image: '<img class="questionImage" src="images/thrillalbum.jpg" alt="cant buy a thrill">',
    answers: [
      '• 1969',
      '• 1970',
      '• 1972',
      '• 1975'
    ],
    correct:
      '• 1972'
  },
  {
    title:
      'Which musician was commonly featured on Steely Dan songs, including "Bad Sneakers," "Kid Charlemagne," and "Peg"?',
    image: '<img class="questionImage" src="images/michaelwsteely.jpg" alt="michael with steely dan">',
    answers: [
      '• Paul Simon',
      '• Michael McDonald',
      '• Todd Rundgren',
      '• Steve Miller'
    ],
    correct: '• Michael McDonald'
  },
  {
    title: 'Who was the original drummer for the group in the late 60s?',
    image: '<img class="questionImage" src="images/steelydan4.jpg" alt="steely dan 4">',
    answers: [
      '• Neil Peart',
      '• Phil Ehart',
      '• David Letterman',
      '• Chevy Chase'
    ],
    correct: '• Chevy Chase'
  },
  {
    title:
      'After a 19 year hiatus, Steely Dan released which album?',
    image: '<img class="questionImage" src="images/steelydan6.jpg" alt="steely dan 6">',
    answers: [
      '• Aja',
      '• Gaucho',
      '• Two Against Nature',
      '• Katy Lied'
    ],
    correct:
      '• Two Against Nature'
  },
  {
    title:
      'What is a "Steely Dan"?',
    image: '<img class="questionImage" src="images/steelydan5.jpg" alt="steely dan 5">',
    answers: [
      '• An airplane',
      '• A dildo',
      '• A "rough and tumble" man',
      '• A train'
    ],
    correct:
      '• A dildo'
  }
];


// event listeners

$(document).ready(function(){
  
  $('.startBox a').click(function(e){
    e.preventDefault();
    $('.hideStart').hide();
    $('.quiz').show();
    showQuestion();
    $('.currentQuestion').text(1);
  });
  
  $('.quiz ul').on('click', 'li', function(){
    $('.selected').removeClass('selected')
    $(this).toggleClass('selected');
  })
  
  
  $('.quiz a').click(function(e){
   e.preventDefault();
    if($('li.selected').length){
      let guess = $('li.selected').text();
      checkAnswer(guess);
      $('.quiz').hide();
    } else {
      alert('Please select an answer.');
    }
  });
  
  //summary click
  $('.summary a').click(function(e){
    e.preventDefault();
    restartQuiz()
  });

//next question
  $('.response').on('click', '.nextButton', function(event){
    $('.response').hide();
    $('.quiz').show();
    showQuestion();
  })
});






// functions

//generates question
function showQuestion(){
 let question = STORE[currentQuestion];
 if (currentQuestion < STORE.length){
   $('.quiz h2').text(question.title);
   $('.quiz span').html('');
   $('.quiz span').prepend(question.image);
  $('.quiz ul').html('');
  for (let i=0; i<question.answers.length; i++){
    $('.quiz ul').append(`<li id="${i}" class="choice">${question.answers[i]}</li>`)
 }
}
}

//updates score by 1
function updateScore() {
  score++;
  $('.score').text(score);
}

//checks if answer is correct
function checkAnswer(guess){
let question = STORE[currentQuestion];
  if(currentQuestion == STORE.length -1 ){
    if(question.correct == guess){
      updateScore();
      showSummary();
    }
    else{
    showSummary();
    }
  }else {
  if(question.correct == guess){
    $('.response').html(
      `<h2>Your answer is correct!</h2><img src="images/correct-answer.jpg" alt="correct answer" class="images" width="200px"><p>You're the King of the World!</p><button type="button" class="nextButton button">Next</button>`);
      $('.response').show();
      updateScore();
      updateCurrentQuestion();
  }
  if(question.correct !== guess) {
    $('.response').html(
      `<h2>Wrong answer!</h2><img src="images/wrong-answer.jpg" alt="correct answer" class="images" width="200px"><p>Only a fool would say that!</p><button type="button" class="nextButton button">Next</button>`);
      $('.response').show();
      updateCurrentQuestion();
  }
  }
 }

//updates the current question number
function updateCurrentQuestion() {
  currentQuestion++;
  $('.currentQuestion').text(currentQuestion + 1);
}

//shows summary
function showSummary(){
  $('.quiz').hide();
  $('.summary').show();
  $('.summary p').text("Congrats! You scored "+score+" out of "+STORE.length+" correct! Now take your big black cow and get out of here!");
}

//restarts the quiz
function restartQuiz(){
   $('.summary').hide();
    $('.hideStart').show();
    score = 0;
    currentQuestion =0;
    $('.score').text(0);
    $('.currentQuestion').text(0);
  showQuestion();
}
 
















  
  
  
  
  