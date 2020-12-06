def solution(numbers):
    answer = ''
    
    str_numbers = list(map(str, numbers))
    str_numbers.sort(key = lambda x : x*5, reverse=True)
    
    # ex1 [3, 30, 34, 5, 9]
    # 	['9', '5', '34', '3', '30']
    #  ex2 [6, 10, 2]
    # 	['6', '2', '10']

    if(len(numbers) == numbers.count(0)):
        answer = '0'
    else : 
        answer += ''.join(str_numbers) 

    return answer


# 테스트 11 계속 틀리던 코드
# def solution(numbers):
#     answer = ''
    
#     str_numbers = list(map(str, numbers))
#     str_numbers.sort(key = lambda x : x*5, reverse=True)
    
#     answer += str(''.join(str_numbers))

#     return answer