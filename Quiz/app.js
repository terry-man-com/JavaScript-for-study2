// クイズオブジェクト
const quiz = [
  {
    question: "幻影旅団の団長は？",
    answers: ["クロロ・ルシルフル", "パクノダ", "ジャイロ", "トンパ"],
    correct: "クロロ・ルシルフル",
  },
  {
    question: "湘北高校のPFは？",
    answers: ["桜木花道", "牧伸一", "三井寿", "田岡茂一"],
    correct: "桜木花道",
  },
  {
    question: "中村政紀の好きな筋トレは？",
    answers: ["スクワット", "スクワット", "スクワット", "ワンハンドローイング"],
    correct: "スクワット",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByClassName("btn-primary");

const setUpQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;

    for (let i = 0; i < $button.length; i++) {
    $button[i].textContent = quiz[quizIndex].answers[i];
    }
  };


setUpQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
      alert("正解！");
      score++;
    } else {
      alert("不正解、、、");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
      setUpQuiz();
    } else {
      alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です。')
    }
}
for (let i = 0; i < $button.length; i++) {
  $button[i].addEventListener("click", (e) => {
  clickHandler(e);
});
}

// $button[1].addEventListener("click", (e) => {
//  clickHandler(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });
