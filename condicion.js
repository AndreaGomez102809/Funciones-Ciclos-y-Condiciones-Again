function getRandom() {
return Math.floor(Math.random() * 100);
}

var randomNumber = getRandom();
console.log(randomNumber)


var i = 0;
for (var i = 0; randomNumber != 50;
    i++) {

 randomNumber = getRandom();
 
 console.log(randomNumber)

}

console.log("Veces que repite hasta llegar a 50 es: " + i)