# JavaScript-for-study2
Javascriptの学習用リポジトリです。
### jsファイルの外部参照について（別ファイルの関数を参照する方法）ES Modules
- HTMLのscriptファイルをモジュール化する。
```
<script type="module" src="./script.js"></script>
<script type="module" src="./reset.js"></script>
```
 - モジュール化することで外部からのファイルを参照することができるようになる。デフォルトだと、関数名の競合や元ファイルの変更が外部ファイルにも影響を与えることを防ぐため、参照できないようになっている。

- インポートとエクスポート
```
   // script.js
   export const myFunction = () => { ... };

   // reset.js
   import { myFunction } from './script.js';
```
 - 他のモジュールから関数や変数をインポートしたり、他のモジュールに対してエクスートしたりできます。
 - スコープ: モジュール内の変数は、デフォルトでモジュールスコープに限定され、グローバルスコープには影響を与えません。-> カプセル化
 -  非同期読み込み: モジュールは非同期に読み込まれ、他のスクリプトの実行をブロックしません。
 - モジュールはデフォルトエクスポートを持つことができ、インポート時に任意の名前を使用できます。

- Tips (外部参照をデフォルトで許可してしまった時の弊害)
 - 名前の衝突
 もしすべての変数や関数がデフォルトで外部からアクセスできると、異なるモジュールで同じ名前の変数や関数を定義した場合、衝突が起こる可能性があります。これにより、どの変数や関数が実際に使われているのかがわからなくなり、バグの原因になります。
 - カプセル化の欠如
 モジュールの主な目的の一つは、カプセル化です。カプセル化により、モジュール内の実装が外部に影響を与えず、逆に外部からの影響を受けないようにします。これにより、モジュールの内部実装を変更しても、外部のコードに影響を与えずに済みます。デフォルトで外部参照を許可すると、このカプセル化が失われ、モジュールの変更が他の部分に影響を及ぼす可能性があります。
 - 依存関係の管理
 モジュールが外部から自由にアクセスできると、依存関係が複雑になり、どのモジュールがどのモジュールに依存しているのかがわかりにくくなります。これにより、コードのメンテナンスが難しくなります。
 - セキュリティの問題
 外部からのアクセスを許可すると、意図しないコードがモジュールにアクセスできる可能性があります。これにより、セキュリティ上のリスクが増加します。

- カウンターアプリにおける10クリックするまでの経過時間を測り、称号と音声を流す機能について
 - カウント開始時間を保存する変数を追加
 - カウントが10になったとき、経過時間を計測し、結果と称号を表示
 - 称号に応じて音声を切り替える
 
 - **経過時間を保持する変数と経過時間の出し方と画面表示のさせ方**
   ```
   startTime = new Date(); // 初回クリック時にタイマー開始

   const elapsedTime = (new Date() - startTime) / 1000; // 経過時間（秒）(例はif文で9回目のクリックの時間を測っている。)
   displayMessage(`${elapsedTime.toFixed(1)}秒`); //経過時間を下１桁までとし、画面に表示
   ```
 - `startTime = new Date();`で初回クリックしたときの時間を生成し、格納する。`const elapsedTime = (new Date() - startTime) / 1000;`で目的の数に達した時間を生成`new Date()`、初回クリック時間を引き、`/1000`1000で割ることでミリ秒から秒に直す。そのままだと、桁数が多く、画面表示するには見た目が煩雑になるので、`elapsedTime.toFixed(1)秒`でしも１桁表示に直す。
  - `toFixed()メソッド`：Number型のインスタンスメソッド。`const num = 1.56`と宣言した時にjavascriptでは自動でNumber型に変換。※ JavaScriptでは数値は全てNumber型、intやfloatはないので混同しないように注意。`num.toFixed(1)`とすれば、小数１桁に指定し変数に格納された値を丸める。指定した桁数以下の桁がある場合は四捨五入され、指定した桁数に満たない場合は０で埋められる。その後、文字列型で値を返す。つまり返り値を計算する場合はparseIntメソッドで数値に変換し直すことが必要になる。
  - ちなみに変数に格納した値のデータ型を確認したい場合は`console.log(typeof 変数名)`で確認することが可能である。
  - `${elapsedTime.toFixed(1)}秒`について
   - 変数を文字列に埋め込む方法として、テンプレートリテラルと文字列の結合がある。
    - テンプレートリテラル:文全体をバッククォート(``)と出力したい変数を${}で囲む。${}の中には変数や計算式、関数の呼び出しを直接記述する。可読性が高く、長い文字列や複数の変数を含む場合に便利。こちらの方が、モダンな記載方法で推奨される。
 - 称号並びに音の設定方法について
  - 10カウントタイムが終了した時間に応じた、称号と音を鳴らしたい。
  ```
   let title = ""; // 称号用変数
   let sound = null; // 音の格納用変数

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
   ```
  - 変数の生成と初期化
   - 変数`title`には称号の文字列を格納するために空文字`""`を入れて初期化。`null`を入れてしまうとタイプミスで`nu`と入力してしまった場合に値として格納されてします。
   - 変数`sound`には音声ファイルが格納されるため`null`を設定し、初期化を行う。
   - null と空文字（""）の違い
      - 空文字
         - 文字列型として「空」であることを表す。
         - 今後、必ず文字列として使われることを示唆。
      - null
         - 「値がまだ設定されていない」という状態を表す。
   - **変数初期化のルール**
      - 文字列を格納する場合
         - ""（空文字）を初期値にする。
         - 後で + や += を使う場合も安全。
      - それ以外のデータ型:
         - 初期値は null を使う。
         -「未設定」を表現しつつ、後で値を確実に代入する予定を示唆。

