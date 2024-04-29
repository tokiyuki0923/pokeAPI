"use strict";




function display() {
    fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then(response => response.json())
    .then(data => {
        const sprites = data.sprites;
        const spritesContainer = document.getElementById("spritesContainer");


        for (const key in sprites) {
        if (sprites.hasOwnProperty(key)) {
            const imgUrl = sprites[key];
            const imgElement = document.createElement("img");
            imgElement.src = imgUrl;
            imgElement.alt = key;
            spritesContainer.appendChild(imgElement);
        }
        }
    })

    .catch(error => console.error("Error fetching JSON:", error));
}




window.onload = display;












/* // URLからデータを読み込む
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

// URLから読み込んだデータを受け取って加工する。受け取ったデータをresponceという引数に入れる
.then(response => {
    return response.json();//jsonはオブジェクト（連想配列）、jsonの部分をtextとかにするとテキスト変換される
})

// json変換したものをdateという引数に渡す
.then(date =>{

})

// 通信にエラーが発生した場合にこの関数が発生する
.catch(error =>{
    console.log(error);
})
 */