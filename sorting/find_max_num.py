def solution(numbers):
    answer = ''
    
    str_numbers = list(map(str, numbers))
    str_numbers.sort(key = lambda x : x*5, reverse=True)
    
    
    if(len(numbers) == numbers.count(0)):
        answer = '0'
    else : 
        answer += str(''.join(str_numbers))
    

    return answer


# 테스트 11 계속 틀리던 코드
# def solution(numbers):
#     answer = ''
    
#     str_numbers = list(map(str, numbers))
#     str_numbers.sort(key = lambda x : x*5, reverse=True)
    
#     answer += str(''.join(str_numbers))

#     return answer