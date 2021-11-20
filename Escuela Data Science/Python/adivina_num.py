# Program to create a guess number game
import random#Use random module to create random number

def run():
    print("Welcome to guess number game") #Welcome message
    input("Press any key to continue...")
    
    random_number = random.randint(1,100) #Create a random number from 1 to 100
    #Use a while loop to run the game until the user writes the right number
    while(True):
        user_guess = int(input("Pick a number between 1 to 100: ")) #Input of user to play the game
        if user_guess == random_number:#Guess right number, end of game
            print("You have guess the right number.")
            quit()
        elif user_guess < random_number:#Number too small
            print("Your guess is too small. Try again.")
        else:#Number too big
            print("Your guess is too big. Try again.")
            

if __name__ == "__main__":
    run()#Run program