/**
 * 코드스쿼드 마스터즈 웹FE 프리스쿨
 * 자바스크립트 프로그래밍
 * 미션3: Array 의 reduce 메서드처럼 동작하는 myReduce 메서드 만들기
 * 예제 출처: Learning Javascript
 * 
 * Author: choisohyun
 */

const myReduce = (arr, callback, initialValue) => {
    let accumulator = initialValue;
    
    arr.forEach(currentValue => {
        accumulator = callback(accumulator, currentValue);
    });
    
    return accumulator;
}

// 예제1: 배열 요소 총합 구하기
const arr = [5, 7, 2, 4];
const sum = myReduce(arr, (next,prev) => next += prev, 0);
console.log(sum);   // Output: 18


// 예제2: 6글자 이상인 단어만 출력하기
const words = [
    "Beachball", "Rodeo", "Anger", "Aardvark",
    "Wylophone", "November", "Chocolate", "Papaya",
    "Uniform", "Joker", "Clover", "Bali"
]
const longWords = myReduce(words, (a, w) => w.length > 6? a+" "+w : a, "").trim();
console.log(longWords);
// Output: Beachball Aardvark Wylophone November Chocolate Uniform
let map = new Map();
map.set('name', 'sohyun');
map.set('age', 28);

console.log(map);
console.log(map.get('name'));
