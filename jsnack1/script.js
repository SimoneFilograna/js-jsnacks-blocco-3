const numList = [];

let sum = 0; 

while( sum < 50){
    const InputNumber = parseInt(prompt("Inserisci qui un numero"));
    numList.push(InputNumber);
    sum += InputNumber;
}

console.log(numList)
