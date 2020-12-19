function solution(routes) {
    var answer = 0;
    let camera = [];
    let idx = 0;
    let sorted = routes.sort((a,b) => a[1]-b[1]);
    let temp;

    temp = sorted[idx][1];
    idx += 1;

    while(idx < sorted.length) {
        let In = sorted[idx][0];
        let Out = sorted[idx][1];
        
        if(In <= temp && temp <= Out){
            idx += 1;
        }
        else{
            camera.push(temp);
            temp = Out;
            idx += 1;
        }
    }
    answer = camera.length+1;
    return answer;
}