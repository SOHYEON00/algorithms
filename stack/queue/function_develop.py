import math

def solution():
    progresses = [95, 90, 99, 99, 80, 99]
    speeds = [1, 1, 1, 1, 1, 1]
    answer = []
    period = []  #stack
    
    for i in range(len(progresses)):
        leftDay = math.ceil((100 - progresses[i])/speeds[i])
        period.append(leftDay)
    
    current = 0
    count = 1
    compare = 1
    
    while current < len(period):  
        
        if(period[current] >= period[compare]):
            count += 1
            compare += 1
        else: 
            answer.append(count)
            count = 1
            current = compare
            
            if(compare >= len(period)):
                answer.append(count)
                break
            else:
                compare += 1
                
        
        

    print(period)
    return answer