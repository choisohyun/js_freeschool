/**
 * 코드스쿼드 마스터즈 웹FE 프리스쿨
 * 자바스크립트 프로그래밍
 * 미션: 조건에 맞는 자바스크립트 함수 구현하기
 * Author: choisohyun
 */


// ========================================================
// 일반 함수

// 숫자가 아니거나 인자의갯수가 부족하면 에러를 반환
 function isNumber(a, ...b) {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error("Enter only numbers.");
        }
    }
}

//  반지름을 입력받아 원의 넓이를 계산하는 함수
 function circle(radius) {
     isNumber(radius);
     return Math.PI * Math.pow(radius, 2);
 }

//  필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수
 function square(width, height) {
     isNumber(width, height);
     return width * height;
 }

//  필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수
 function trapezoid(top, bottom, height) {
    isNumber(top, bottom, height);
    return (top + bottom) * height / 2;
 }

//  필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수
 function cylinder(radius, height) {
     isNumber(radius, height);
     return 2 * ( circle(radius) + Math.PI * radius * height );
 } 


// 정상 출력
 console.log(circle(3));        // 28.274333882308138
 console.log(square(3,4));      // 12
 console.log(trapezoid(3,6,9)); // 40.5
 console.log(cylinder(3,6));    // 169.64600329384882

/** 에러 반환 상황
 * 
 * 1. 숫자가 아닐 때
 * console.log(circle('3'));
 * console.log(square(3, '4'));
 * 
 * 2. 인자의 개수가 부족할 때
 * console.log(circle());
 * console.log(trapezoid(3,6));
 */


// ========================================================
// 익명 함수
 const isNumber_anon = function(a, ...b) {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error("Enter only numbers.");
        }
    }
 }

 const circle_anon = function(radius) {
    isNumber_anon(radius);
    return Math.PI * Math.pow(radius, 2);
 }

 const square_anon = function(width, height) {
    isNumber_anon(width, height);
    return width * height;
 }

 const trapezoid_anon = function(top, bottom, height) {
    isNumber_anon(top, bottom, height);
    return (top + bottom) * height / 2;
}

 const cylinder_anon = function(radius, height) {
    isNumber_anon(radius, height);
    return 2 * ( circle_anon(radius) + Math.PI * radius * height );
}

console.log(circle_anon(3));        // 28.274333882308138
console.log(square_anon(3,4));      // 12
console.log(trapezoid_anon(3,6,9)); // 40.5
console.log(cylinder_anon(3,6));    // 169.64600329384882

// ========================================================
// 화살표 함수
 const circle_arrow = radius => Math.PI * Math.pow(radius, 2);
 const square_arrow = (width, height) => width * height;
 const trapezoid_arrow = (top, bottom, height) => (top + bottom) * height / 2;
 const cylinder_arrow = (radius, height) => 2 * ( circle(radius) + Math.PI * radius * height );

 console.log(circle_arrow(3));        // 28.274333882308138
 console.log(square_arrow(3,4));      // 12
 console.log(trapezoid_arrow(3,6,9)); // 40.5
 console.log(cylinder_arrow(3,6));    // 169.64600329384882