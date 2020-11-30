# Passed but only 2 points
#  def solution(array, commands):
#     answer = []
    
#     for command in commands:
#         commandFrom = command[0]
#         commandTo = command[1]
#         index = command[2]
#       // commandFrom, commandTo, index = command 이런 표현도 가능하다는 것...! 각 변수에 들어가는 값은 같음
        
#         slicedArr = array[(commandFrom-1):(commandTo)]
        
#         slicedArr.sort()
        
#         answer.append(slicedArr[index-1])
#     return answer 


# no lamda
def solution(array, commands):
    answer = []
    
    for command in commands:
        
        commandFrom, commandTo, index = command       
        answer.append(sorted(array[(commandFrom-1):(commandTo)])[index-1])
    
    return answer
