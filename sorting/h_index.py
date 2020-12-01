import math

def solution(citations):
    answer = 0
    
    citations.sort()
    i=0
    cnt = len(citations) # [21,20,22,24] 인 경우 답은 4여야 함. 4번 이상 인용된 논문이 4개, 4번 이하 인용된 논문이 0이므로.
    
    if(min(citations) > cnt):
        answer = cnt
        
    while i<max(citations):
        
        over = len(list(filter(lambda x:x >= i, citations))) #i(h)번 이상 인용된 논문 개수
        under = len(list(filter(lambda x: x < i, citations))) #i(h)번 이하 인용된 논문 개수
        
        if( i <= over and i >= under): #여기서 엄청 헤멤. 문제 이해만 잘 하면 됨.
            answer = i    
            
        i += 1
        
    print(math.floor(12.23423))
        
    return answer