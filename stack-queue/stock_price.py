def solution():
    prices = [1, 2, 3, 2, 3]
    answer = []
    
    for i in range(len(prices)-1):
        count = 0        
        
        for j in range(i+1, len(prices)):
            if(prices[i] > prices[j] or j == len(prices)-1):
                answer.append(count+1)
                break
            else :
                count += 1
    answer.append(0)
    return answer