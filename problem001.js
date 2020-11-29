// https://projecteuler.net/problem=1

/*
If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

// multiples of 3 -> 3, 6, 9, 12, 15 ....
// multiples of 5 ->  5,  10, 15, 20 ....

function findSumOfMultiplesOfNumber(number){
    var sumOfAllMutiples = 0;
    for(var i=0; i<1000; i+=number){
        if(i%number === 0){
            sumOfAllMutiples += i;
        }
    }
    return sumOfAllMutiples;
}

var sumOf3 = findSumOfMultiplesOfNumber(3)
var sumOf5 = findSumOfMultiplesOfNumber(5)

console.log(sumOf3+sumOf5)