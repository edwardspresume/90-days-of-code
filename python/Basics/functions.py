# create a function
def sayHello(name='No name'):
    print('Hello', name)


sayHello()


# Return a value
def getSum(num1, num2):
    return num1 + num2


numSum = getSum(2, 5)
print(numSum)


def addOne(num):
    num += 1

    return num


test = addOne(1)
addOne(test)
