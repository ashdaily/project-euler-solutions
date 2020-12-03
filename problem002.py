"""
https://projecteuler.net/problem=2
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
"""


def _is_even(number: int):
    return number%2 == 0


def sum_of_even_value_of_fibbonacci_series(starting_number_1: int, starting_number_2: int):
    upper_limit = 4000000
    counter =  1
    sum_of_fibonacci_series = 0

    while counter <= upper_limit - 1:
        # just for debug
        
        sum_of_last_two_numbers = starting_number_2 + starting_number_1
        if _is_even(starting_number_2):
                sum_of_fibonacci_series += starting_number_2

        starting_number_1 = starting_number_2
        starting_number_2 = sum_of_last_two_numbers
        
        counter += 1

    return sum_of_fibonacci_series



if __name__ == "__main__":
    starting_number_1 = 1
    starting_number_2 = 2
    result = sum_of_even_value_of_fibbonacci_series(starting_number_1, starting_number_2)
    print("result :", result)