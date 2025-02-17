num=13
guess=0

while guess!=num:
    guess=int(input("guess the number: "))
    
    if guess<num:
        if guess==num-1:
            print("Too close! guess bit higher!")
        else:
            print("Too low! guess higher number!")
    
    elif guess>num:
        if guess==num+1:
            print("Too close! guess bit lower!")
        else:
            print("Too high! guess lower!")
    
    else:
        print(f"{num} was the number and you got the number!")

print("BYE!")