print("LESSON DAY 07 - LISTS")
print("======================")

print("EX 01")

list = ["banana", "fredd", "fruit", "strawberry", "kekw"]


def chop(list):
    new_list = list
    new_list.pop(0)
    new_list.pop(-1)


chop(list)
print("Chop", chop(list))


def middle(list):
    return list[1:-1]


result = middle(list)
print("Middle ", result)

print(list)


print("EX 02")

fhand = open("romeo.txt")

unique_word = []

for line in fhand:
    line = line.rstrip()
    print(line)
    words = line.split(" ")
    unique_word.extend(words)

listt = set(unique_word)

print(listt)


print("EX 03")

numbers = []

while True:
    user_input = input("Write a number: ")

    if user_input.lower() == "done":
        if not numbers:
            print("NO NUMBERS ENTERED")
            break

        int_numbers = [int(x) for x in numbers]
        max_val = max(int_numbers)
        min_val = min(int_numbers)
        print("MAX:", max_val)
        print("MIN:", min_val)
        break

    try:
        number = float(user_input)
        numbers.append(number)
        print(numbers)

    except:
        print("NUMBERS ONLY")
