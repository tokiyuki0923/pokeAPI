"use strict";

async function display() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    const data = await response.json();
    const sprites = data.sprites;
    const spritesContainer = document.getElementById("spritesContainer");

    for (const key of Object.keys(sprites)) {
        const imgUrl = sprites[key];
        const imgElement = document.createElement("img");
        imgElement.src = imgUrl;
        spritesContainer.appendChild(imgElement);
    }
}
    /* fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then(response => response.json())
    .then(data => {
        const sprites = data.sprites;
        const spritesContainer = document.getElementById("spritesContainer");

        for (const key in sprites) {
        if (sprites.hasOwnProperty(key)) {
            const imgUrl = sprites[key];
            const imgElement = document.createElement("img");
            imgElement.src = imgUrl;
            spritesContainer.appendChild(imgElement);
        }
        }
    
    }) */

/* function redisplay() {
    fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then(response => response.json())
    .then(data => {
        const otherSprites = data.sprites.other.dream_world;
        const imgUrl = otherSprites.front_default;
        const spritesContainer = document.getElementById("spritesContainer");
        const imgElement = document.createElement("img");
        imgElement.src = imgUrl;
        spritesContainer.appendChild(imgElement);
    })
} */



async function redisplay() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
        const data = await response.json();
        const otherSprites = data.sprites.other.dream_world;
        const imgUrl = otherSprites.front_default;
        const spritesContainer = document.getElementById("spritesContainer");
        const imgElement = document.createElement("img");
        imgElement.src = imgUrl;
        spritesContainer.appendChild(imgElement);
}





display();
redisplay();











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