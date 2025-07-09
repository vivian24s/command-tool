// ---------- ---------- ---------- ---------- ---------- ----------
// 関数名：出力エリアhtml出力
//
// 概要　：出力エリアをhtml出力する
// 使い方：output()
// 備考　：
// ---------- ---------- ---------- ---------- ---------- ----------

function output(){
	//初期化
	var html = "";
	
	//回り込み解除
	html += '<br clear="all">';
	
	//出力ボックス
	html += '<textarea id="cmdOutput" name="cmdOutput" rows="5" style="width:100%;"></textarea>';
	
	//文字数表示エリア
	html += '<div id="count">[文字数：0]</div>';
	
	//「コマンド生成」ボタン
	html += '<input class="cmdButton" type="button" name="generate" onclick="cmdGenerate()" value="コマンド生成">';

	//「コマンドコピー」ボタン
	html += '<input class="cmdButton" type="button" name="copy" onclick="cmdCopy(\'cmdOutput\')" value="コマンドコピー">';
	
	//html出力
	document.write(html);
}

// ---------- ---------- ---------- ---------- ---------- ----------
// 関数名：オブジェクトをマイクラNBTの文字列に変換する関数
//
//
// ---------- ---------- ---------- ---------- ---------- ----------
function stringifyCompactObject(obj) {
    if (Array.isArray(obj)) {
        return `[${obj.map(stringifyCompactObject).join(",")}]`;
    }
    if (typeof obj !== "object" || obj === null) {
        return typeof obj === "string" ? `"${obj}"` : obj;
    }
    return `{${Object.entries(obj)
        .map(([key, value]) => `${key}:${stringifyCompactObject(value)}`)
        .join(",")}}`;
}

// ---------- ---------- ---------- ---------- ---------- ----------
// 関数名：文字数出力
//
// 概要　：コマンドの文字数を出力する
// 使い方：strLenPrint()
// 備考　：
// ---------- ---------- ---------- ---------- ---------- ----------

function strLenPrint(){
	//文字数が256文字以上の場合
	if(form.cmdOutput.value.length > 256){
		document.getElementById("count").innerText = "[文字数：" + form.cmdOutput.value.length + "] コマンドブロックを使用してください。";

	//文字数が256文字未満の場合
	}else{
		document.getElementById("count").innerText = "[文字数：" + form.cmdOutput.value.length + "]";
	}
}


// ---------- ---------- ---------- ---------- ---------- ----------
// 関数名：コマンドコピー
//
// 概要　：指定したIDのvalue値をクリップボードにコピーする。
// 使い方：cmdCopy(ID)
// 備考　：
// ---------- ---------- ---------- ---------- ---------- ----------

function cmdCopy(str){
	// コピー対象をJavaScript上で変数として定義する
	var copyTarget = document.getElementById(str);
	
	// コピー対象のテキストを選択する
	copyTarget.select();
	
	// 選択しているテキストをクリップボードにコピーする
	document.execCommand("Copy");
}


// ---------- ---------- ---------- ---------- ---------- ----------
// 関数名：文字列置き換え1(廃止)
//
// 概要　："_DQ_" + 文字列 + "_DQ_"に変換する。
// 　　　　最終的に、"文字列"となる。
// 使い方：JString(文字列)
// 備考　：
// ---------- ---------- ---------- ---------- ---------- ----------

function JString1(str){
	//"_DQ_" + 文字列 + "_DQ_"に変換する。
	return "_DQ_" + str + "_DQ_";
}


// ---------- ---------- ---------- ---------- ---------- ----------
// 関数名：文字列置き換え2(廃止)
//
// 概要　："_DQ__YM__DQ_" + 文字列 + "_YM__DQ__DQ_"に変換する。
// 　　　　最終的に、"\"文字列\""となる。
// 使い方：JString2(文字列)
// 備考　：
// ---------- ---------- ---------- ---------- ---------- ----------

function JString2(str){
	//"_DQ__YM__DQ_" + 文字列 + "_YM__DQ__DQ_"に変換する。
	return "_DQ__YM__DQ_" + str + "_YM__DQ__DQ_";
}


// ---------- ---------- ---------- ---------- ---------- ----------
// 関数名：マインクラフト用JSON変換(廃止)
//
// 概要　：1.JSONの項目側の「"」を消す。
// 　　　　2.「_DQ_」を「"」に変換する。
// 　　　　3.「_YM_」を「\」に変換する。
// 使い方：JSONtoMJSON(文字列)
// 備考　：オブジェクトを指定する。
// ---------- ---------- ---------- ---------- ---------- ----------

function JSONtoMJSON(str){	
	str = JSON.stringify(str).replace(/\"/g, "");
	str = str.replace(/_DQ_/g, "\"");
	str = str.replace(/_YM_/g, "\\");
	return str;
}	
