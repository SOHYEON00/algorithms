function solution(clothes) {
    var answer = 0;
    const obj = {};

    for(const [name, type] of clothes) {
        let count = 1;
        // console.log(value); value가 종류 출력함.
        (obj[type]===undefined) ? obj[type] = count : obj[type] += 1; 
    }
     
    
    //[key, value]로 정리된 obj의 경우의 수 계산
    for(const [key, value] of Object.entries(obj)) {
        if(Object.keys(obj).length === 1) {
            answer = value;
            return answer;
        }  
        (answer === 0) ? answer = (value+1) : answer *= (value+1);
    }
    
    return answer - 1;
}

const clothes = [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]];
solution(clothes);