# # 티켓매표소로 Queue(큐) 설명하기

# #줄이 비어있는 티켓 매표소가 있다고 하자.
# ticket_queue = []

# #이때, 손님이 한 명 줄을 선 경우
# #PUSH작업은 스택과 같다. 다만, enqueue or enqueuing이라고 함.
# ticket_queue.append('Customer #1')

# #2명이 줄을 더 서 총 3명의 손님이 대기 중이다.
# ticket_queue.append('Customer #2')
# ticket_queue.append('Customer #3')
# print(ticket_queue) #['Customer #1', 'Customer #2', 'Customer #3']

# #스택과 다르게 큐의 삭제작업은 FIFO (First In First Out)으로 진행됨. 맨 처음 들어온 요소부터 제거함.
# #이를 dequeue or dequeuing 이라고 함.

# #pop(0)인 이유 : 맨 처음 엘리먼트 제거를 위해 인덱스가 0인 요소를 pop
# print("티켓을 산 사람: " + ticket_queue.pop(0) ) #티켓을 산 사람: Customer #1
# print(ticket_queue)  #['Customer #2', 'Customer #3']

#----------------------------------------------------------------------------------------

# COLLECTIONS - deque를 이용한 큐
# 문법적으로 비슷하지만 pop() 대신, popleft()를 사용한다는 점이 특별히 다르다.

from collections import deque

ticket_queue = deque()

# element 삽입
ticket_queue.append('Customer # 1')
ticket_queue.append('Customer # 2')
ticket_queue.append('Customer # 3')

print(ticket_queue) #deque(['Customer # 1', 'Customer # 2', 'Customer # 3'])

# element 삭제
print(ticket_queue.popleft()) #Customer # 1
ticket_queue.popleft() # 'Customer #2 삭제'

print(ticket_queue) #deque(['Customer # 3'])