"""
https://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
"""


def find_solution(number1, number2):
    sum_of_all_mutiples = 0
    i =  0
    while i < 1000:
        if i % number1 == 0 or i % number2 == 0:
            sum_of_all_mutiples+= i
        i += 1


if __name__ == "__main__":
    number1 = 3
    number2 = 5
    find_solution(number1, number2)
