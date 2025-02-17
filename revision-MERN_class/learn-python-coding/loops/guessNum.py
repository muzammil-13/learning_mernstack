num=13
guess=0

while guess!=num:
    guess=int(input("guess the number: "))
    
    if guess<num:
        print("Too low! guess higher number!")
    elif guess>num:
        print("Too high! guess lower!")
    else:
        print("got the number!")