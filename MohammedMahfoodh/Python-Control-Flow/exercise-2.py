# exercise-02 Length of Phrase

# Write the code that:
# 1. Prompts the user to enter a phrase:
#      Please enter a word or phrase: 
# 2. Print the following message:
#      - What you entered is xx characters long
# 3. Return to step 1, unless the word 'quit' was entered.

def LengthofPhrase():
    while True:
        phrase = input("Please enter a word or phrase (or 'quit' to exit): ")

        if phrase.lower() == 'quit':
            break

        length = len(phrase)
        print("What you entered is", length, "characters long")

LengthofPhrase()
