// // const student1 = (max) => {
    
// //     let s1Answer = [];
// //     let input = 1;
    
// //     while(s1Answer.length < max) {
// //         if(input > 5) {
// //             input = 1;
// //         }
// //         s1Answer.push(input);
// //         input++;
// //     }
// //     return s1Answer;
// // }

// // const student2 = (array, max) => {
    
// //     let s2Answer = [];
// //     let inputIndex = 0;
    
// //     while(1){
              
// //         if(inputIndex > array.length){
// //             inputIndex = 0;
// //         }
// //         s2Answer.push(2);
        
// //         if(s2Answer.length === max) {
// //             break;
// //         } 
        
// //         s2Answer.push(array[inputIndex]); 
// //         inputIndex++;
// //     }
// //     return s2Answer;
    
// // }

// // const student3 = (array, max) => {
// //     let s3Answer = [];
// //     let inputIndex = 0;
    
// //     for(let i=0; i<max; i++){
// //         s3Answer.push(array[i]);
        
// //         if(s3Answer.length === max) {
// //             break;
// //         }
// //         s3Answer.push(array[i]);
// //     }
    
// //     return s3Answer;
// // }

// // function solution(answers) {
// //     var answer = [];
// //     const s1 = student1(answers.length);
// //     const s2 = student2([1,3,4,5], answers.length);
// //     const s3 = student3([3,1,2,4,5], answers.length);
    
// //     let correctS1 = 0;
// //     let correctS2 = 0;
// //     let correctS3 = 0;
//     // *******************forEach에서 for(i~~)로 바꿨더니 런타임 에러..
// //     answers.forEach((e, i) => {

// //         if(e === s1[i]) {
// //             correctS1++;
// //         }
// //         if(e === s2[i]) {
// //             correctS2++;
// //         }
// //         if(e === s3[i]) {
// //             correctS3++;
// //         }
// //     })
    
// //     const compare = [correctS1, correctS2, correctS3];
// //     let max = Math.max(...compare);
    
// //     for(let i=0; i<compare.length; i++){
// //         if(max <= compare[i]){
// //             answer.push(i+1);
// //             max = compare[i];
// //         }
// //     }
 
// //     return answer; 
// // }


// // *************** answer 정렬 다시
// // for(let i=1; i<compare.length; i++){
// //     if(max <= compare[i]){
// //         answer.push(i+1);
// //         max = compare[i];
// //     }
// // }
// // if(max === correctS1) {
// //     answer.push(1);
// // }

// // answer.sort((a,b) =>  a - b)

// const student1 = (max) => {
    
//     let s1Answer = [];
//     let input = 1;
    
//     while(s1Answer.length < max) {
//         if(input > 5) {
//             input = 1;
//         }
//         s1Answer.push(input);
//         input++;
//     }
//     return s1Answer;
// }

// const student2 = (array, max) => {
    
//     let s2Answer = [];
//     let inputIndex = 0;
    
//     while(1){
              
//         s2Answer.push(2);
        
//         if(s2Answer.length === max) {
//             break;
//         } 
        
//         s2Answer.push(array[inputIndex]); 
       
//         (inputIndex+1 === array.le) ? inputIndex = 0 : inputIndex++
            
        
//     }
//     return s2Answer;
    
// }

// const student3 = (array, max) => {
//     let s3Answer = [];
//     let inputIndex = 0;
    
//      while(1){
//         if(inputIndex === max){
//             inputIndex = 0;
//         }
//         s3Answer.push(array[inputIndex]);
        
//         if(s3Answer.length === max) {
//             break;
//         }
//         s3Answer.push(array[inputIndex]);
//         inputIndex++;
        
//     }
    
//     return s3Answer;
// }

// function solution(answers) {
//     var answer = [];
//     const s1 = student1(answers.length);
//     const s2 = student2([1,3,4,5], answers.length);
//     // const s3 = student3([3,1,2,4,5], answers.length);
    
//     console.log(s1);
//     console.log(s2);
//     // console.log(s3);
    
//     let correctS1 = 0;
//     let correctS2 = 0;
//     let correctS3 = 0;
    
// //     answers.forEach((e, i) => {

// //         if(e === s1[i]) {
// //             correctS1++;
// //         }
// //         if(e === s2[i]) {
// //             correctS2++;
// //         }
// //         if(e === s3[i]) {
// //             correctS3++;
// //         }
// //     })
    
// //     const compare = [correctS1, correctS2, correctS3];
// //     let max =  Math.max(...compare);
    
// //     for(let i=0; i< compare.length; i++){
// //         if(max <= compare[i]){
// //             answer.push(i+1);
// //             console.log(i);
// //             max = compare[i];
// //         }
// //     }
 
//     return answer; 
// }   

// --------------------------------------- submit code ----------------------------- score: 5
const student1 = (max) => {
    
    let s1Answer = [];
    let input = 1;
    
    while(s1Answer.length < max) {
        if(input > 5) {
            input = 1;
        }
        s1Answer.push(input);
        input++;
    }
    return s1Answer;
}

const student2 = (array, max) => {
    
    let s2Answer = [];
    let inputIndex = 0;
    
    // **************** break문 빼고 
    // if(inputIndex > 3) {
    //     inputIndex = 0;
    // } 여기 넣으니까 우선 스택오버플로우는 나지 않음.

    while(s2Answer.length < max){
              
        s2Answer.push(2); 
        
        if(inputIndex > 3) {
            inputIndex = 0;
        }
        
        s2Answer.push(array[inputIndex]); 
        inputIndex++;
        
    }
    return s2Answer;
    
}

const student3 = (array, max) => {
    let s3Answer = [];
    let inputIndex = 0;
    
     while(s3Answer.length < max){
        // ***************** 이 부분이 문제엿음!! 그래서 inputIndex값이 4일 경우, undefined로 되었음
        // s3Answer.push(array[inputIndex]);
        // if(inputIndex > 4) {
        //     inputIndex = 0;
        // }
        if(inputIndex > 4) {
            inputIndex = 0;
        }
        s3Answer.push(array[inputIndex]);
        s3Answer.push(array[inputIndex]);
        inputIndex++;
        
    }
    
    return s3Answer;
}

function solution(answers) {
    var answer = [];
    const s1 = student1(answers.length);
    const s2 = student2([1,3,4,5], answers.length);
    const s3 = student3([3,1,2,4,5], answers.length);
    
    console.log(s1);
    console.log(s2);
    console.log(s3);
    
    let correctS1 = 0;
    let correctS2 = 0;
    let correctS3 = 0;
    
    answers.forEach((e, i) => {

        if(e === s1[i]) {
            correctS1++;
        }
        if(e === s2[i]) {
            correctS2++;
        }
        if(e === s3[i]) {
            correctS3++;
        }
    })
    
    const compare = [correctS1, correctS2, correctS3];
    let max =  Math.max(...compare);
    
    for(let i=0; i< compare.length; i++){
        if(max <= compare[i]){
            answer.push(i+1);
            console.log(i);
            max = compare[i];
        }
    }
 
    return answer; 
}