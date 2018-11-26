import re
with open("Buildingstable.txt","r") as input:
    with open("BuildingsInsert.sql","w") as output:
        arr = []
        count = 0
        while True:
            line =  input.readline()
            line = ''.join(c for c in line if not c == '\n')
            count += 1

            if line:
                arr.append(line)
                if count == 6:
                    count = 0
                    output.write("INSERT INTO Buildings VALUES("+ arr[0] + ",'"
                    + arr[1] + "','"+ arr[2] + "','"+ arr[3] + "',"+ arr[4] + ","
                    + arr[5] +") \n")
                    arr = []
            else:
                break
