function solution(triangle) {
    var answer = 0;
    let copyArr = triangle.concat(); //파라미터triangle 복사본
    
    //triangle의 단계별 for문
    for(let i=1; i<copyArr.length; i++){
        for(let j=0; j<=i ; j++){ //각 단계의 엘리먼트 for문
            const current = copyArr[i][j];
            
            if(j === 0){ //삼각형 끝자리로 비교할 대상이 없으므로 바로 연삼
                copyArr[i][j] = current+copyArr[i-1][0];
            } 
            else if(j === i){//삼각형 끝자리로 비교할 대상이 없으므로 바로 연삼
                copyArr[i][j] = current+copyArr[i-1][j-1];
            }
            else{ 
                copyArr[i][j] = 
                (copyArr[i-1][j-1] >= copyArr[i-1][j]) ? //n자리라면, 이전단계[i-1]의 n자리 수와 n-1자리 수의 값 비교
                    current+copyArr[i-1][j-1] : current+copyArr[i-1][j];    //더 큰값으로 넣어줌.
            }    
        }
    }
    
    answer = Math.max(...copyArr[copyArr.length-1]);
    return answer;
}