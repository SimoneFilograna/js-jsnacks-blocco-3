const userNumber = parseInt(prompt("Inseri qui un il tuo numero fortunato"))

for(let i= 0; i < userNumber; i++){
    const numberList = []
    for( let y = 0; y < 10; y++){
        const randomNumber = (Math.floor(Math.random() * 100) + 1);
        numberList.push(randomNumber);
    }
    console.log(numberList)   
}