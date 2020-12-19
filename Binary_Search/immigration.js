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