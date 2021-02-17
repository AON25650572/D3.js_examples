# D3.js例文辞書

http://www.openspc2.org/reibun/D3.js/pdf/D3.pdf

http://www.openspc2.org/reibun/D3.js/

## 基本

### 1. D3jsを読み込む

D3.jsを読み込むにはhttp://d3js.org/d3.v3.zipからダウンロードしたファイルを使用するか、CDNを利用して読み込ませます。D3.jsサイトから読み込む場合はhttp://d3js.org/d3.v3.min.jsになります。以下のサンプルではD3.jsのサイトから直接読み込んでいます。（URL先保存してもいけるか？＝＞いけた）

**※.jsのファイルにしっかり分けた方がいいっぽい？**

## ファイル

### 1. TSVを読み込む

D3.jsでタブ区切りテキストを読み込むには、d3.tsv()メソッドを使います。最初のパラメーターに読み込むタブ区切りテキストのパスを指定します。最後のパラメーターには読み込んだデータを処理するための関数を指定します。関数にはエラーとデータ全体が渡されます。タブ区切りテキストの1行目は、データのラベルになります。このラベルをデータのプロパティとして使用することができます。

### 4. JSON形式のファイルを読み込む

D3.jsでJSON形式のファイルを読み込むには、d3.json()メソッドを使います。最初のパラメーターに読み込むJSON形式のファイルのパスを指定します。最後のパラメーターには読み込んだデータを処理するための関数を指定します。関数にはエラーとデータ全体が渡されます。JSON形式のファイルの場合、データに割り当てた名前(Key)が、JavaScriptのプロパティに対応します。サンプルの場合、Keyがlabelというプロパティ名で、データがvalueというプロパティ名でアクセスすることができます。

## DOM操作／指定

### 1. DOM要素をID名で指定する

D3.jsでDOM要素をID名で指定するにはselect()メソッドを使い"#ID名"のように指定します。例えば要素のID名がdata12ならd3.select("#data12")となります。CSSセレクタで#ID名と指定するのと同じです。

### 2. DOM要素を直接指定する

D3.jsのselector()メソッドのパラメーターにはDOM要素を直接指定することができます。以下のサンプルのようにdocument.getElementById()などを使って指定した要素をselector()のパラメーターに指定します。

### 3. DOM要素の属性値を設定する

D3.jsでDOM要素の属性値を設定するにはattr()メソッドを使います。最初のパラメーターに属性名を、2番目のパラメーターに設定する値・文字列を指定します。以下のサンプルでは画像をクリックするとsrc属性の内容が変更され他の画像が表示されます。（適当にalt要素をつけとけ）

### 4. 複数のDOM要素をクラス名で指定する

D3.jsで複数のDOM要素をクラス名で指定するにはselectAll()メソッドを使います。パラメーターには".CSSクラス名"のように指定します。例えば要素のCSSクラス名が.turboならd3.selectAll(".turbo")となります。CSSセレクタでクラス名と指定するのと同じです。

### 5. 複数のDOM要素をノードで指定する

D3.jsで複数のDOM要素をノードで指定するにはselectAll()メソッドを使います。パラメーターにgetElementsByTagName()で取得した要素や、子ノードなどを指定します。例えば以下のサンプルのようにdiv要素内にあるp要素を書き換える場合、p要素のノードをselectAll()のパラメーターに指定します。

### 6. 要素内のHTMLデータを読み出す

D3.jsで要素内のHTMLデータを読み出すにはselect()メソッドで指定した後にhtml()メソッドを呼び出します。すると要素内のHTMLデータ（HTML文字列）を読み出すことができます。単純にテキストとして読み出したい場合はtext()メソッドを使ってください。

### 7. 要素内のテキストデータを読み出す

D3.jsで要素内のテキストデータを読み出すにはselect()メソッドで指定した後にtext()メソッドを呼び出します。すると要素内の文字列を読み出すことができます。この場合、HTMLタグなどは取得されません。HTMLタグも含めて取得したい場合はhtml()メソッドを使ってください。

