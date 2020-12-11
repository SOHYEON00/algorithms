// var 로 변수를 선언한 것이 아쉽지만 너무 간단하고 가독성도 좋은 코드인 것 같다.

function solution(answers) {
    var answer = [];
    // 답 패턴과 수험생이 정해져 있기 때문에 이렇게 아예 배열 선언해도 된다.
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // filter()
    // round the array 'answers' which is the answer of test 
    // and compare with each student's answer using index
    // use % (modulus, division remainder, 나머지 값) for finding the right index in student's array

    // answers.filter.length()로 정답(answers)와 각 수포자의 답 비교 후 정답만으로 구성된 배열의 길이 카운트
    // -> 즉, 각 수포자가 맞춘 정답의 개수가 된다.
    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}