print("ITERATIONS")

print("================")


print("EX1")

the_word = "blahblah"
lenght = len(the_word)
index = lenght - 1
while index >= 0:
    print(the_word[index])
    index -= 1


print("EX SUM")

a = 15
b = 25
c = 15
sum = 0
while b >= c >= a:
    sum += c
    c += 1

print(f"SUM is: {sum}")


print("EX2")

print("====================")

fruit = "banana"

print(fruit[:])


print("EX3")

word = "banana"

count = 0
for letter in word:
    if letter == "a":
        count = count + 1
print(count)


def count(letter):
    count = 0

    for x in letter:
        if x == "a":
            count = count + 1

    return count


print(count("banana"))

print("EX count method ")

fruit = "banana"

fruit.count("a", 1, 5)


print("EX5")

print("==============")


def convert_to_binary(number):
    binary_num = []
    while number > 0:
        uld = number % 2
        binary_num.append(uld)
        number = number // 2
    binary_num.reverse()
    result = binary_num

    array_str = "".join(map(str, result))
    print(array_str)


convert_to_binary(19)
