// 管理関係の変数
// カウント開始時間を記録用変数
let startTime;
// 背景が変わったどうかを判定するフラグ
//（changeBackGroundColor関数使用の有無）
let isChangeBackGroundColorUsed;
// startボタン押下のフラグ
let isStartButtonPushed;

// アプリの説明
addEventListener("load", () => {
  alert("Startボタンを押すと10カウントした時間を測定できるよ!!\n音が流れるから注意してね〜😃");
});

// 数字カウンター並びに１０カウントタイム測定（プラスボタンのみ)
(() => {
  const $counter = document.getElementById("js-counter");
  // 結果表示時の音
  const voice = [
    new Audio("./music/「マーベラス」.mp3"),
    new Audio("./music/「エクセレント」.mp3"),
    new Audio("./music/「グッド」.mp3"),
  ];

  startTime = null;
  isChangeBackGroundColorUsed = false;
  isStartButtonPushed = false;

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    if ($targetButton.textContent === "Start"){
      isStartButtonPushed = true;
      startTenCount();
      $counter.textContent = 0;
    }
    else if ($targetButton.textContent === "+") {
      // 初回クリック時にタイマー開始
      if (startTime === null) {
        startTime = new Date();
      }
      // 背景色の変更をデフォルトに戻し、フラグ更新（カウンタ-5以上）
      if (currentCount >= -6 && isChangeBackGroundColorUsed === true) {
        resetBackGroundColor();
        isChangeBackGroundColorUsed = false;
      }
      // 背景色を変更、フラグを更新（カウンタ５以上）
      if (currentCount >= 5 && isChangeBackGroundColorUsed != true) {
        changeBackGroundColor();
        isChangeBackGroundColorUsed = true;
      }
      // 結果発表〜〜〜
      if (currentCount === 9) {
        const elapsedTime = (new Date() - startTime) / 1000; // ms->s(秒)に変更

        // 称号と音楽を格納する変数の設定
        let title = ""; // 称号用変数
        let sound = null; // 音の格納用変数

        if (elapsedTime <= 1.3) {
          title = "高橋名人";
          sound = voice[0];
        } else if (elapsedTime <= 1.5) {
          title = "シャア専用DOM";
          sound = voice[1];
        } else {
          title = "人間";
          sound = voice[2];
        }

        displayMessage(`${elapsedTime.toFixed(1)}秒 - ${title}`);
        fanfare.play();
        sound.play();
        changeDisplay();
        startTime = null;
      }
      $counter.textContent = currentCount + 1;
    } else {
      // 背景色をデフォルトに戻す（カウンタ５以下）
      if (currentCount <= 6 && isChangeBackGroundColorUsed === true) {
        resetBackGroundColor();
        isChangeBackGroundColorUsed = false;
      }
      // 背景色を変更、フラグの更新（カウンタ-6以下）
      if (currentCount <= -5 && isChangeBackGroundColorUsed != true) {
        changeBackGroundColor();
        isChangeBackGroundColorUsed = true;
      }
      // 自動的に−11以下は０カウントに戻す処理。
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

// リセットボタン機能
(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = () => {
    $counter.textContent = 0;
    startTime = null;
    resetBackGroundColor();
    fanfareStop();
    if (isStartButtonPushed) {
      setMinusButton();
      changeButton();
      stopMusic();
    }
    if (document.getElementById("message-headline")) {
      removeMessage();
    }
    isChangeBackGroundColorUsed = false;
    isStartButtonPushed = false;
  };

  document
    .getElementById("js-reset-button")
    .addEventListener("click", clickHandler);
})();

// 10カウントタイム測定
// Bgm
const music = new Audio("./music/aux-enfers.mp3");
// Bgm再生
const startMusic = () => {
  music.currentTime = 10.5;
  music.loop;
  music.play();
};
// Bgm停止
const stopMusic = () => {
  music.pause();
  music.currentTime = 0;
};
// startボタン押下時の処理
const startVoice = new Audio("./music/「ゴー」.mp3");

const startTenCount = () => {
      startMusic();
      setTimeout(() => {
        alert("＋ボタンをなるべく早く押してね！");
        startVoice.play();
        changeButton();
      }, 100);
};

// Startボタン、＋ボタン表示・非表示切り替え
const changeButton = () => {
  const $startButton = document.getElementById("start-button");
  const $plusButton = document.getElementById("plus-sign");

  if (!$startButton.hidden) {
      $startButton.setAttribute("hidden", "hidden");
      $plusButton.removeAttribute("hidden", "hidden");
  } else {
      $startButton.removeAttribute("hidden", "hidden");
      $plusButton.setAttribute("hidden", "hidden");
  }
};
// ファンファーレ
const fanfare = new Audio("./music/歓声と拍手1.mp3");

const fanfareStop = () => {
    fanfare.pause();
    fanfare.currentTime = 0;
};

// メッセージ表示※
const displayMessage = (message) => {
  const $message = document.createElement("h2");
  $message.setAttribute("id", "message-headline");
  $message.innerText = message;
  const $counter = document.getElementsByClassName("counter");
  const $counterNumber = document.getElementById("js-counter");
  $counter[0].insertBefore($message, $counterNumber);
};

// メッセージ削除
const removeMessage = () => {
  const $counter = document.getElementsByClassName("counter");
  const $messageHeadline = document.getElementById("message-headline");
  if ($messageHeadline) {
    $counter[0].removeChild($messageHeadline);
  }
};

// リセットボタンのみ表示させる
const changeDisplay = () => {
  const $minusButton = document.getElementById("minus-sign");
  const $plusButton = document.getElementById("plus-sign");
  $minusButton.setAttribute("hidden", "hidden");
  $plusButton.setAttribute("hidden", "hidden");
};

// マイナスボタンを表示にさせる。
const setMinusButton = () => {
  const $minusButton = document.getElementById("minus-sign");
  $minusButton.removeAttribute("hidden", "hidden");
};

// ＋ボタン・−ボタン・Resetボタン共通機能
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
const resetBackGroundColor = () => {
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
