# Project Euler 023 - Non-Abundant Sums

A perfect number is a number for which the sum of the proper divisors is exactly equal to the number.  For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.  By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.  However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

The aim is to find the sum of all the positive integers (less than or equal to `n`) that cannot be written as the sum of two abundant numbers.  This involves the use of HTML Forms and JavaScript.

Information at [Project Euler 023](https://projecteuler.net/problem=23)

## UX

**User Stories**

As a user, I expect the function `sumOfNonAbundantNumbers(10000)` to return a number.

As a user, I expect the function `sumOfNonAbundantNumbers(10000)` to return 3731004.

As a user, I expect the function `sumOfNonAbundantNumbers(15000)` to return 4039939.

As a user, I expect the function `sumOfNonAbundantNumbers(20000)` to return 4159710.

As a user, I expect the function `sumOfNonAbundantNumbers(28123)` to return 4179871.

**Information Architecture**

The function `sumOfNonAbundantNumbers(n)` returns a number, where `n` is a number.