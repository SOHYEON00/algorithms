function solution(n, lost, reserve) {
    var answer = n;
    const lostLength = lost.length; //lost 길이 고정
    let never = []; //절대 체육복을 받을 수 없는 경우를 담을 배열
    lost = lost.reverse();
    
    //lost를 돌면서 경우에 따라 체크해 줄 예정
    while(lost.length > 0){
        let lostPerson = lost[lost.length-1];
        
        //여벌 체육복이 있는 학생이 도난당한 경우를 먼저 체크해준다.
        for(let i=0; i<lostLength; i++){
            if(reserve.indexOf(lost[i]) !== -1){
                console.log(`aa: ${reserve.indexOf(lost[i])}`)
                reserve.splice(reserve.indexOf(lost[i]), 1);
                lost.splice(i, 1);
            }
        }
        
        // 도난당한 사람+1 인 사람이 여벌이 있는 경우인지
        if(reserve.indexOf(lostPerson+1) !== -1){
            reserve.splice(reserve.indexOf(lostPerson+1), 1);
            lost.pop();     
        } 
        //도난당한 사람-1인 사람이 여벌이 있는 경우인지
        else if(reserve.indexOf(lostPerson-1) !== -1){
            reserve.splice(reserve.indexOf(lostPerson-1), 1);
            lost.pop(); 

        } 
        //아무에게도 여벌체육복을 받을 수 없는 경우
        else {
            never.push(lost.pop());
        }
    }
    
    return answer-never.length;
}

// for문이 while문 밖에 있을 때
// 7번만 자꾸 틀림

