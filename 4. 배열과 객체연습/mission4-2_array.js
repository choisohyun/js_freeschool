/**
 * 코드스쿼드 마스터즈 웹FE 프리스쿨
 * 자바스크립트 프로그래밍
 * 미션2: type이 sk인, name으로 구성된 배열 만들기
 * 
 * Author: choisohyun
 */


const data = require('./data').mission2_data;

const skNameArray = (data, result = []) => {
    let first = isSK(data, result);
    nextChild(data, first);
    console.log(result);
}

// type이 sk인지 확인하는 함수
const isSK = (data, result) => {
    if (data.type === 'sk') {
        result.push(data.name);
    }
    return result;
}

// 다음 자식노드를 찾는 함수
const nextChild = (data, result) => {
    datas = data.childnode;

    if (datas.length > 0) {
        datas.forEach(data => {
            let rest = isSK(data, result);
            nextChild(data, rest);
        });
    }
}

// Output: [ 'Yong', 'hary', 'solvin', 'hani', 'chulsu' ]
skNameArray(data[0]);   