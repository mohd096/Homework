# exercise-05 Fibonacci sequence for first 50 terms

# Write the code that:
# 1. Calculates and prints the first 50 terms of the fibonacci sequence.
# 2. Print each term and number as follows:
#      term: 0 / number: 0
#      term: 1 / number: 1
#      term: 2 / number: 1
#      term: 3 / number: 2
#      term: 4 / number: 3
#      term: 5 / number: 5
#      etc.

# Hint: The next number is found by adding the two numbers before it

def fibonacci():
    n1 = 0
    n2 = 1
    count = 0

    while count < 50:
        print("term:", count, "/ number:", n1)
        nth = n1 + n2
        n1 = n2
        n2 = nth
        count += 1

fibonacci()
