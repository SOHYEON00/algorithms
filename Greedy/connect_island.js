function solution(n, costs) {
    var answer = 0;
    let sorted = costs.sort((a, b) => a[2] - b[2]);
    let visited = [];
    let idx =0;
    let island = 0;
    
    for(let i=0; i<n; i++) {
        visited.push(false);
    }
    visited[sorted[0][0]] = true;
    island += 1;
    
    while(island < n){
        
        let [from, to, cost] = sorted[idx];
        
        if(visited[from] && visited[to]){
            idx++;  
        } 
        else if(visited[from] || visited[to]){
            (visited[from]) ? visited[to]=true : visited[from]=true;
            island += 1;
            sorted.splice(idx, 1);
            idx=0;
            answer += cost;
        }
        else{
            idx++;
        }
    }
    
   
    return answer;
}