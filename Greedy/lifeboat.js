function solution(people, limit) {
    var answer = 0;
    let sortedPeople = people;
    let total = 0;
    sortedPeople.sort((a,b) =>  a-b);
  

    while(sortedPeople.length !== 0) {
        if(total === 0) {
            total += sortedPeople.pop(); 
        }  
            
        if(total + sortedPeople[0] <= limit) {
           total += sortedPeople[0];
            sortedPeople.splice(0, 1);
        } else {
            answer+=1; 
            total = 0;
        }
        
    }
        
    if(total > 0) { answer += 1;}
    return answer;
}

// total말고 stack으로 새로운 배열을 사용하여 구현했더니, 효율성테스트에서 1,3번만 시간초과남. int형 변수로 바꿨더니 해결.