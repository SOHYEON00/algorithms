function solution(N, number) {
    var answer = 0;
    const set = new Array(8).fill().map(()=> new Set());
    
    for(let i=0; i<8; i++){
        set[i].add(Number(N.toString().repeat(i+1))); //N을 문자로 바꿔 5, 55 ,555 ... 이렇게 만들어줌
        
        //i를 기준으로 한 for문 안에 존재 = N이 i번 사용된 경우 (1,2,3,...)
        for(let j=0; j<i; j++){
            for(const ele1 of set[j]){ //set[j]은 N을 i번 사용해 만들어진 수들의 집함
                for(const ele2 of set[i-j-1]){ //N=4인 집합을 만들려면, 1,2,3의 조합이 필요하므로.
                    
                    set[i].add(ele1+ele2);
                    set[i].add(ele1-ele2);
                    set[i].add(ele1*ele2);
                    set[i].add(ele1/ele2);
                }
            }
        }
        if(set[i].has(number)) return i+1; //만약 해당 집합에 number가 있다면 i+1 리턴. (i가 0부터 시작해서.)
    }
    
    return -1;
}