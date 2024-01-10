print("EX1")
print("***********************************************")

import re


def count_matching_lines(file_name, word):
    try:
        with open(file_name, "r") as file:
            lines = file.readlines()
            matching_lines = [line for line in lines if re.search(word, line)]
            print(f"{file_name} had {len(matching_lines)} lines that matched {word}")
    except:
        print("File name wrong")


if __name__ == "__main__":
    file_name = input("Enter the file name: ")
    word = input("Enter a regular expression")

else:
    print("WRONG")


print("EX2")
print("***********************************************")


def avg_rev(file_name):
    try:
        with open(file_name, "r") as file:
            lines = file.readlines()
            new_lines = [
                int(line.split(" ")[2]) for line in lines if line.startswith("New")
            ]
            if not new_lines:
                print("No valid data found in the file.")
            else:
                avg = sum(new_lines) / len(new_lines)
                print(int(avg))
    except FileNotFoundError:
        print("File not found.")


if __name__ == "__main__":
    file_name = input("Enter the file name: ")
    matching_lines = avg_rev(file_name)

    if matching_lines:
        avg = matching_lines
        print(f"AVG: {int(avg)}")
    else:
        print("WORD IS NOT MATCHING")
