
// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Câu 1: Quần áo mang phong cách thể thao thường kết hợp với.",
        imgSrc : "./Quiz/img/ảnh.jpg",
        choiceA : "Giày búp bê",
        choiceB : "Giày thể thao",
        choiceC : "Giày cao gót",
        correct : "B"
    },{
        question : "Câu 2: Phong cách dân gian có thể được mặc trong dịp nào?",
        imgSrc : "./Quiz/img/ảnh.jpg",
        choiceA : "Tết cổ truyền",
        choiceB : "Thi đấu thể thao",
        choiceC : "Phỏng vấn xin việc",
        correct : "A"
    },{
        question : "Câu 3: Người ta thiết kế công trình/ Tôi đây thiết kế áo mình, áo ta” nói về nghề nào dưới đây?",
        imgSrc : "./Quiz/img/ảnh.jpg",
        choiceA : "Kỹ sư xây dựng",
        choiceB : "Kinh doanh quần áo",
        choiceC : "Thiết kế thời trang",
        correct : "C"
    },
    {
        question : "Câu 4:  Thời trang thay đổi về?",
        imgSrc : "./Quiz/img/ảnh.jpg",
        choiceA : "Kiểu dáng",
        choiceB : "Chất liệu",
        choiceC : "2 đáp án trên",
        correct : "C"
    },
    {
        question : "Câu 5:  Phong cách cổ điển có đặc điểm?",
        imgSrc : "./Quiz/img/ảnh.jpg",
        choiceA : "Đi học",
        choiceB : "Đi làm",
        choiceC : "sự kiện",
        correct : "C"
    },
    

];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; // 30s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















