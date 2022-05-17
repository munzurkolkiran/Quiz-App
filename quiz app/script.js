const quizData = [{
        question: "Türkiye'nin başkenti neresidir ?",
        a: "adana",
        b: "ankara",
        c: "izmir",
        d: "istanbul",
        correct: "b",
    },
    {
        question: "Dünyanın en büyük çölü hangisidir?",
        a: "Gobi Çölü",
        b: "Büyük Havza Çölüra",
        c: "Büyük Sahra Çölü",
        d: "Büyük Havza Çölü",
        correct: "c",
    },
    {
        question: "Suç ve Ceza eseri kiminir?",
        a: "Orhan Pamuk",
        b: "Sait Faik Abasıyanık",
        c: "Lev Tolstoy",
        d: "Fyodor Dostoyevski",
        correct: "d",
    },
    {
        question: "2020 yılında en çok kullanılan programlama dili hangisidir?",
        a: "Java",
        b: "Python",
        c: "JavaScript",
        d: "C",
        correct: "c",
    },
    {
        question: "Dünyanın en tehlikeli canlısı nedir?",
        a: "Insan",
        b: "Kaplan",
        c: "Aslan",
        d: "Timsah",
        correct: "a",
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h3>Tebrikler doğru sayınız : ${score}/${quizData.length} </h3>
                
                <button onclick="location.reload()">Tekrar dene</button>
            `;
        }
    }
});