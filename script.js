//questions

let score = 0;
let currentQuestion =0;
const STORE = [
  {
    title: 'Who are the two original founding members of Steely Dan?',
    image: '<img class="questionImage" src="images/steelydan2.jpg" alt="steely dan 2">',
    answers: [
      'John Lennon & Paul McCartney',
      'Don Henley & Joe Walsh',
      'Donald Fagen & Walter Becker',
      'Daryl Hall & John Oates'
    ],
    correct:
      'Donald Fagen & Walter Becker'
  },
  {
    title:
      'In what year was Steely Dan’s debut album, "Cant Buy A Thrill," released?',
      image: '<img class="questionImage" src="images/thrillalbum.jpg" alt="cant buy a thrill">',
    answers: [
      '1969',
      '1970',
      '1972',
      '1975'
    ],
    correct:
      '1972'
  },
  {
    title:
      'Which musician was commonly featured on Steely Dan songs, including "Bad Sneakers," "Kid Charlemagne," and "Peg"?',
    image: '<img class="questionImage" src="images/michaelwsteely.jpg" alt="michael with steely dan">',
    answers: [
      'Paul Simon',
      'Michael McDonald',
      'Todd Rundgren',
      'Steve Miller'
    ],
    correct: 'Michael McDonald'
  },
  {
    title: 'Who was the original drummer for the group in the late 60s?',
    image: '<img class="questionImage" src="images/steelydan4.jpg" alt="steely dan 4">',
    answers: [
      'Neil Peart',
      'Phil Ehart',
      'David Letterman',
      'Chevy Chase'
    ],
    correct: 'Chevy Chase'
  },
  {
    title:
      'After a 19 year hiatus, Steely Dan released which album?',
    image: '<img class="questionImage" src="images/steelydan6.jpg" alt="steely dan 6">',
    answers: [
      'Aja',
      'Gaucho',
      'Two Against Nature',
      'Katy Lied'
    ],
    correct:
      'Two Against Nature'
  },
  {
    title:
      'What is a "Steely Dan"?',
    image: '<img class="questionImage" src="images/steelydan5.jpg" alt="steely dan 5">',
    answers: [
      'An airplane',
      'A dildo',
      'A "rough and tumble" man',
      'A train'
    ],
    correct:
      'A dildo'
  }
];


// event listeners


  
//clicks start quiz
function startQuiz(){
  $('.startBox a').click(function(e){
    e.preventDefault();
    $('.hideStart').hide();
    $('.quiz').show();
    showQuestion();
  });
}





  //summary click
function clickSummary(){
  $('.summary').on('click', '.restartButton', function(event) {
    event.preventDefault();
    console.log("hi");
    restartQuiz()
  });
}

//next question
function nextQuestion(){
  $('.response').on('click', '.nextButton', function(event){
    updateCurrentQuestion();
    if (currentQuestion >= STORE.length) {
      showSummary();
    }
    else {
    $('.response').hide();
    $('.quiz').show();
    showQuestion(); }
  })
}




//generates question
function showQuestion(){
 let question = STORE[currentQuestion];
 if (currentQuestion < STORE.length){
  $('.quiz').html('');
  $('.quiz').append(`<h2>${question.title}</h2>`);
  $('.quiz').append(question.image);
  let form = $(`<form><fieldset></fieldset></form>`)
  let fieldSelector = $(form).find('fieldset');
  for (let i=0; i<question.answers.length; i++){
    $(fieldSelector).append(`<label><input class="radio" type="radio" name="answer" value="${question.answers[i]}" required><span class="answers">${question.answers[i]}</span></input></label>`)
 }
 $(fieldSelector).append(`<button type="submit" class="submitButton button"> Submit</button > `);
 $('.quiz').append(form);
}
}


  //click submit answer
function submitAnswer(){
  $('.quiz').on('submit', function (event) {
   event.preventDefault();
   $('.hideMe').hide();
   $('.response').show();
   let selected = $('input[name="answer"]:checked').val();
   let correct = STORE[currentQuestion].correct;
   if (selected === correct) {
     correctAnswer();
   } else {
     wrongAnswer();
   }
  });
}




//updates score by 1
function updateScore() {
  score++;
  $('.score').text(score);
}

//checks if answer is correct

function correctAnswer(){
  $('.response').html(
    `<h2>Your answer is correct!</h2><img src="images/correct-answer.jpg" alt="correct answer" class="images" width="200px"><p>You're the King of the World!</p><button type="button" class="nextButton button paddingBelow">Next</button>`);
    $('.response').show();
    updateScore();
}

function wrongAnswer(){
  $('.response').html(
    `<h2>Wrong answer! The correct answer was <br>•${STORE[currentQuestion].correct}</h2><img src="images/wrong-answer.jpg" alt="correct answer" class="images" width="200px"><p>Only a fool would say that!</p><button type="button" class="nextButton button paddingBelow">Next</button>`);
    $('.response').show();
}



//updates the current question number
function updateCurrentQuestion() {
  currentQuestion++;
  $('.currentQuestion').text(currentQuestion);
}

//shows summary
function showSummary(){
  $('.response').hide();
  $('.summary').show();
  $('.summary').html(`<h2>Summary</h2>
  <p class="pSummary">You scored ${score} out of ${STORE.length} correct!</p><p>Now take your big black cow and get out of here!</p>
  <button type="submit" class="button restartButton">Do It Again!</button>`);
}





//restarts the quiz
function restartQuiz(){
   $('.hideMe').hide();
    $('.hideStart').show();
    score = 0;
    currentQuestion =0;
    $('.score').text(0);
    $('.currentQuestion').text(0);
  showQuestion();
}
 






function makeQuiz(){
  startQuiz();
  submitAnswer();
  clickSummary();
  nextQuestion();
  restartQuiz();
}


$(makeQuiz)





  
  
  
  
  
