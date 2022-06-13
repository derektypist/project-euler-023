# Project Euler 023 - Non-Abundant Sums

A perfect number is a number for which the sum of the proper divisors is exactly equal to the number.  For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.  By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.  However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

The aim is to find the sum of all the positive integers (less than or equal to `n`) that cannot be written as the sum of two abundant numbers.  This involves the use of HTML Forms and JavaScript.

Information at [Project Euler 023](https://projecteuler.net/problem=23)

## UX

**Getting Started**

Enter a whole number between 2 and 28123 and click on the Submit Button.  As long as your input is valid, you will see the number entered as well as the sum of all the positive integers (less than or equal to that number) that cannot be written as the sum of two abundant numbers.  For example, if you entered 10000, you would expect to get 3731004.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Enter text other than a number
- Entering a number less than 2 or greater than 28123
- Entering a number, but it is not an integer

As a user, I expect the function `sumOfNonAbundantNumbers(10000)` to return a number.

As a user, I expect the function `sumOfNonAbundantNumbers(10000)` to return 3731004.

As a user, I expect the function `sumOfNonAbundantNumbers(15000)` to return 4039939.

As a user, I expect the function `sumOfNonAbundantNumbers(20000)` to return 4159710.

As a user, I expect the function `sumOfNonAbundantNumbers(28123)` to return 4179871.

**Information Architecture**

The function `sumOfNonAbundantNumbers(n)` returns a number, where `n` is a number between 2 and 28123.

## Features

Allows the user to enter a number as well as getting the sum of all the positive integers (less than or equal to that number) that cannot be written as the sum of two abundant numbers.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.