const question = "幻影旅団の団長は？"
const answers = [
  'クロロ・ルシルフル',
  'パクノダ',
  'ジャイロ',
  'トンパ'
];

const correct = "クロロ・ルシルフル";

document.getElementById("js-question").textContent = question;

for (let i = 0; i < answers.length; i++) {
  document.getElementsByClassName("btn-primary")[i].textContent = answers[i];
}

const $button = document.getElementsByClassName("btn-primary");
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

$button[0].addEventListener('click', () => {
  if (correct === $button[0].textContent) {
    alert("正解！");
  } else {
    alert("不正解、、、");
  }
});
$button[1].addEventListener("click", () => {
  if (correct === $button[1].textContent) {
    alert("正解！");
  } else {
    alert("不正解、、、");
  }
});
$button[2].addEventListener("click", () => {
  if (correct === $button[2].textContent) {
    alert("正解！");
  } else {
    alert("不正解、、、");
  }
});
$button[3].addEventListener("click", () => {
  if (correct === $button[3].textContent) {
    alert("正解！");
  } else {
    alert("不正解、、、");
  }
});
