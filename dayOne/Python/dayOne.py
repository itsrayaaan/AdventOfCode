inputData = open('input.txt', 'r')
Lines = inputData.readlines()


# Part One
for i in Lines:
    for j in Lines:
        num1 = int(i)
        num2 = int(j)
        if(num1+num2 == 2020):
            print(num1, num2, num1*num2)


# Part Two

for i in Lines:
    num1 = int(i)
    for j in Lines:
        num2 = int(j)
        for k in Lines:
            num3 = int(k)
            if(num1+num2+num3 == 2020):
                print(num1, num2, num3, num1*num2*num3)
