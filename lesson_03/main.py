print("EX1")
numbers = []
while True:
    user_input = input("Enter a number: ")
    numbers.append(float(user_input))
    if user_input.lower() == "done":
        break
    elif float(user_input) >= 0:
        try:
            the_sum = 0
            for i in numbers:
                the_sum += i
                average = the_sum / len(numbers)
                print("AVARAGE is ", average)
        except:
            print("ENTER NUMBER ONLY TY")
