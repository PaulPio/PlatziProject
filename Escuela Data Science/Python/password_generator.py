# Program to create a password generator
import random#To select random chars
import string#To get the chars
def password_generator(number):
    """Function to generate a password"""
    password = []#List to store the chars
    #For loop to append the random chars to password
    for i in range(number):
        char_random = random.choice(string.printable) 
        password.append(char_random)

    password = ''.join(password)#To convert the list to a string
    return password


def run():
    ask = int(input("How many character do you want on your password? "))
    password = password_generator(ask)
    print(f"Your new password is {password}")

if __name__ == "__main__":
    run()