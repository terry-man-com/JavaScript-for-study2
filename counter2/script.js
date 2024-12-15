// アプリの説明
addEventListener("load", () => {
  alert("+ボタンを10回押した時間が出るよ!\n頑張って早く押してみてね♩♩♩");

});
// 数字カウンター並びに１０カウントタイム測定（プラスボタンのみ)
(() => {
  const $counter = document.getElementById("js-counter");
  const $voice = [
    new Audio("./music/「マーベラス」.mp3"),
    new Audio("./music/「エクセレント」.mp3"),
    new Audio("./music/「グッド」.mp3"),
  ]; // 結果表示時の音

  let startTime = null; // カウント開始時間を記録

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    if ($targetButton.textContent === "+") {
      if (startTime === null) {
        startTime = new Date();
      } // 初回クリック時にタイマー開始
      
      if (currentCount === 5) {
        changeBackGroundColor();
      }

      if (currentCount === 9) {
        const elapsedTime = (new Date() - startTime) / 1000; // 経過時間（秒）

        // 称号を決定
        let title = "";
        let sound = null;

        if (elapsedTime <= 1.5) {
          title = "高橋名人";
          sound = $voice[0];
        } else if (elapsedTime <= 2) {
          title = "高速連打マン";
          sound = $voice[1];
        } else {
          title = "見習い";
          sound = $voice[2];
        }

        displayMessage(`${elapsedTime.toFixed(1)}秒 - ${title}`);
        sound.play();
        changeDisplay();
        startTime = null;
      }

      $counter.textContent = currentCount + 1;
    } else {
      if (currentCount === -5) {
        changeBackGroundColor();
      }
      if (currentCount === -10) {
        $counter.textContent = 0;
        resetBackGroundColor();
        return;
      }

      $counter.textContent = currentCount - 1;
    }
  };

  for (
    let index = 0;
    index < document.getElementsByClassName("js-button").length;
    index++
  ) {
    document
      .getElementsByClassName("js-button")
      [index].addEventListener("click", (e) => clickHandler(e));
  }
})();

// メッセージ表示
const displayMessage = (message) => {
  const $message = document.createElement("h2");
  $message.setAttribute("id", "message-headline");
  $message.innerText = message;
  const $counter = document.getElementsByClassName("counter");
  const $counterNumber = document.getElementById("js-counter");
  $counter[0].insertBefore($message, $counterNumber);
};
// リセットボタンのみ表示させる
const changeDisplay = () => {
  const $minusButton = document.getElementById("minus-sign");
  const $plusButton = document.getElementById("plus-sign");
  $minusButton.setAttribute("hidden", "hidden");
  $plusButton.setAttribute("hidden", "hidden");
};

// 背景とボタンの色を変える。
const changeBackGroundColor = () => {
  const $counter = document.getElementsByClassName("counter");
  const $counterHeadLine = document.getElementById("counter-headline");
  const $counterNumber = document.getElementsByClassName("counter-number");
  const $button = document.getElementsByClassName("button");
  $counter[0].classList.add("counter-second");
  $counterHeadLine.classList.add("counter-headline-second");
  $counterNumber[0].classList.add("counter-number-second");
  // すべてのボタンにクラスを追加する
  for (let i = 0; i < $button.length; i++) {
    $button[i].classList.add("button-second");
  }
};
// 背景を戻す
export const resetBackGroundColor = () => {
  const $counter = document.getElementsByClassName("counter");
  const $counterHeadLine = document.getElementById("counter-headline");
  const $counterNumber = document.getElementsByClassName("counter-number");
  const $button = document.getElementsByClassName("button");
  $counter[0].classList.remove("counter-second");
  $counterHeadLine.classList.remove("counter-headline-second");
  $counterNumber[0].classList.remove("counter-number-second");
  // すべてのボタンの追加クラスを削除。
  for (let i = 0; i < $button.length; i++) {
    $button[i].classList.remove("button-second");
  }
};
