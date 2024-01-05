print("EX-DICT")
print("---------------")


print("EX1")
print("---------------")


fhand = open("words.txt", "r")

text_content = fhand.read()
words = text_content.split()

dic_keys = {word: 0 for word in words}

print(dic_keys)


print("EX2")
print("---------------")


def day_counter(filename):
    file = open(f"{filename}")
    whole = []
    mon_val = 0
    tue_val = 0
    wed_val = 0
    thu_val = 0
    fri_val = 0
    sat_val = 0
    sun_val = 0
    email_counts = {}
    uname_counts = {}
    for line in file:
        if line.startswith("From"):
            words = line.split()
            whole.extend(words)
            email = line.split()[1]
            email_counts[email] = email_counts.get(email, 0) + 1
            uname, domain = email.split("@")
            uname_counts[email] = uname_counts.get(email, 0) + 1

    max_mail = 0
    max_email = None
    for email, count in email_counts.items():
        if count > max_mail:
            max_mail = count
            max_email = email

    if max_email is not None:
        print(f"EX4 {max_email} : {max_mail}")

    for x in whole:
        if x == "Mon":
            mon_val += 1
        if x == "Tue":
            tue_val += 1
        if x == "Wed":
            wed_val += 1
        if x == "Thu":
            thu_val += 1
        if x == "Fri":
            fri_val += 1
        if x == "Sat":
            sat_val += 1
        if x == "Sun":
            sun_val += 1

    print(
        "EX2",
        "Monday: ",
        mon_val,
        "Tuesday: ",
        tue_val,
        "Wednesday: ",
        wed_val,
        "Thursday: ",
        thu_val,
        "Friday: ",
        fri_val,
        "Saturday: ",
        sat_val,
        "Sunday: ",
        sun_val,
    )
    print("EX3", email_counts)
    print("EX5", uname, email_counts[email])


filename = input("Enter file name: ")
day_counter(filename)
