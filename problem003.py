"""
https://projecteuler.net/problem=2
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
"""


def _is_prime(number:int):
    number_of_divisors = 0
    for divisor in range(1, number+1):
        if number%divisor == 0:
            number_of_divisors += 1
    return True if number_of_divisors == 2 else False


def _is_factor(number:int, divisor:int):
    return True if number % divisor == 0 else False


def largest_prime_factor(number: int):
    for candidate_largest_prime_factor in range(int(number/2), 1, -1):
        if _is_factor(number, candidate_largest_prime_factor):
            if _is_prime(candidate_largest_prime_factor):
                return candidate_largest_prime_factor


if __name__ == "__main__":
    number = 600851475143
    result = largest_prime_factor(number)
    print("result :", result)