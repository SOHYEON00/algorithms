// function solution(begin, target, words) {
//     var answer = 0;
//     let beginArr = [];
//     let i = 0;
//     let count = 0;
    
//     if(!words.includes(target)){
//         return answer = 0;
//     }
    
//     for(let i=0; i < begin.length; i++){
//         beginArr.push(begin[i]);
//     }
    
//     while(count < 3){
//         let saveOriginal = beginArr.concat();
        
//         console.log(`i : ${i}`);
//         console.log(`count : ${count}`);
//         console.log(`beginArr : ${beginArr}`);      
        
//         if(begin[i] === target[i]){
//             i++;
//         }
//         else {
//           beginArr.splice(i,1,target[i]);
        
//             if(!words.includes(beginArr.join(''))){
//                 beginArr = saveOriginal.concat();
//                 console.log(`beginArr : ${beginArr}`); 
//                 if(begin === beginArr.join('')){
//                     count++;
//                 }
//                 i++;
//             }
//             else{
//                 let delIdx = words.indexOf(beginArr.join(''));
//                 words.splice(delIdx, 1);
//                 console.log(`beginArr : ${beginArr}`); 
//                 begin = beginArr.join(''); 
//                 answer += 1;   
//                 i= 0; // 다시 맨 첫글자부터 다시 바꿔보기 
//             }  

//         }
//     }
    

//     return answer;
// }


function solution(begin, target, words) {
    var answer = 0;
    let distinction = begin.length;
    
    if(!words.includes(target)) {
        return answer = 0;
    }
    
    const newWords = words.map((e,i) =>{
        let count = 0;
        for(let j=0; j<begin.length; j++){
            if(words[i][j] === begin[j]){
                count++;
            }
        }
        return {value: e, count: count }
    })
    
    newWords.sort((a, b) => {
        return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
        
    } ); //내림차순 정렬
    
    for(let i=distinction; i>0; i--) {
        let temp = newWords.filter(e => (e.count === i-1));
        temp.sort((a, b) => {return a.value < b.value ? -1 : a.value > b.value1 ? 1 : 0;})
        console.log(temp);
        
        let chk = temp.filter(e => e.value === target);
        if(chk.length === 0){
            answer += temp.length;
        }  
        else{
            return answer +1;
        }
       
    }
    
  
    return answer+1;
}