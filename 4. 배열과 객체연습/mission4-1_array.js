/**
 * 코드스쿼드 마스터즈 웹FE 프리스쿨
 * 자바스크립트 프로그래밍
 * 미션1: 숫자타입으로만 구성된 요소를 뽑아 배열 만들기
 * 
 * Author: choisohyun
 */


const data = require('./data').mission1_data;

// ==========================================================
// 방법 1: for .. in
const for_in = () => {
    let result = [];
    for (key in data) {
        const newData = data[key];
        
        for (k in newData) {
            if (typeof newData[k] === 'number') {
                result.push(k);
            }
        }
    }

    console.log(result);
}


// ==========================================================
// 방법 2: Object.keys Object.values
const obj_values = () => {
    let result = [];

    Object.values(data).forEach(element => {
        Object.keys(element).forEach(key => {
            if (typeof element[key] === 'number' ) {
                result.push(key);
            }
        });
        
    });
    console.log(result);
}




for_in();
obj_values();
/** Output
[
  'width',   'height',
  'hOffset', 'vOffset',
  'size',    'hOffset',
  'vOffset'
]
 */