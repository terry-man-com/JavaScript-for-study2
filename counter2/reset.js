import { resetBackGroundColor } from "./script.js";

(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = () => {
    $counter.textContent = 0;
    resetBackGroundColor();
  };

  document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();