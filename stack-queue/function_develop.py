import math

def solution():
    progresses = [95, 90, 99, 99, 80, 99]
    speeds = [1, 1, 1, 1, 1, 1]
    answer = []
    period = []  #stack
    
    for i in range(len(progresses)):
        leftDay = -((progresses[i] - 100)//speeds[i])
        period.append(leftDay)
        
    
    count = 1
    period.reverse()
    current = period.pop()
    
    while period :
        
        compare = period.pop()
        
        if(current >= compare):
            count += 1
        else:
            answer.append(count)
            count = 1
            current = compare
    
    answer.append(count)
    return answer