const numList = [];
const redDiv = document.querySelector(".container-red");
const greenDiv = document.querySelector(".container-green");

for(let i = 0; i < 20; i++){
    const randomNumber = Math.floor(Math.random() * 200);
    numList.push(randomNumber);
    if( randomNumber % 2 === 0){
        redDiv.innerHTML += (`<p>${randomNumber}</p>`)
    } else {
        greenDiv.innerHTML += (`<p>${randomNumber}</p>`)
    }
}

console.log(numList)

