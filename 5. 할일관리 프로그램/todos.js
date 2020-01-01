/**
 * 코드스쿼드 마스터즈 웹FE 프리스쿨
 * 자바스크립트 프로그래밍
 * 미션4: 할일관리 프로그램
 * 
 * Author: choisohyun
 */

const data = require('./todos_data').todos;

const show = (obj) => {
    switch(obj) {
        case "all": 
            showAll();
            break;
        case "todo": 
            showTodo();
            break;
        default: console.log("Enter a correct parameter.");
    }
}


const showAll = () => {
    const status = data.reduce((result, element) => {
        let count = (result.has(element.status)) ? result.get(element.status)+1 : 1;
        result.set(element.status, count);
        return result;
    }, new Map());

    const print = [];
    status.forEach((value, key) => print.push(`${key}: ${value}개`));
    console.log(`현재상태 : ${print.join(', ')}`);
}


const showTodo = () => {
    const list = data.filter(e => e.status === 'todo').map(x => x.name);

    console.log(`todo리스트 : 총 ${list.length}건 : ${list.join(', ')}`);
}

show("all");
show("todo");
/** Output
 * 현재상태 : todo: 3개, doing: 2개, done: 2개
 * todo리스트 : 총 3건 : 자바스크립트 공부하기, 영어 공부하기, 맛있는 음식 먹기
 */