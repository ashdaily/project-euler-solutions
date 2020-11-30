/*
https://projecteuler.net/problem=1
If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/


const findSolution = (number1, number2)=> {
    let sumOfAllMutiples = 0;
    let counter =  0;
    let limit = 1000;

    while (counter < limit){
        if(counter % number1 === 0 || counter % number2 === 0){
            sumOfAllMutiples += counter;
        }
        counter += 1;
    }

    return sumOfAllMutiples;
}

const number1 = 3;
const number2 = 5;
findSolution(number1, number2)