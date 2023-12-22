operator = int(input("Give me operator: \n"))
operand = int(input("Give me operand: \n"))
operation = input("Give me operation: \n")


if operation == "-":
    result = operator - operand
    print(result)
elif operand == str:
    print("operand must be a number")
elif operator == str:
    print("operand must be a number")
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
