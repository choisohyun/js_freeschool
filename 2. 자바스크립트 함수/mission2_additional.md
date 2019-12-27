# 추가미션
> ES2015에 추가된 기능중, default parameter 와 rest parameter는 무엇인가? 알아본다.
> call by value, call by reference의 차이를 이해한다.

## ES2015 추가기능
- Default parameter(기본 매개변수)
    -   값이 없거나 undefined가 전달될 경우 매개변수를 기본값으로 초기화시키는 매개변수

- Rest parameter(나머지 매개변수)
    - 정해지지 않은 수(an indefinite number, 부정수) 인수를 배열로 나타낼 수 있음
    - 표현 : function myFun(a, b, ...manyMoreArgs)
    - Rest 파라미터 및 arguments 객체간 차이
    
Rest Parameter | arguments
-------------- | ---------------
구분된 이름이 주어지지 않은 유일한 대상 | 함수로 전달된 모든 인수
`Array` 인스턴스(메소드 적용 가능) | 실제 배열이 아님
-   참고 : [MDN web docs - javascript 함수]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)        

## call by value(값에 의한 호출)
- 기본 자료형(`string, number, boolean, null, undefined`)을 파라미터로 넘겼을 때
- 함수에서 값을 복사해서 전달하는 방식
- 매개변수를 변경해도 원래의 변수에는 영향을 미치지 않음
- 원본 값을 바꿀 필요가 없는 경우에 사용
## call by reference(참조에 의한 호출)
- Object(`배열, 사용자정의 Object`)를 파라미터로 넘겼을 때
- 함수에서 값을 전달하는 대신 주소값을 전달하는 방식
- 함수 안에서 Object의 속성값을 변경할 수 있고, 함수가 종료되어도 값에 영향을 미침
- 새로운 Object를 생성하고 값을 할당하는 것은 불가능
## 간단 정리
> 기본 자료형들은 불변
> 객체(Object)는 가변

### 예제
- [바로가기](https://github.com/choisohyun/js_freeschool/blob/master/2.%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%95%A8%EC%88%98/function_call_by.js)

- 참고: [Call by value & Call by reference](https://edu.goorm.io/learn/lecture/201/%EB%B0%94%EB%A1%9C-%EC%8B%A4%ED%96%89%ED%95%B4%EB%B3%B4%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-c%EC%96%B8%EC%96%B4/lesson/412515/call-by-value-and-call-by-reference), [자바스크립트 function](https://emflant.tistory.com/64)