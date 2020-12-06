# 큐 말고 stack으로 풀었더니 5점

import heapq

def solution(operations):
    answer = []
    heap = []
        
    for operation in operations:
            
        if(operation == 'D 1'):
            heap.sort() #내림차순
            try: heap.pop()
            except: continue
                
        if(operation == 'D -1'):
            heap.sort(reverse = True) #오름차순
            try: heap.pop()
            except: continue
            
        if(operation.split()[0] == 'I'):
            heap.append(int(operation.split()[1]))
                   
    
    if(heap):
        answer.append(max(heap))
        answer.append(min(heap))
    else:
        answer = [0,0]
              
    return answer