function solution(n, edge) {
    var answer = 0;
    let check = [1]; //1번 노드부터 시작하기 때문
    
    while(true){
        let newCheck = [];
        
        edge = edge.filter(e => { //우선 연결된 모든 노드들을 필터릴해주기 위해
          if (check.includes(e[0]) && check.includes(e[1])) return false; //from,to가 없기 때문에 둘다이미 연결되어있다면 뺀다

          //한 쪽만 연결된 경우, 방문되지 않은 노드 체크
          if (check.includes(e[0])) { //첫 요소가 방문되어졌다면
            newCheck.push(e[1]); //새롭게 방문된 노드를 추가
            return false;
          }
          if (check.includes(e[1])) { //반대로, 두번재 요소가 방문되어졌다면
            newCheck.push(e[0]); //새롭게 방문된 노드 추가
            return false;
          }
          return true;
        });
        
        // 더이상 연결할 간선과 새롭게 체크된 노드가 없는 경우
        if(edge.length === 0 && newCheck.length === 0){
            answer = check.length;
            break;
        }
        check = [...new Set(newCheck)]; 
      
    }
    
    return answer;
}


// 생각한 풀이법을 구현하지 못했다. 구현에는 https://juyoungpark718.github.io/posts/39 이분의 코드가 완전히 똑같아
// 이 분의 코드를 공부했다.
