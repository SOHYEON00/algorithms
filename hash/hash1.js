function solution(participants, completions) {
    var answer = '';
    
    const obj = {};
    for(const participant of participants){
        if(!obj[participant]){
            obj[participant] = 1;           
        }else{
            obj[participant] += 1;
        }
    }
    
    for(const completion of completions) {
       if(obj[completion]) {
           obj[completion] -= 1;
       }        
    }
    for(const [key, value] of Object.entries(obj)) {
        if(value > 0) {
            return answer = key;
        }
    }
    return answer;
}

const participants = [mislav, stanko, mislav, ana];
const completions = [stanko, ana, mislav];
solution(participants, completions);