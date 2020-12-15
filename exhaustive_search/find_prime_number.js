// const chkPrimeNum = (num) => {
//     let chkValue = 0;
//     num = num.parseInt();
    
//     (num === 1) ? chkValue = 0 : chkValue = 1;
//     (num % 2 === 0) ? chkValue = 0 : chkValue = 1;
//     (num % 3 === 0) ? chkValue = 0 : chkValue = 1;
//     (num % 5 === 0) ? chkValue = 0 : chkValue = 1;
//     (num % 7 === 0) ? chkValue = 0 : chkValue = 1;
    
//     return chkValue;
// }


// const chkDuplicate = () => {
    
// }

// function solution(numbers) {
//     var answer = 0;
//     let eachNum = [];
//     let arrPrime = [];
    
//     // const getAllNumbers = (digit, array, elementArr, outArr) => {
        
//     // let chr;
//     // for(let i=0; i<digit; i++){
//     //     chr = elementArr.splice(i, 1)[0];
//     //     array.push(chr);
        
//     //     if(elementArr.length === 0){
//     //         console.log(array);
//     //         outArr.push(array.slice());
//     //     }
    
//     //     getAllNumbers(digit, array, elementArr, outArr); //마지막 엘리먼트 실행
//     //     elementArr.splice(i, 0, chr); // chr을 i위치 삽입하기 위함
//     //     array.pop()
//     // }
    
// //     return ;
// // }
// //*******  조합가능한 모든 수 생성완료
// const getAllNumbers = (array, elementArr, outArr) => {
        
//     let chr;
//     for(let i=0; i<elementArr.length; i++){
        
//         chr = elementArr.splice(i, 1)[0];
//         array.push(chr);
        
//         console.log(chr);
//         console.log(elementArr);
//         console.log(array);
//         console.log('----------');
        
// //         여기가 조합가능한 숫자수 조절하는 곳
// // i로 바꿨더니 됨!
// // [
// //   '011', '01',  '011',
// //   '101', '11',  '110',
// //   '1',   '101', '11',
// //   '110'
// // ]
// // [ '17', '7', '71' ]
//         if(elementArr.length === i){
          
//             outArr.push(array.slice());
//         }
    
//         getAllNumbers(array, elementArr, outArr); //마지막 엘리먼트 실행
//         elementArr.splice(i, 0, chr); // chr을 i위치 삽입하기 위함
//         array.pop();
        
//     }
//     return ;
// }
    
// //     str인 numbers를 하나씩 쪼개 string type 그대로 eachNum에 push
//     for(let i=0; i<numbers.length; i++){
//         eachNum.push(numbers.slice(i, i+1));
//     }
    
//     for(let i=1; i<=eachNum.length; i++) {
//         getAllNumbers(i, [], eachNum, arrPrime);
//         console.log(arrPrime.map(_ => _.join("")));
//     }
    
    
    
    
//     return answer;
// }

// // 현재 문제 : 조합가능한 모든 수를 구하지 못함.


const getPermutations = function (arr, selectNumber) { 
    const results = []; 
    if (selectNumber === 1) 
        return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return 
    
    arr.forEach((fixed, index, origin) => { 
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
        const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다. 
        const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기 
        results.push(...attached); // 배열 spread syntax 로 모두다 push 
    }); 
    
    return results; // 결과 담긴 results return 
}; 

function solution(numbers) { 
    var answer = 0; 
    const arr = new Array(numbers.length).fill(0).map((ele,idx)=> numbers[idx]); 
    const set = new Set(); 
    
    for(let i=1; i<=arr.length; i++){ // i 개의 순열을 구한다. 
        const result = getPermutations(arr, i); // i 개의 순열을 순회하며
        result.forEach((ele)=>{ // 문자열을 합쳐 
            const num = parseInt(ele.join("")); 
            let isPrime = true; // 소수인지 판별하고 
            for (let i=2; i<=Math.sqrt(num); i++) { 
                if (num % i == 0) { isPrime = false; break; } 
            } // 소수가 맞다면 set에 추가한다. 
            if(isPrime && num > 1) set.add(num); 
        }) } 
    answer = set.size; 
    return answer; 
}

// 출처 : https://kis6473.tistory.com/88