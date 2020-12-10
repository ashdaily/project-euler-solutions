/*
https://projecteuler.net/problem=1
If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

const isMultiple = (divident,  divisor) => {
    return divident %  divisor  === 0
}


const findSolution = (number1, number2)=> {
    let sumOfAllMutiples = 0;
    let start =  0;
    let end = 1000;

    while (start < end){
        //  start =  9
        if(isMultiple(start, number1) || isMultiple(start, number2)){
            sumOfAllMutiples = sumOfAllMutiples + start; // 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 +  20
        }
        counter += 1;
    }

    return sumOfAllMutiples;
}

const number1 = 3;
const number2 = 5;
findSolution(number1, number2)


/* 
easy approach, but very slow
sumOf3 = 0
for(var i=1; i <= 1000; i++){
    i = i*3
    sumOf3 += i
    console.log(i)
}

sumOf5 = 0
for(var i=1; i <= 1000; i++){
    i = i*5;
    sumOf5 += i
    console.log(i)
}

console.log(sumOf3 + sumOf5)
*/