- `displayMessage`関数の改善（冗長な書き方の改善）
   ```
   const displayMessage = (message) => {
   const $message = document.createElement("h2");
   $message.setAttribute("id", "message-headline");
   $message.innerText = message;
   const $counter = document.getElementsByClassName("counter");
   const $counterNumber = document.getElementById("js-counter");
   $counter[0].insertBefore($message, $counterNumber);
   };
   ```
   - h2要素（称号）を`counter`と`js-counter`の間に挿入したい。
   - もっと直接、`counter`の直下または`js-counter`の直前を指定して挿入できないか。この2つのうちの一個だけを取得して挿入したい。
   - `insertAdjacentElement` や `append` / `prepend`を使用する。
      - insertAdjacentElementについて
         - 指定した要素の 「前」または「後」 に新しい要素を挿入する。
         - 引数に挿入位置を指定します
            - `beforebegin`: 対象要素の直前
            - `afterbegin`: 対象要素の最初の子要素として
            - `beforeend`: 対象要素の最後の子要素として
            - `afterend`: 対象要素の直後
            ```
            const displayMessage = (message) => {
            const $message = document.createElement("h2");
            $message.setAttribute("id", "message-headline");
            $message.innerText = message;

            const $counterNumber = document.getElementById("js-counter");
            $counterNumber.insertAdjacentElement("beforebegin", $message); // js-counter直前に挿入
            };
            ```
            - insertAdjacentElementで指定した位置に直接挿入
      - appendまたはprependを使う：対象要素を子要素として挿入する。
         - append：子要素として最後に追加
         - prepend：子要素として最初に追加
            ```
            const displayMessage = (message) => {
            const $message = document.createElement("h2");
            $message.setAttribute("id", "message-headline");
            $message.innerText = message;

            const $counter = document.getElementsByClassName("counter")[0];
            $counter.prepend($message); // counter内の最初の子要素として挿入
            };
            ```
            - 記載はシンプルだが、親要素の最初か末尾にしか挿入できない。
   - insertBeforeでも任意の位置に挿入可能。
   ```
   const parent = document.querySelector(".parent-class");
   const newElement = document.createElement("div");
   newElement.textContent = "新しい要素";

   // 親要素内の2番目の子要素の直前に挿入
   const reference = parent.children[1]; // 親要素の2番目の子要素を基準に指定
   parent.insertBefore(newElement, reference);
   ```
   - `parent.children`を使うことで特定の子要素を指定できる。（挿入する前の位置）
   - 基準がない時（末尾に挿入する時）は第二引数にnullを入れる。