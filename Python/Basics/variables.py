# VARIABLES AND DATA TYPES


# DATA TYPE
myStr = 'hello'
myInt = 3
myFloat = 1.3

# Multiple assignment
num, name, age, status = (11, 'ed', 25, True)
print(num, name, age, status)

# corhesion
num = str(num)
age = float(age)
age = int(age)

# Array
myList = [1, 2, 3, 'Hello']

# Object
myDict = {'name': 'Ed', 'age': 25, 'sign': 'lightning'}


# Indicate type of data
print(type(myDict))

# Display a property from dict
print(myDict['name'])
