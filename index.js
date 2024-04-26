"use strict";
// URLからデータを読み込む
fetch("poke.json")

// URLから読み込んだデータを受け取って加工する。受け取ったデータをresponceという引数に入れる
.then(response => {
    return response.json();//jsonはオブジェクト（連想配列）、jsonの部分をtextとかにするとテキスト変換される
})

// json変換したものをdateという引数に渡す
.then(date =>{
    const p = document.createElement("p");
    p.textContent = date.name;
    const test = document.getElementById("test");
    test.appendChild(p);
})

// 通信にエラーが発生した場合にこの関数が発生する
.catch(error =>{
    console.log(error);
})