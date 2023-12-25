operator = int(input("Give me operator: \n"))
operand = int(input("Give me operand: \n"))
operation = input("Give me operation: \n")





while True:
    try:
        if operation == "-":
            result = operator - operand
            print(result)
        elif operation == "+":
            result = operator + operand
            print(result)
        elif operation == "*":
            result = operator * operand
            print(result)
        elif operation == "/":
            result = operator / operand
            print(result)
        else:
            print("Its not operator")
    except:
        print

