# Step6 アウトプット
## 10カウントタイム測定
## 概要
- カウンターが10になったタイムを表示する。
## 各ボタンの機能
### −(マイナス)ボタン
- ボタンを押下すると−1ずつ数が減少する。−1から−10までの数字をカウントできる。−10の状態でボタンを押下すると０に戻る
### +(プラス)ボタン
- ０カウントで押すとタイム測定開始。1ずつ数が増加する。カウントが10になった時点でタイムを表示する。
### Startボタン
- +(プラス)ボタンを表示させる。
- **ボタンを押すと音楽が流れるので音量注意**
### Resetボタン
- カウント数、音楽、背景をリセットする。
## アレンジ
### 導入時
- ロードした時にアラートでアプリ説明。
### ＋ボタン・−ボタン共通機能
- 6カウント目で背景が黒・ボタンが白に変わる。
### −ボタン
- −10の状態でボタンを押下すると０に戻る。（最初にできた機能のため、記念に残している。）
### +ボタン
- カウンターが10になった時間を測定する。
- タイムと時間に応じた称号・音声を表示・再生する。
- タイムと称号表示時に歓声を流す。
- 10カウント時に押された場合、タイム測定用変数を初期化する。
### Startボタン
- 音楽を流す。
- alertでゲームの説明をする。
- 開始の合図を流す
- カウンターの数字を０にする。（数字がマイナス時も０からスタートさせる。）
### Resetボタン
- ＋ボタンが表示されていた場合、非表示とし、Startボタンを表示させる。（元の表示に戻す。）
- 背景が変更されていた場合は、背景を戻す。
- タイム測定後に押下された場合、メッセージを消去、初期画面に戻す。また、タイム測定用変数を初期化する。
- 音楽と歓声を止める。