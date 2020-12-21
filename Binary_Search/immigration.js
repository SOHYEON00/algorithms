function solution(n, times) {
    var answer = 0;
    let min = 1;
    let max = Math.max(...times)*n;
    let key = Math.floor((max+min)/2);
    times.sort((a, b) => a - b);
    
    if(n <= times.length) { return answer=times[n-1];}
    
    while(min<max) {
        
        let num = 0;
        for(let i=0; i<times.length; i++){
            num += Math.floor(key/times[i]);
        }
        console.log(min, key, max);
        console.log(num);
        
        if(num >= n) { max = key-1; answer = key;}
        else{ min = key+1;}
        
        key = Math.floor((max+min)/2);
    }
    
    return answer;
}

// 테스트케이스 4,6번이 계속 틀림..


function solution(n, times) {
    var answer = 0;
    let oriTimes = times.concat();
    let min = 1; //가능한 심사시간의 최소값
    let max = Math.max(...oriTimes)*n; //가능한 심사시간의 최대값 (가장 오래하는 심사관이 모든 사람을 심사하는 경우)
    // let key = Math.floor((max+min)/2); //max와 min의 중앙값
    oriTimes.sort((a, b) => a - b); //오름차순 정렬
    
    // 기다리는 사람 수 <= 심사관 수 인 경우
    if(n <= times.length) { return answer=oriTimes[n-1];} 
    
    // console.log(oriTimes);

    //min<=max까지 하니까 6번 통과...!
    while(min<=max) {

        let num = 0;
        let key = Math.floor((max+min)/2);
        
        for(let i=0; i<times.length; i++){
            num += Math.floor(key/oriTimes[i]);
        }
        console.log(num);
        if(num >= n) { max = key-1; answer = key;}
        else{ min = key+1;}
        
    }
    
    return answer;
}