
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const halloweenDate = new Date(currentYear, 9, 31); // October 31


    if (now > halloweenDate) {
        halloweenDate.setFullYear(currentYear + 1);
    }

    const diff = halloweenDate - now; 


    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerText = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);

// BACKGROUND Change By Time //
function updateBackgroundBasedOnTime() {
    var now = new Date();
    var hour = now.getHours();
    var backgroundElement = document.body; 

    if (hour >= 6 && hour < 12) { // Morningg
        backgroundElement.style.backgroundImage = "url('./images/window.jpg')";
    } else if (hour >= 12 && hour < 17) { // Afternoon
        backgroundElement.style.backgroundImage = "url('./images/rabbit.jpg')";
    } else if (hour >= 17 && hour < 20) { // Evening
        backgroundElement.style.backgroundImage = "url(./images/pexels-pixabay-247122.jpg)";
    } else { // Night
        backgroundElement.style.backgroundImage = "url('./images/hands.jpg')";
    }

    backgroundElement.style.backgroundSize = "cover";
    backgroundElement.style.backgroundPosition = "center";
    backgroundElement.style.backgroundRepeat = "no-repeat";
    backgroundElement.style.backgroundAttachment = "fixed";
}



window.onload = updateBackgroundBasedOnTime;
setInterval(updateBackgroundBasedOnTime, 3600000);




// STORY JOKES //

const storiesAndJokes = [
    "Why don't ghosts like rain? It dampens their spirits!",
    "What room does a ghost not need? A living room!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the vampire read the newspaper? He heard it had great circulation.",
    "How do you fix a damaged jack-o-lantern? You use a pumpkin patch!"
];

function showStory() {
   
    const audio = document.getElementById('audio');
    audio.play();

    const storyDisplay = document.getElementById('storyDisplay');
    const randomIndex = Math.floor(Math.random() * storiesAndJokes.length);
    storyDisplay.textContent = storiesAndJokes[randomIndex];
}



// QUIZ //
const questions = [
    {
        question: "What is Halloween?",
        answers: ["A harvest festival", "A ghost celebration", "All Hallows' Eve", "A pumpkin day"],
        correctIndex: 2
    },
    {
        question: "How many pounds did the world's largest pumpkin pie weigh?",
        answers: ["89 lbs", "350 lbs", "3699 lbs", "2150 lbs"],
        correctIndex: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.onclick = () => selectAnswer(index);
        button.classList.remove('selected'); 
    });
    updateScore(); 
}

function selectAnswer(index) {
    let buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => button.classList.remove('selected')); 
    buttons[index].classList.add('selected'); 
    questions[currentQuestionIndex].selectedAnswer = index;
}

function submitQuiz() {
    const question = questions[currentQuestionIndex];
    if (question.selectedAnswer === question.correctIndex) {
        score++;
    }
   
    if (currentQuestionIndex + 1 < questions.length) {
        currentQuestionIndex++;
        showQuestion();
    } else {
      
        document.getElementById('result').textContent = `Quiz complete! Your score: ${score}/${questions.length}`;
        document.getElementById('submitBtn').style.display = 'none';
    }
    updateScore();
}

function updateScore() {
    document.getElementById('result').textContent = `Current score: ${score}/${questions.length}`;
}

document.addEventListener('DOMContentLoaded', showQuestion);

// RECIPE //







