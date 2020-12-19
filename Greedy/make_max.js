function solution(number, k) {
    var answer = '';
    let arrNum = []; //문자열number를 int형으로 만든 배열
    let stack = []; //answer에 들어갈 스택
    let cnt = 0; //삭제된 횟수
    
    for(let i=number.length-1; i>=0; i--){
        arrNum.push(parseInt(number[i])); //기존 number의 reversed
    }
    
    while(cnt < k) { 
        
        let current = arrNum.pop(); //number의 맨 첫 숫자
        
        if(stack.length === 0){
            stack.push(current); //아무것도 없으면 넣어준다.
        }
        
        else {
            for(let i=stack.length-1; i>=0; i--){ // current와 스택의 가장 윗부분부터 검사
                if(current > stack[i]){ //current거 더 큰 경우
                    stack.splice(i,1); //stack에서 삭제 = stack.pop()
                    cnt++;
                    if(cnt === k) { stack.push(current); break;} //만일, 삭제횟수가 다 된 경우
                    if(stack.length === 0){ stack.push(current);} //다 삭제하고 나니, 스택이 비어있는 경우
                }
                else { //current가 stack의 top과 같거나 작은 경우
                    stack.push(current);
                    break;
                }
            }
        }
        if(arrNum.length === 0) break; //삭제되어야하는 수들이 뒤쪽에 있어서 while문을 벗어나지 못하는 경우 ex) 99991, 2 -> 999
    }
    
    // 마지막 if문으로 벗어난 경우 이미 정렬된 상태이므로 앞부터 길이에 맞게 삭제
    if(stack.length > number.length - k){
        stack = stack.splice(0,number.length - k);
    }

    arrNum.reverse();
    answer = (stack.join('') + arrNum.join('')); //cnt = k라서 while문이 끝난 경우, arrNum에 남아있는 숫자 붙여놓아야함.
    
    return answer;
}






        