class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year


class Battery:
    def __init__(self, battery_size=40):
        self.battery_size = battery_size

    def describe_battery(self):
        print(f"This car has a {self.battery_size}-kWh battery")


class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        self.battery = Battery()

    def describe_battery(self):
        self.battery.describe_battery()

    def fill_gas_tank(self):
        print("This car doesn't have a gas tank!")

    def upgrade_battery(self):
        if self.battery.battery_size != 65:
            self.battery.battery_size = 65


my_electric_car = ElectricCar("Tesla", "Model S", 2022)
my_electric_car.describe_battery()
my_electric_car.upgrade_battery()
my_electric_car.describe_battery()
