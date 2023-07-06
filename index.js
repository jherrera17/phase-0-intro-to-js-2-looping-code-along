const array = [];

function writeCards(array, event) {
    const newArray = []; {
        for (let i =0; i < array.length; i++) {
            newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        }
    }
    return newArray;
}

console.log("Hello")

function countDown(count){
    while (count >= 0) {
        console.log(count--);
    }
}

countDown(10);