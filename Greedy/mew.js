const myPromise = () => Promise.resolve('I');

function firstFunction() {
    myPromise().then(res => console.log(res));
    console.log('sec');
}

async function secondFunction() {
    console.log(await myPromise())
    console.log('sec')
}

firstFunction()
secondFunction()

var num = 8;
var num = 10;
num = 11;
var num = num;
console.log(num);

function sleep(ms){
    var current = Date.now()
    var until =Date.now() + ms;
    while(current < until) {
      current = Date.now()
    }
    console.log("p");
  }
  
  console.log('r');
  
  setTimeout(function() {
    console.log("c1");
  }, 3*1000);
  
  sleep(5*1000);
  console.log('d');
  console.log('c');