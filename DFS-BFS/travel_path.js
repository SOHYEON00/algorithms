// function solution(tickets) {
//     var answer = [];
//     let dep = 'ICN';
//     let ari;

//     answer.push(dep);

//     while(tickets.length !== 0){

//         let temp = tickets.filter((e) => (e[0] === dep)); //출발지가 dep인 모든 경우의 수를 구함
        
//         if(temp.length > 1) {
//            temp.sort((a, b) => {return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0}); //경로가 여러개라면 알파벳 순서로 정렬
//         }

//         ari = temp[0][1];
//         answer.push(ari);
//         dep = ari;
       
//         tickets = tickets.filter((e) => e !== temp[0]);  
//     }
    
//     return answer;
// }


function solution(tickets) {
    var answer = [];
    
    const dfs = (dep, tickets, path ) => {
        let newPath = [...path, dep];
        if(tickets.length === 0){
            answer.push(newPath);
        }else {
            tickets.map((e, i) => {
                if(e[0] === dep){
                    let copied = [...tickets];
                    const [[f, t]] = copied.splice(i, 1);
                    dfs(t, copied, newPath);
                }
            });
        }
    }
    
    dfs('ICN', tickets, []);
    return answer.sort()[0];
    
}