/**
 * 코드스쿼드 마스터즈 웹FE 프리스쿨
 * 자바스크립트 프로그래밍
 * 미션1: 모든 넓이 값을 얻을 수 있는 getArea함수 만들기
 * 미션2: 지금까지 호출된 함수가 무엇인지 알려주는 printExecutionSequence 함수 만들기
 * Author: choisohyun
 */


// getArea: 모든 넓이 값을 얻을 수 있는 함수
const getArea = (shape, ...nums) => {
    let [a, b, c] = nums;
    
    switch(shape) {
        case 'circle':
            getCircle(a, b);   
            break;
        
        case 'rect':
            getRect(a, b);
            break;
        
        case 'trapezoid':
            getTrape(a, b, c);
            break;
        
        default:
            console.log('Enter a valid shape.');
    }
}


const getCircle = (start, end, result = 0) => {
    // 원의 넓이 값 출력
    if (end === undefined) {
        result = Math.PI * Math.pow(start, 2);
        console.log(result);
        printExecutionSequence(['circle', result]);
    }

    // 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력. (재귀적인 해결책을 제시한다)
    else {
        if (start <= end) {
            result += Math.PI * Math.pow(start, 2);
            getCircle(start+1, end, result);
        }
        else {
            console.log(result);
            printExecutionSequence(['circle', result]);
        }
    }
}


// 사각형의 넓이 값 출력
const getRect = (width, height) => {
    let area = width * height;
    console.log(area);
    printExecutionSequence(['rect', area]);
}


// 사다리꼴의 넓이 값 출력
const getTrape = (top, bottom, h) => {
    let area = (top + bottom) * h / 2;
    console.log(area);
    printExecutionSequence(['trapezoid', area]);
}


// printExecutionSequence: 지금까지 호출된 함수가 무엇인지 알려주는 함수
let result = [];
const printExecutionSequence = (sequence) => {
    if (sequence !== undefined) {        
        result.push(sequence);
    }
    else {
        console.log('계산수행순서');
        for (let [key, value] of result) {
            console.log(`도형: ${key}    결과값: ${value}`);
        }
    }
}

getCircle();                    // NaN
getArea('circle', 10);          // 314.1592653589793
getArea('rect', 10,15);         // 150
getArea('trapezoid', 10,15,12); // 150
getArea('circle', 1, 10);       // 1209.5131716320705

printExecutionSequence();       
/** 결과값
 * 도형: circle    결과값: NaN
 * 도형: circle    결과값: 314.1592653589793
 * 도형: rect    결과값: 150
 * 도형: trapezoid    결과값: 150
 * 도형: circle    결과값: 1209.5131716320705
 */
