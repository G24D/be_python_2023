print("EX1")
print("----------------------------------")


class Restaurant:
    number_served = 0

    def __init__(self, restaurant_name, cuisine_type, number):
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type
        self.number = number

    def describe_restaurant(self):
        print(f"Name: {self.restaurant_name}")
        print(f"Type: {self.cuisine_type}")

    def open_restaurant(self):
        print(f"{self.restaurant_name} is open.")

    def count_res(self):
        self.number_served = self.number_served + 1
        print(self.restaurant_name, "count", self.number_served)

    def set_number_served(self):
        self.number_served = self.number + 1
        print(f"{self.restaurant_name} served {self.number_served} people today")


s = Restaurant("My Restaurant", "LuxuRY", 1)
s.open_restaurant()
s.describe_restaurant()

print("EX2")
print("----------------------------------")


a = Restaurant("Instance1", "TES1", 1)
b = Restaurant("Instance2", "TES2", 1)
c = Restaurant("Instance3", "TES3", 1)

a.describe_restaurant()

b.describe_restaurant()

c.describe_restaurant()


print("EX3")
print("----------------------------------")


class User:
    login_attempts = 0

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def describe_user(self):
        print(f"FNAME: {self.first_name}")
        print(f"LNAME: {self.last_name}")

    def greet_user(self):
        print(f"{self.first_name} is saying HELLO")

    def increment_login_attempts(self):
        self.login_attempts = self.login_attempts + 1
        print(f"{self.first_name} has attempted {self.login_attempts} times")

    def reset_login_attempts(self):
        self.login_attempts = 0
        print(f"LOGIN ATTEMPT HAS RESETTED {self.login_attempts}")


user1 = User("ELON", "Musk")

user1.greet_user()
user1.describe_user()
user2 = User("XAEA-12", "ELON")

user2.greet_user()
user2.describe_user()


print("EX4")
print("----------------------------------")


test1 = Restaurant("test1", "type1", 1)
test1.count_res()
test1.count_res()
test1.count_res()
test1.count_res()
test1.count_res()

test2 = Restaurant("test2", "type2", 6)
test2.count_res()
test2.count_res()

test2.set_number_served()


print("EX5")
print("----------------------------------")

userAtt = User("FAILUREUSER", "FORGOTPASS")

userAtt.increment_login_attempts()
userAtt.increment_login_attempts()
userAtt.increment_login_attempts()


userAtt.reset_login_attempts()


userAtt.increment_login_attempts()
userAtt.increment_login_attempts()


userAtt.reset_login_attempts()


print("EX6")
print("----------------------------------")


class IceCreamStand(Restaurant):
    pass

    flavors = []

    def add_flavor(self, flavor):
        self.flavors.append(flavor)
        print(self.flavors)


flaaava = IceCreamStand("Ice", "nice", 2)

flaaava.add_flavor("vanilla")
flaaava.add_flavor("yogurt")
flaaava.add_flavor("choco")


print("EX7")
print("----------------------------------")


class Admin(User):
    pass

    privilages = [
        "Can add post",
        "Can delete post",
        "Can ban user",
        "Can remove messages",
    ]

    def show_privilages(self):
        for x in self.privilages:
            print(f"Your possible privilages are: YOU {x}")


admin1 = Admin("USER", "USER")
admin1.show_privilages()
