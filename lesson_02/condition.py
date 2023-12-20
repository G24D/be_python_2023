inp = input("Enter Fahrenheit Temperature: ")
try:
    fahr = float(inp)
    celcius = (fahr - 32.0) * 5 / 9.0

    print(celcius)
except:
    print("Please enter a number")
