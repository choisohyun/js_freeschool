// 1. 함수 호출


const firstname = "Choi";
run();

function printName(name) {
	var myname = "gildong";
	return myname + ", " +  name;
}

function run() {
    console.log(printName(firstname)); // gildong, undefined
    var firstname = firstname || "hong";
    var result = printName(firstname);  // gildong, hong
    console.log(result);
}




/**
 * 15줄에서 출력 결과가 undefined로 나오는 이유
 * ==> Hoisting이 일어나기 때문에
 * 
 * Hoisting: 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것
 * 
 * Hoisting이 일어날 때 코드
 function run() {
    var firstname;
    var result;
    console.log(printName(firstname)); // gildong, undefined
    firstname = firstname || "hong";
    result = printName(firstname);  // gildong, hong
    console.log(result);
}                                                   
 * 참고: https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html
 */