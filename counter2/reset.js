import { resetBackGroundColor } from "./script.js";

(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = () => {
    $counter.textContent = 0;
    setButton();
    resetBackGroundColor();
    if (document.getElementById("message-headline")) {
      removeMessage();
    }
  };

  document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();

// プラスボタンとマイナスボタンを非表示にさせる。
const setButton = () => {
    const $minusButton = document.getElementById("minus-sign");
    const $plusButton = document.getElementById("plus-sign");
    $minusButton.removeAttribute("hidden", "hidden");
    $plusButton.removeAttribute("hidden", "hidden");
}
// 応援メッセージ削除
export const removeMessage = () => {
  const $counter = document.getElementsByClassName("counter");
  const $messageHeadline = document.getElementById("message-headline");
  if ($messageHeadline) {
    $counter[0].removeChild($messageHeadline);
  }
};