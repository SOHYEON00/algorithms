# 테스트는 모두 통과, 하지만 효율성 테스트에서 통과되지 못함.
# --> heapreplace(heap, item) 사용
# - heap에서 가장 작은 항목을 팝하고 반환하며, 새로운 item도 푸시
# - 힙 크기는 변경되지 않음(고정 힙을 사용할 때 더 적합함.)
# - heappop()과 heappush()가 결합된 액션이지만 각 함수를 사용하는 것보다 훨씬 효율적임.

# heappushpop(heap, item)
# - 힙에 item을 푸시한 다음, heap에서 가장 작은 항목을 팝하고 반환

# import heapq

# def solution(scoville, K):
#     answer = 0
    
#     heapq.heapify(scoville)
    
#     min = scoville[0]
    
#     while min < K:
#         answer += 1
        
#         if((len(scoville) == scoville.count(0)) or (len(scoville) <= 1)):
#             answer = -1
#             break  
        
#         min += scoville[1]*2
#         sec = heapq.heappop(scoville)
        
#         heapq.heappush(scoville, (first + (sec*2)))                 
            
#         min = scoville[0]
        
#     return answer


# ******** 수정한 부분
# 1. if문에 있던 or 을 각각 분리했다. 
# - 효율성 부분에서 아무리 생각해봐도 힙 관련해서는 더 바꿀 수 있는 부분이 없어서 if문의 조건이 과하고 심지어 while문 안에 있기 때문에 문제가 있다고 생각함.
# - 힙의 노드가 모두 0인 경우, while문 진입 전에 체크가 가능하기 때문에 밖으로 뺌.
# - 기존, 힙의 길이를 확인하는 if문은 while문 안에서 필요하기 때문에 안에 둠.



import heapq

def solution(scoville, K):
    answer = 0
    
    heapq.heapify(scoville)
    
    min = scoville[0]
    
    if((len(scoville) == scoville.count(0))):
        answer = -1
    
    while min < K:
        answer += 1
        
        if(len(scoville) <= 1):
            answer = -1
            break
        
        first = heapq.heappop(scoville)
        sec = scoville[0]
        heapq.heapreplace(scoville, (first + sec*2))      
        
        min = scoville[0]

        
    return answer