// 출처 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/43162


function solution(n, computers) {
    var answer = 0;
    let visited = [];
    let start =0 ;
    
    for(let i=0; i<n; i++){
        visited[i] = false;
    }
    
    const dfs = (index) => {
        visited[index] = true;
        
        for(let i=0; i<computers[index].length; i++){
            if(computers[index][i] === 1 && !visited[i]){
                dfs(i);
            }
        }
    }
    
    for(let i=0; i< n; i++){
       if(!visited[i]){
           dfs(i);
           answer += 1;
       }
    }
        
    
    return answer;
}

// dfs() 재귀로 사용함. 깊이우선탐색으로 구현.