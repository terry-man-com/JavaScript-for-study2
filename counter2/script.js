// カウンタープログラム
(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if($targetButton.textContent === "+"){
      if (currentCount === 5){
        changeDarkMode();
      }
      if(currentCount === 10){
        $counter.textContent = 0;
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
  }


  for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
    document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e));
  }
})();
// 5カウント時背景を変更
const changeDarkMode = () => {

  const $counter = document.getElementById("counter");
  console.log($counter);
  const $counterNumber = document.getElementById("counter-number");
  $counter.classList = "counter-second";
  $counterNumber.classList = "counter-number-second";

};
