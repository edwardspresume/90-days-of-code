people = ['Jon', 'Sara', 'Tim', 'James']

# For loop
for person in people:
    print('Current Person:', person)

# Iterate by seq index
for i in range(len(people)):
    print('Current person 2:0', people[i])

for i in range(0, 10):
    print(i)

# While loop
count = 0
while count < 10:
    print('Count:', count)
    count += 1
    if count == 5:
        break
