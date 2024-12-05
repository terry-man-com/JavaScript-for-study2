// カウンタープログラム
(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === "+") {
      if (currentCount === 5) {
        changeBackGroundColor();
      }
      if (currentCount === 10) {
        $counter.textContent = 0;
        resetBackGroundColor();
        return;
      }
      $counter.textContent = currentCount + 1;
    } else {
      if (currentCount === -10) {
        $counter.textContent = "0";
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

// 5カウント時背景を変更
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
  // すべてのボタンにクラスを追加する
  for (let i = 0; i < $button.length; i++) {
    $button[i].classList.remove("button-second");
  }
};

