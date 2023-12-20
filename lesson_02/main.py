# age = int(input('HOW OLD ARE YOU? \n'))

# if 0 < age <= 12:
#   print('You are a CHILD')
# elif 13 <= age <= 19:
#   print('You are a TEENAGER')
# elif 20 <= age <= 59:
#   print('You are an ADULT')
# elif 60 <= age <= 100:
#   print('You are a SENIOR')
# else:
#   print('WTF! REALLY?')


print("EXERCISE 1")

hours = input("HOW MANY HOURS YOU WORKED? \n")

try:
    rate = 10
    hours_int = int(hours)
    if hours > 40:
        pay = (hours_int - 40) * (rate * 1.5) + 400
    else:
        pay = hours_int * rate
    print(pay)
except:
    print("FUCKING NUMBER")


score = input("ENTER SCORE:  \n")


try:
    if 0.9 <= score <= 1.0:
        print("A")
    elif 0.8 < score < 0.9:
        print("B")
    elif 0.7 < score < 0.8:
        print("C")
    elif 0.6 < score < 0.7:
        print("D")
    elif score < 0.6:
        print("F")
    else:
        print("You must enter between 0.0 and 1.0")
except:
    print("Bad Score")
