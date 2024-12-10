(() => {
  const $counter = document.getElementById("js-counter");
  const $audioSuccess = document.getElementById("audio"); // 称号音
  const $audioStar = new Audio("./music/「すごいすごい」.mp3"); // 他の音

  let startTime = null; // カウント開始時間を記録

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    if ($targetButton.textContent === "+") {
      if (startTime === null) {
        startTime = new Date(); } // 初回クリック時にタイマー開始

      if (currentCount === 5) {
        changeBackGroundColor();
      }

      if (currentCount === 9) {
        const elapsedTime = (new Date() - startTime) / 1000; // 経過時間（秒）

        // 称号を決定
        let title = "";
        let sound = null;

        if (elapsedTime <= 3) {
          title = "高橋名人級";
          sound = $audioStar;
        } else if (elapsedTime <= 6) {
          title = "連打エキスパート";
          sound = $audioStar;
        } else {
          title = "見習い連打マン";
          sound = $audioSuccess;
        }

        displayMessage(`${elapsedTime.toFixed(1)}秒 - ${title}`);
        sound.play();
      }
      if (currentCount === 10) {
        startTime = null;
        $counter.textContent = 0;
        resetBackGroundColor();
        removeMessage();
        return;
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
  const $message = document.createElement("h1");
  $message.setAttribute("id", "message-headline");
  $message.innerText = message;
  const $counter = document.getElementsByClassName("counter");
  const $counterNumber = document.getElementById("js-counter");
  $counter[0].insertBefore($message, $counterNumber);
};

// 応援メッセージ削除
export const removeMessage = () => {
  const $counter = document.getElementsByClassName("counter");
  const $messageHeadline = document.getElementById("message-headline");
  $counter[0].removeChild($messageHeadline);
};
// 背景とボタンの色を変える。
const changeBackGroundColor = () => {
  const $counter = document.getElementsByClassName("counter");
  const $counterNumber = document.getElementsByClassName("counter-number");
  const $button = document.getElementsByClassName("button");
  $counter[0].classList.add("counter-second");
  $counterNumber[0].classList.add("counter-number-second");
  // すべてのボタンにクラスを追加する
  for (let i = 0; i < $button.length; i++) {
    $button[i].classList.add("button-second");
  }
};
// 背景を戻す
export const resetBackGroundColor = () => {
  const $counter = document.getElementsByClassName("counter");
  const $counterNumber = document.getElementsByClassName("counter-number");
  const $button = document.getElementsByClassName("button");
  $counter[0].classList.remove("counter-second");
  $counterNumber[0].classList.remove("counter-number-second");
  // すべてのボタンの追加クラスを削除。
  for (let i = 0; i < $button.length; i++) {
    $button[i].classList.remove("button-second");
  }
};
