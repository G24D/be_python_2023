numbers = []

while True:
    user_input = input("Enter a number (type 'done' to finish): ")

    if user_input.lower() == "done":
        break

    try:
        number = float(user_input)
    except ValueError:
        print("Bad data, not a number. Please enter a valid number.")
        continue

    numbers.append(number)

if len(numbers) == 0:
    print("No numbers entered.")
else:
    average = sum(numbers) / len(numbers)
    print(f"AVG is: {average}")
