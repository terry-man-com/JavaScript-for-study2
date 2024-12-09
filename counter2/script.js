(() => {
  const $counter = document.getElementById("js-counter");
  const $audioSuccess = document.getElementById("audio"); // 称号音
  const $audioStar = new Audio("./music/「すごいすごい」.mp3"); // 他の音

  let startTime = null; // カウント開始時間を記録

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    if ($targetButton.textContent === "+") {
      if (startTime === null) startTime = new Date(); // 初回クリック時にタイマー開始

      if (currentCount === 29) {
        const elapsedTime = (new Date() - startTime) / 1000; // 経過時間（秒）

        // 称号を決定
        let title = "";
        let sound = null;

        if (elapsedTime <= 3) {
          title = "ビギナー";
          sound = $audioStar;
        } else if (elapsedTime <= 6) {
          title = "エキスパート";
          sound = $audioStar;
        } else {
          title = "マスター";
          sound = $audioSuccess;
        }

        displayMessage(`${elapsedTime.toFixed(1)}秒 - ${title}`);
        sound.play();

        // リセット
        startTime = null;
        $counter.textContent = 0;
        resetBackGroundColor();
        return;
      }

      $counter.textContent = currentCount + 1;
    } else {
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
  if ($messageHeadline) $counter[0].removeChild($messageHeadline);
};
