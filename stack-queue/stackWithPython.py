#Basic : 팬케잌으로 스택 설명하기
#스택의 특징 
# #list에 엘리먼트를 추가(push)하고 추출(pop) 하는 동작은 모두 LIFO (Last In First Out).
# #LIFO : 마지막으로 들어온 요소를 가장 처음으로 제거함.

# #Using lists : 
# pancakeStack = []

# #list에 .append()함수를 이용해 스택에 엘리먼트를 추가하는 동작을 함. 이를 PUSH 라고 함.
# pancakeStack.append('Pancake #1')
# pancakeStack.append('Pancake #2')
# pancakeStack.append('Pancake #3')

# print(pancakeStack) #['Pancake #1', 'Pancake #2', 'Pancake #3']

# #list에 .pop()를 이용해 스택의 엘리먼트를 제거하는 동작을 함. 이를 POP이라고 함.
# pancakeStack.pop()
# print(pancakeStack) #['Pancake #1', 'Pancake #2']

#----------------------------------------------------------------------------------------

# collections - deque를 이용한 스택
# deque 객체를 이용하는 걸 제외하고는 특별히 다른 건 없지만, 성능적으로 낫다.

from collections import deque

pancakeStack = deque()

# element 삽입
pancakeStack.append('Pancake #1')
pancakeStack.append('Pancake #2')
pancakeStack.append('Pancake #3')
print(pancakeStack) #deque(['Pancake #1', 'Pancake #2', 'Pancake #3'])

# # element 삭제
# pancakeStack.pop()

# print(pancakeStack) #deque(['Pancake #1', 'Pancake #2']) > LIFO로 동작하는 걸 볼 수 있다.



#---------------------------------------------------------------

# 스택과 큐 모두 사용가능한 함수들 / deque아니어도 언제든 사용 가능함.

# 길이 구하기
# len(pancakeStack) #3

# # 아이템 x와 매치되는 요소 개수 카운트하기
# pancakeStack.count('Pancake #1') #1

# #스택/큐에 아이템 추가하기
# pancakes = ['Pancake #4','Pancake #5','Pancake #6']

# pancakeStack.extend(pancakes)
# print(pancakeStack) #deque(['Pancake #1', 'Pancake #2', 'Pancake #3', 'Pancake #4', 'Pancake #5', 'Pancake #6'])

# # 스택/큐 뒤집기 (reverse)
# pancakeStack.reverse()


# deque에서만 사용가능한 기능들

# 맨 끝의 엘리먼트 n개를 맨 처음으로 옮기기
#.rotate(n) : n은 맨 끝 엘리먼트 몇 개를 옮길지 결정 

pancakeStack.rotate(1)# deque(['Pancake #1', 'Pancake #2', 'Pancake #3']) >> deque(['Pancake #3', 'Pancake #1', 'Pancake #2'])
print(pancakeStack) 

pancakeStack.rotate(2)# deque(['Pancake #1', 'Pancake #2', 'Pancake #3']) >> deque(['Pancake #2', 'Pancake #3', 'Pancake #1'])
print(pancakeStack) 
