/**
 * 코드스쿼드 마스터즈 웹FE 프리스쿨
 * 자바스크립트 프로그래밍
 * 미션: 모든 넓이 값을 얻을 수 있는 getArea함수 만들기
 * Author: choisohyun
 */


// getArea: 모든 넓이 값을 얻을 수 있음
const getArea = (shape, ...nums) => {
    
    switch(shape) {
        // 원의 넓이 값 출력
        case 'circle':                        
            if (nums.length == 1) {
                getCircle(nums[0]);
                break;
            }
            else {
                let [start, end] = nums;
                getCircle(start, end);
                break;
            }
        
        // 사각형의 넓이 값 출력
        case 'rect':
            let [width, height] = nums;
            console.log(width * height);
            break;
        
        // 사다리꼴의 넓이 값 출력
        case 'trapezoid':
            let [top, bottom, h] = nums;
            console.log((top + bottom) * h / 2);
            break;
    }
}


// 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력. (재귀적인 해결책을 제시한다)
let sum = 0;
const getCircle = (start, end) => {

    if (start <= end) {
        sum += Math.PI * Math.pow(start, 2);
        getCircle(start+1, end);
    }
    
    else {
        console.log(sum);
    }
}

getCircle();
getArea('circle', 10);          // 314.1592653589793
getArea('rect', 10,15);         // 150
getArea('trapezoid', 10,15,12); // 150
getArea('circle', 1, 10);       // 1209.5131716320705


// printExecutionSequence: 지금까지 호출된 함수가 무엇인지 알려주는 함수
const printExecutionSequence = () => {
    

    console.log(`계산수행순서 : `);
}


printExecutionSequence();