## 表／テーブル

### 1. 新規にテーブルを生成して1次元配列の数値データを出力する

D3.jsで新規にテーブルを生成して1次元配列の数値データを出力するにはappend()メソッドを使ってtable, tr, td要素を追加します。データを出力する場合、selectAll("td")としてtd要素を処理対象として選択します。これがないとサンプルの場合、ページの最後にtd要素が追加されてしまいます。次にdata()メソッドを使って出力するデータ（配列）を指定します。次にenter()メソッドを実行し、その後にappend("td")としてtd要素を追加します。追加したらtd要素内にデータを出力します。これはtext()メソッドを使います。パラメーターにStringを指定するとデータがそのまま出力されます。

### 2. 新規にテーブルを生成して1次元配列の数値データを加工して出力する

D3.jsで新規にテーブルを生成して1次元配列の数値データを加工して出力するにはデータを出力する際に、text()メソッドに関数を指定します。この関数にはデータの要素が1つ渡されます。関数内で処理した後に出力する内容をreturnで戻します。サンプルの場合、値にcmを追加して出力しています。
なお、D3.jsでデータをテーブル内に出力する方法については[こちらのページを参照](http://www.openspc2.org/reibun/D3.js/code/table/0001/index.html)してください。

### 3. 新規にテーブルを生成して2次元配列の数値データを出力する

D3.jsで新規にテーブルを生成して2次元配列の数値データを出力するには1行ごとにデータを取り出します。これはdata()メソッドに関数を指定し、関数内でd3.entries()メソッドを使ってデータを返します。以後データはkey, valueプロパティでアクセスすることができるようになります。このため、データを出力する際にtext()メソッドに関数を指定し関数内で渡されたデータ（オブジェクト）のvalueプロパティを返せば、2次元配列の要素1つが出力されます。
なお、D3.jsでデータをテーブル内に出力する方法については[こちらのページを参照](http://www.openspc2.org/reibun/D3.js/code/table/0001/index.html)してください。

### 4. 新規にテーブルを生成して2次元配列の数値データを加工して出力する

D3.jsで新規にテーブルを生成して2次元配列の数値データを加工して出力するにはデータを出力する際にtext()メソッドに関数を指定します。この関数内で渡されたデータ（オブジェクト）のvalueプロパティに文字列を追加したり計算した後、returnで結果を返せば加工されたデータが出力されます。
なお、D3.jsで2次元配列のデータをテーブル内に出力する方法については[こちらのページを参照](http://www.openspc2.org/reibun/D3.js/code/table/0003/index.html)してください。

### 6. CSVファイルを読み込んでデータを出力する（1行に複数のデータがある場合）

D3.jsでCSVファイルを読み込んでデータを出力するにはd3.csv()メソッドを使います。最初のパラメーターに読み込むCSVファイルのパスを指定します。2番目のパラメーターにCSVファイルを読み込んだ場合に呼び出す関数を指定します。関数にはエラー情報と読み込んだデータが渡されます。今回読み込むCSVファイルの内容は1行に複数のデータがある場合です。（下記参照）
data()メソッドでCSVデータを読み込んだ後、再度data()メソッドを使って1行ごとにデータを取り出します。これはdata()メソッドに関数を指定し、関数内でd3.entries()メソッドを使ってデータを返します。以後データはkey, valueプロパティでアクセスすることができるようになります。このため、データを出力する際にtext()メソッドに関数を指定し関数内で渡されたデータ（オブジェクト）のvalueプロパティを返せば、CSVファイルに書かれた複数の項目が出力されます。

### 9. 1秒ごとに更新されるデータをテーブルに出力する

D3.jsで1秒ごとに更新されるデータをテーブルに出力するにはenter()、exit()、remove()としてJavaScriptのsetInterval()を使います。サンプルでは更新されるデータはプログラムによって生成しています。（乱数値）
まず、selectAll()メソッドでtr要素を指定します。これがデータ(__data__)の格納先の要素になります。data()メソッドでデータを取得しenter()とappend()メソッドを使ってテーブルのセル要素(tr,td)を生成します。次にselectAll()として不要なtr要素を削除します(tr要素の削除で子要素であるtd要素も削除されます)。これはexit()メソッドとremove()メソッドを組み合わせます。
最後にデータの更新を行います。書き換えるデータの要素はtr要素ではなくtd要素なのでselectAll("td")とします。data()メソッドでデータを取得しtext()メソッドで内容を出力します。あとは、setInterval()メソッドで1秒ごと処理を呼び出せばできあがりです。

## スタイルシート

### 1. 要素の文字色を指定する

D3.jsで要素の文字色を指定するにはstyle()メソッドを使います。最初のパラメーターにCSSプロパティ名を、2番目のパラメーターに設定する値を指定します。以下のサンプルでは1つの要素に対して処理していますが、selectAll()メソッドを使えば複数の要素の文字色を変更することができます。

### 2. 要素の背景色を指定する

D3.jsで要素の背景色を指定するにはstyle()メソッドを使います。最初のパラメーターにCSSプロパティ名を、2番目のパラメーターに設定する値を指定します。以下のサンプルでは1つの要素に対して処理していますが、selectAll()メソッドを使えば複数の要素の背景色を変更することができます。

### 3. 要素の横幅を指定する

D3.jsで要素の背景色を指定するにはstyle()メソッドを使います。最初のパラメーターに"width"を、2番目のパラメーターに設定する値を指定します。値はCSSで指定できる単位を指定することができます。

### 4. 要素のスタイルシートの値を読み出す

D3.jsで要素のスタイルシートの値を読み出すにはstyle()メソッドを使います。パラメーターにCSSプロパティ名を指定すると、プロパティを読み出した値が返されます。

### 5. 要素のスタイルをまとめて指定する

D3.jsで要素のスタイルをまとめて指定するにはstyle()メソッドの最初のパラメーターにオブジェクトリテラル型式／JSON形式を指定します。例えば以下のサンプルのように{ key : value }を設定したいスタイルの数だけ列記します。

## 配列処理

### 13. JSONデータ/オブジェクトからキーと値を取り出す (entries)

D3.jsでJSONデータ/オブジェクトからキーと値を取り出すにはd3.entries()メソッドを使います。パラメーターにはJSONデータ/オブジェクトを指定します。d3.entries()メソッドの戻り値は配列になります。配列には1要素ごとキーと値を取り出した結果が入ります。以下の例では[{key : "mz", value : 700}]という結果が返されます。

## タイマー／定期的な処理

### 1. 一定時間ごと処理する

D3.jsで一定時間ごと処理を行うにはd3.timer()メソッドを使います。最初のパラメーターに定期的に呼び出す関数を指定します。D3.jsのタイマーはアニメーションタイマーでJavaScriptのrequestAnimationFrame()メソッドを使ったものと同じになります。d3.timer()メソッドのパラメーターが1つの場合は、指定した処理が画面の書き換えタイミング (1/60秒など)に合わせて処理されます。決められた時間ごと定期的に処理する場合はsetInterva()メソッドを使う方法もあります。

## 色／カラー

### 2. あらかじめ定義してある20色を使用する

D3.jsで、あらかじめ定義してある20色を使用するにはd3.scale.category20()メソッド、d3.scale.category20b()メソッド、d3.scale.category20c()メソッドのいずれかを使います。戻り値はメソッドになっており、パラメーターに数値などを指定すると色（カラーコードを示す文字列）を返します。

## データ処理

### 1. データ内の項目内容を既存の要素に書き出す(1)

D3.jsでデータ内の項目内容を既存の要素に書き出すにはselectAll()メソッドを使い出力先となる要素を指定します。次にdata()メソッドで書き出すデータを用意します。data()で指定されている項目をそのまま書き出すにはtext()メソッドのパラメーターにStringを指定します。これでデータ項目が1つずつ読み出され処理されていきます。なお、text(String)のように指定した場合はよいのですが、text("No : "+String)のように文字列と連結してしまうと期待通りに動作しません。何らかの処理を行いたい場合には[データ内の項目内容を既存の要素に書き出す(2)](http://www.openspc2.org/reibun/D3.js/code/data/0002/index.html)のページを参照してください。

### 2. データ内の項目内容を既存の要素に書き出す(2)

D3.jsでデータ内の項目内容を既存の要素に書き出すにはselectAll()メソッドを使い出力先となる要素を指定します。次にdata()メソッドで書き出すデータを用意します。data()で指定されている項目をそのまま書き出すにはtext()メソッドのパラメーターにfunction(d){ return d; }を指定します。これでデータ項目が1つずつ読み出され処理されていきます。書き出す項目に文字を追加するような場合はfunction(d){ return "項目："+d; }のようにreturnの戻り値として処理します。

### 3. データ内の項目の順番を示す番号を既存の要素に書き出す

D3.jsでデータ内の項目の順番を示す番号を既存の要素に書き出すにはselectAll()メソッドを使い出力先となる要素を指定します。次にdata()メソッドでデータを用意します。data()で指定されている項目の順番を書き出すにはtext()メソッドのパラメーターにfunction(d, i){ return i; }を指定します。関数に渡された2番目のパラメーターがデータの順番を示す番号になります。この番号は0からはじまり1ずつ増えていきます。つまり、最初のデータが0、次のデータが1となります。

### 4. データ内の項目内容を要素を追加して書き出す

D3.jsでデータ内の項目内容を要素を追加して書き出すにはselectAll()メソッドを使い出力先のベース（親／基準）となる要素を指定します。次にdata()メソッドで書き出すデータを用意します。次にenter()メソッドとappend()メソッドを使って出力する要素を指定します。最後にtext()メソッドを使ってパラメーターにfunction(d){ return d; }を指定すれば、自動的に要素を追加しつつデータ内容も出力されます。

### 5. 項目内容が更新された要素の文字を赤色に変化させる

D3.jsで項目内容が更新された要素を赤色に変化させるには、データを追加した場合に要素を変数に入れて起きます。サンプルではobjという名前の変数に格納しています。ボタンクリックでイベント処理するにはselect()メソッドで指定した要素に対してon()メソッドを使います。on()メソッドの2番目のパラメーターにイベント発生時に実行する関数を指定します。この関数内でデータの更新処理を行います。データが入っている配列に乱数を使って新しい値をセットします。
値をセットしたらdata()メソッドを使ってデータを更新します。更新したデータは、そのままでは画面に表示されません。画面にデータを表示するにはtext()メソッドを使って行います。変更された要素の文字を赤色に変化させるにはtransition()メソッドを使います。その後、style()メソッドを使ってスタイルシートプロパティであるcolorに色をセットします。変更された箇所かどうかはstyle()メソッドの2番目のパラメーターに関数を指定します。関数内で配列の位置と変更すべき要素の位置が等しいかどうか調べます。同じなら赤色を示すredの文字を、そうでない場合はblackの文字を返します。これで、データが更新された場合に文字の色がアニメーションしながら変化します。

### 6. 項目内容が更新された要素の文字を赤く点滅させる

D3.jsで項目内容が更新された要素の文字を赤く点滅させるにはデータが変更された場合にtransition()メソッドとstyle()メソッドを使って文字色を変更します。赤く点滅させるには、この後さらにtransition()メソッドを記述します。その直後にstyle()メソッドを使って文字の色を黒色にします。その際、duration()メソッドを使って文字が元の色に戻るまでの時間をミリ秒で指定します。
これ以外の説明については[こちらのページを参照](http://www.openspc2.org/reibun/D3.js/code/data/1002/index.html)してください。

### 7. 要素にデータをセットする（datum）

D3.jsではdata()で設定されるデータ値は要素の__data__プロパティに入ります。data()でなくdatum()を使っても設定することができます。datum()のメソッドに数値や文字列などのデータを指定すると、その内容が要素の__data__にセットされます。サンプルのようにした場合、該当する全ての要素に同じ値がセットされます。datum()のパラメーターには関数を指定することができ、関数からの戻り値が要素の__data__プロパティにセットされます。

## SVG

### 1. 直線を描画する (SVG使用)

D3.jsで直線を描画するにはappend()メソッドでline要素を追加します。後は追加したline要素に必要な属性値を設定します。直線の場合、2点間を示す座標値が必要です。これはサンプルのように(x1,y1)-(x2,y2)を示す座標値を指定します。また、線の色はstroke属性に、線幅はstroke-width属性に設定します。また、塗りを無しにしたい場合はfill属性に"none"を指定します。

### 2. 連続直線（ポリライン）を描画する (SVG使用)

D3.jsで連続直線（ポリライン）を描画するにはappend()メソッドでpolyline要素を追加します。後は追加したpolyline要素に必要な属性値を設定します。連続直線（ポリライン）の場合、points属性にX,Y座標のペアをカンマか半角空白で区切って列記します。連続直線（ポリライン）の色はstroke属性に、線幅はstroke-width属性に設定します。また、塗りを無しにしたい場合はfill属性に"none"を指定します。

### 3. D3.jsの機能を使って直線を描画する (SVG使用)

D3.jsの機能を使って直線を描画するにはd3.svg.line()メソッドを使います。このメソッドでx()、y()に関数を指定し、関数からの戻り値を座標値とします。x(), y()メソッドに渡される関数には配列の1要素が渡されます。つまり[1,2,3]ならば、1、2、3の数値が順番に渡されます。[[1,8],[3,6]]ならば[1,8]、[3,6]が順番に渡されます。配列内にある値からX座標、Y座標として返すものを読み出します。読み出した値はreturnで返します。このd3.svg.line()メソッドは、座標を計算する関数を返しますので、path要素のd属性にline(配列)で返された値を設定すれば直線が描画されます。

### 4. 四角形（矩形）を描画する (SVG使用)

D3.jsで四角形（矩形）を描画するにはappend()メソッドでrect要素を追加します。後は追加したrect要素に必要な属性値を設定します。四角形（矩形）の場合、X座標はcx属性、Y座標はcy属性に設定します。四角形（矩形）の横幅はwidth属性に、縦幅はheight属性に設定します。また、線の色はstroke属性に、線幅はstroke-width属性に設定します。塗りを無しにしたい場合はfill属性に"none"を指定します。

### 5. 角丸四角形を描画する (SVG使用)

D3.jsで角丸四角形を描画するにはappend()メソッドでrect要素を追加します。角丸四角形は横の角丸半径と縦の角丸半径を別途指定することができます。ただし、それぞれの角ごとに指定することはできません。append()メソッドでrect要素を追加した後は必要な属性値を設定します。角丸四角形の場合、X座標はcx属性、Y座標はcy属性に設定します。四角形の横幅はwidth属性に、縦幅はheight属性に設定します。横の角丸半径はrx属性に、縦の角丸半径はry属性に指定します。また、線の色はstroke属性に、線幅はstroke-width属性に設定します。塗りを無しにしたい場合はfill属性に"none"を指定します。

### 6. 正円を描画する (SVG使用)

D3.jsで正円を描画するにはappend()メソッドでcircle要素を追加します。後は追加したcircle要素に必要な属性値を設定します。正円の場合、中心座標と半径を指定します。中心座標はX座標をcx属性、Y座標をcy属性に設定します。円の半径はr属性に設定します。また、線の色はstroke属性に、線幅はstroke-width属性に設定します。塗りを無しにしたい場合はfill属性に"none"を指定します。

### 7. 楕円を描画する (SVG使用)

D3.jsで楕円を描画するにはappend()メソッドでellipse要素を追加します。後は追加したellipse要素に必要な属性値を設定します。楕円の場合、中心座標と横と縦の半径を指定します。中心座標はX座標をcx属性、Y座標をcy属性に設定します。円の横の半径はrx属性、縦の半径はry属性に設定します。また、線の色はstroke属性に、線幅はstroke-width属性に設定します。塗りを無しにしたい場合はfill属性に"none"を指定します。

### 8. プレーンテキストを描画する (SVG使用)

D3.jsでプレーンテキストを描画するにはappend()メソッドでtext要素を追加します。text要素内に文字を表示するにはtext()メソッドを使います。パラメーターには表示する文字を指定します。なお、\nを指定しても改行はされません。
後は必要に応じて要素の属性値を設定します。文字の表示位置はx属性にX座標、y属性にY座標を指定します。文字の線の色はstroke属性に、線幅はstroke-width属性で指定できます。色を透明にしたい場合は"none"を指定します。

### 9. 多角形（ポリゴン）を描画する (SVG使用)

D3.jsで多角形（ポリゴン）を描画するにはappend()メソッドでpolygon要素を追加します。後は追加したpolygon要素に必要な属性値を設定します。連続直線（ポリライン）の場合、points属性にX,Y座標のペアをカンマか半角空白で区切って列記します。多角形（ポリゴン）の色はstroke属性に、線幅はstroke-width属性に設定します。また、塗りを無しにしたい場合はfill属性に"none"を指定します。

### 10. 図形を移動させる (SVG使用)

D3.jsでSVGの図形を移動させるにはtransform属性に移動と移動量を示す文字列を指定します。transform属性と値の設定はattr()メソッドを使って行います。例えば図形を横に10、縦に-60移動させるにはtranslate(10, -60)の文字列を指定します。translate()で指定される座標値は移動量である点に注意してください。つまりtranslate(20, 50)とした場合、座標(20, 50)に図形が移動するわけではありません。現在の位置より横に20移動し、縦に50移動するだけです。

### 11. 図形を回転させる (SVG使用)

D3.jsでSVGの図形を回転させるにはtransform属性に回転と回転角度を示す文字列を指定します。transform属性と値の設定はattr()メソッドを使って行います。例えば図形を45度回転させるにはrotate(45)の文字列を指定します。値が正数の場合は時計回り、負数の場合は反時計回りになります。

### 12. 図形を横に傾斜させる (SVG使用)

D3.jsでSVGの図形を横に傾斜させるにはtransform属性に傾斜と傾斜角度を示す文字列を指定します。transform属性と値の設定はattr()メソッドを使って行います。例えば図形を10度傾斜させるにはskewX(10)の文字列を指定します。図形の左上を基準にして値が正数の場合は右方向に、負数の場合は左方向に傾斜します。

### 13. 図形のスケール（縮尺）を指定する (SVG使用)

D3.jsでSVG図形のスケール（縮尺）を指定するにはtransform属性にスケールと倍率を示す文字列を指定します。transform属性と値の設定はattr()メソッドを使って行います。例えば図形を横に2倍、縦に50%のサイズにするにはscale(2, 0.5)の文字列を指定します。1.0が等倍になりますので、0.5なら50%で半分のサイズ、2.0なら200%で2倍のサイズになります。

## アニメーション

### 1. アニメーションさせる

D3.jsでアニメーションさせるにはtransition()メソッドを使います。transition()メソッドを呼び出す前に、アニメーション開始時の図形の座標や幅を指定しておきます。その後transition()メソッドを呼び出した後でアニメーション終了時の図形の座標や幅を指定します。

### 2. 段階的にアニメーションさせる

D3.jsで段階的にアニメーションさせるにはtransition()メソッドをアニメーションごとに指定して使います。まず、transition()メソッドを呼び出す前に、アニメーション開始時の図形の座標や幅を指定しておきます。その後transition()メソッドを呼び出した後でアニメーション終了時の図形の座標や幅を指定します。さらに、そこからアニメーションさせる場合はtransition()メソッドを記述し、その後に属性値を指定します。このようにtransition()メソッドを何度も使うことで段階的なアニメーションを実現することができます。

### 3. アニメーションにかかる時間を指定する

D3.jsでアニメーションにかかる時間を指定するにはduration()メソッドを使います。duration()メソッドにアニメーションにかかる時間を指定します。指定する値はミリ秒になります。1000を指定すると1秒かけてアニメーションが行われます。

### 4. 一定時間経過後にアニメーションさせる

D3.jsで一定時間経過後にアニメーションさせるにはdelay()メソッドを使います。delay()メソッドにアニメーション開始までの時間を指定します。指定する値はミリ秒になります。1000を指定すると1秒後にアニメーションが行われます。

### 5. アニメーションの動きを指定する

D3.jsでアニメーションの動きを指定するにはease()メソッドを使います。ease()メソッドにアニメーションの動きを示す文字列を指定します。"line"、"quad"、"cubic"、"sin"、"exp"、"circle"、"bounce"などを指定できます。その他、指定できるものに関しては[こちらのページを参照](https://github.com/mbostock/d3/wiki/Transitions#wiki-d3_ease)してください。

## フォースレイアウト（力学レイアウト）

### 1. フォースレイアウト（力学モデル）を使って描画する (SVG使用)

D3.jsでフォースレイアウト（力学モデル）を使って描画するにはd3.layout.force()メソッドを使います。このメソッドではノード（力学点）と関係性（線）を指定します。ノードはnodes()メソッドで、関係性はlinks()メソッドで指定します。このノードと関連性は、あらかじめ配列に用意しておきます。配列内で示されるノードで重要なのは記述してある順番です。というのも次に記述する関係性では、配列での出現順番を使って、どのノードとノードを結ぶか（関連しているか）を指定するからです。
ノードの関係性を示す配列では関連元を示すsource、関係先を示すtargetを指定していきます。{ source : 0, target : 1}と指定した場合、最初のノードと2番目のノードが関係していることになります。このような関係を必要な数だけ記述します。1つのノードから複数のノードへの関係が発生している場合は、その数だけ記述することになります。
次にsize()メソッドで表示（出力）範囲を指定します。サンプルではSVGの幅を指定しています。
linkDistance()を指定するとノード間の距離を指定できます。距離を指定しないと、かなり狭い幅でノードが表示されてしまいます。最後にstart()メソッドを呼び出せば内部的な処理は完了です。
次に関係性を示す線を描画します。これは線を描くline要素を生成し線の太さや色を指定します。この段階では線のX,Y座標は指定しません。次にノードを示す●印を描画します。これは円を描くcircle要素を生成し半径だけを指定しておきます。線と同様に、この段階では円のX,Y座標は指定しません。
線の描画は力学モデルの処理が行われた時に行います。d3.layout.force()によって生成されたオブジェクトは内部での力学計算処理が発生するたびにtickイベントを発生させます。on("tick", 〜)としてイベントを取得し、イベントハンドラ（関数）を呼び出します。この関数内でノード（●）と関係性を示す線を描画します。線はノードとターゲットのx,yプロパティを、ノードはx,yプロパティを、それぞれの属性値に設定します。あとは、自動的にD3.jsがノードや線を描画し処理してくれます。

### 2. ノードをドラッグできるようにする (SVG使用)

D3.jsのフォースレイアウト（力学モデル）でノードをドラッグできるようにするには、ノードの円を描画した時にcall(force.drag)を実行します。フォースレイアウトの説明については[こちらのページを参照](http://www.openspc2.org/reibun/D3.js/code/graph/force-layout/0001/index.html)してください。

## ツールチップ

https://wizardace.com/d3-bartooltip/

