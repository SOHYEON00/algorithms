function solution(name) { //A : 65
    var answer = 0;
    let length = []; //각 자리수마다 up,down counting
    let i = 0;

    //name의 문자를 A로 만들 수 있는 최소값
    for(let i=0; i<name.length; i++){
        let up = name.charCodeAt(i) - 65;
        let down = 91 - name.charCodeAt(i);    
        (up <= down) ? length.push(up) : length.push(down);
    }

    while(length.reduce((a, b) => a+b, 0) !== 0){

        let right = 1; //오른쪽으로 검사
        let left = 1; // 왼쪽으로 검사
        
        if(length[i] !== 0){ //현재 i인덱스의 값이 0이 아니면 
            answer+= length[i];
            length[i] = 0; //0으로 만들어 준다.
        }
        
        else { //현재 인덱스의 값이 0이라면, 오른쪽과 왼쪽으로 A가 아닌 문자가 나올 때까지 검사
            for(let j=1; j<length.length; j++){
                if((i+j) > length.length-1){ //배열길이를 넘어갈 경우 고려 
                    let next = (i+right)-length.length;
                    if(length[next] === 0){
                        right++;
                    }else break;
                } else {
                    if(length[i+j] === 0){ 
                        right++;
                    } else break;
                }
                    
                if((i-j) < 0) {  //배열 길이를 넘어갈 경우 고려 -1,-2
                    let end = length.length+(i - j);
                    if(length[end] === 0) {
                        left++;
                    } else break;
                }
                else {
                    if(length[i-j] === 0){
                        left++;
                    } else break;
                }
                    
            }
            //left, right 중 더 작은 값이 A가 아닌 수를 만났단 의미
            if(left < right){
                answer += left;
                ((i-left)<0) ? i = length.length+(i - left) : i -= left;
            }
            else{
                answer += right;
                ((i+right) > length.length-1) ? i=(i+right)-length.length : i+=right;
            }
        }
    }
  

    return answer;
}