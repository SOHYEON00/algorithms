function solution(genres, plays) {
    var answer = [];
    const genreObj = {};
     let totalArr = [];
    
    for(const [index,genre] of genres.entries()) { //for..of..문으로 index로 구하기 위해 entries()사용
        if(!genreObj[genre]) {
            genreObj[genre] = []; //각 장르의 인덱스를 담을 배열 선언
            genreObj[genre].total = 0;
            genreObj[genre].songs = [];
        }
        let playObj = [];
        playObj.key = index;
        playObj.value = plays[index];
        genreObj[genre].songs.push(playObj);
        genreObj[genre].total += playObj.value;
        genreObj[genre].songs.sort((a, b) => b.value - a.value); //정렬
        
    }
   for(const [genre, info] of Object.entries(genreObj))  { //key: genre(classic, pop...)
        totalArr.push(info); //total 값 비교를 이해 배열선언
        info.sort((a,b) => b.total-a.total);  //genre빼고 info 부분만 total에 따라 정렬
        
    }
    console.log(totalArr)
    return answer;
}
const genres = [classic, pop, classic, classic, pop];
const plays = [500, 600, 150, 800, 2500];
solution(genres, plays);