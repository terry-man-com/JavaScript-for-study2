addEventListener("load", () => {
  alert("昨日の自分を超えろ、、、");
  startBGM();
});

const startBGM = () => {
  const Bgm = new Audio("./music/maou_short_14_shining_star.mp3");
  Bgm.play();
  };