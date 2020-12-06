#     해당 cnt (디스크시간) 와 같거나 작은 프로젝트만 구할 수 있음 ex) [0, 1, -1]
#     list(filter(lambda x: x <= cnt, jobs )) : filter사용해 더 유용함

#  key=lambda x: x[1] : 2차원배열 열을 기준으로 정렬하는 법

# 사용한 식..

# 1. cnt를 기준으로 이미 디스크에 요청한 작업들 중, 입장시간이 빠른 순
# list(filter(lambda x: x[0] <= cnt, jobs)) 
# 2. 디스크에 요청한 작업들 중, 1번을 거쳤기 때문에 우선순위 1) 입장순서 빠른 애들 2) 작업요청 빠른애들 순으로 정렬
# sorted(lists, key=lambda x: x[1])

# waitingList로 활용은 할 수 있어도 결국 jobs에서 하나씩 빼줘야하는데 (빼야하는 걸) 어떻게 체크해서 뺀담?
# jobs = waitingList + jobs[len(waitingList)+1:]

import heapq
import math

def solution(jobs):
    answer = 0
    numOfJobs = len(jobs)
    cnt = 0 #디스크 작업시간
    
    jobs.sort()
     
    
    while jobs :
        
        waitingList = sorted(list(filter(lambda x: x[0] <= cnt, jobs)), key=lambda x: x[1], reverse = True)
        
        if(waitingList):
            processed = waitingList.pop() #해당 프로세스 작업수행
            cnt += processed[1]
            answer += cnt - processed[0]
            jobs = waitingList + jobs[len(waitingList)+1:]

        else: 
            cnt += 1
    
    answer = int(answer/numOfJobs)
    return answer
