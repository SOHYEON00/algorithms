function solution(numbers, target) {
    var answer = 0;
    
    const makeNode = (index, sum) => {
        
        if(index === numbers.length){
            // console.log(`${index}, ${sum}`);
            if(sum === target){
                // console.log(`answer : ${index}, ${sum}`)
                answer ++;
            }
            return;
        }
//         만들 수 있는 모든 경우의 수를 +,-를 다 적용함으로써 검사(sum)
        makeNode(index+1, sum+numbers[index]);
        makeNode(index+1, sum-numbers[index]);
        
    }
    
    makeNode(0, 0);
    return answer;
}

// 문제출처 : 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/43165
// 풀이참고: 노요셉님