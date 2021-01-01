def solution(money):
    # 집 개수만큼의 배열 선언
    getFirst = [0] * len(money) #첫번째 집을 턴 경우
    getLast = [0] * len(money) # 첫번째 집 말고 마지막 집을 턴 경우
    
    getFirst[0] = money[0]
    getFirst[1] = money[0] # 이 부분을 넣어줌으로써 테스트1번 통과. 여기가 0으로 두면 안됌.
    getLast[1] = money[1]
    
    for i in range(2, len(money)-1):
        getFirst[i] = max(getFirst[i-1], getFirst[i-2]+money[i])
               
    for i in range(2, len(money)):
        getLast[i] = max(getLast[i-1], getLast[i-2]+money[i])
    
    
    answer = max(max(getFirst), max(getLast))
    return answer