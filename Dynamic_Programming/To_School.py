road = [[0 for col in range(m)] for row in range(n)]
road[0][0] = 1 #	[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

array = [[0]*m]*n
array[0][0] = 1 #	[[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]]


def solution(m, n, puddles):
    answer = 0
    road = [[0 for col in range(m+1)] for row in range(n+1)] #mxn인 이차원배열 생성
    
    road[1][1] = 1 #집 위치 [1][1]에 1 값 넣어줌
            
    for i in range(1, n+1):
        for j in range(1, m+1):

            if[j,i] in puddles: #j와 i가 바뀌었다,,, 행과열 헷갈리지 말자
                continue
            if(i==1 and j==1):
                continue
            road[i][j] = (road[i-1][j] + road[i][j-1])
    
    return road[-1][-1]%1000000007