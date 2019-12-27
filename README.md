# :school: 코드스쿼드 마스터즈 과정 웹FE 프리스쿨
> 코드스쿼드의 웹 Front-end 마스터즈 과정에 합류하기 전에 가이드에 따라 **자바스크립트 프로그래밍**을 공부합니다.  
> 총 5개의 미션을 업로드합니다. README에 미션을 수행하면서 알게 된 내용도 함께 정리해 업로드합니다.  
> 기간: 2019.12.18 ~ 2019.12.31

## :pushpin: 미션 바로가기
1-1. debugging 기술문서 정리  
2-1. 조건에 맞게 자바스크립트 함수 만들기  
2-2. default parameter 와 rest parameter  
2-3. call by value, call by reference의 차이  
3-1. getArea 함수 만들기  
3-2. printExecutionSequence 함수 만들기  
3-3. var, const,let 의 hoisting  
3-4. printExecutionSequence 함수 수정하기  
3-5. binary search 알고리즘 공부, 구현  
4-1. 배열 만들기  
4-2. 배열 결과 출력  
4-3. myReduce 메서드 만들기  
4-4. JavaScript set & map 정리  
4-5. higher order functions의 메서드 체이닝  
5-1. 할일관리 프로그램 만들기  


## :memo: 목차
```
1. Node.JS와 개발환경
2. 자바스크립트 함수
3. 다각형의 넓이구하기
4. 배열과 객체연습
5. 할일관리프로그램
```

## :one: Node.JS와 개발환경
-   Compiled와 Intepretered 의 차이점
    -   Compiler:
        -   전체 소스코드를 보고 명령어를 수집, 재구성함.
        -   바로 기계어로 변환함.
        -   실행시간: 비교적 빠름
        -   에러 보고 시점: 전체 소스코드 변환 이후
        -   장점: 프로그램이 작성된 기계 상에서 실행할 때 매우 효율적
        -   언어: C, C++, Java
    -   Interpreter:
        -   소스코드의 각 행을 연속적으로 분석, 실행함.
        -   고레벨 언어 -> 중간 코드로 변환해 각 행마다 실행
        -   실행시간: 비교적 느림
        -   에러 보고 시점: 에러 행 실행 즉시. 보안 관점에 도움이 됨
        -   장점: 플랫폼에 종속되지 않음. 컴퓨터와 프로그램 사이 별도의 버퍼 역할
        -   언어: Python, Java, JavaScript
    -   참고: [컴파일러와 인터프리터의 차이](https://m.blog.naver.com/ehcibear314/221228200531)
-   JavaScript API Docs
    -   [MDN]([https://developer.mozilla.org/ko/](https://developer.mozilla.org/ko/))
-   NodeJS
    -   구글 크롬의 자바스크립트 엔진 (JS 코드를 이해하고 실행하는 프로그램 또는 인터프리터) 에 기반해 만들어진 서버 사이드 플랫폼
    -   JavaScript 런타임 중 하나
    -   참고: [\[Node.JS\] 강좌 01편: 소개](https://velopert.com/133), [JavaScript 엔진 톺아보기 (1)](https://velog.io/@godori/JavaScript-engine-1)
    -   추가: [생활코딩 - Node.js 강의](https://www.opentutorials.org/course/3332)
-   ECMAScript
    -   Ecma 인터내셔널에 의해 제정된 ECMA-262 기술 규격에 의해 정의된 범용 스크립트 언어
    -   JavaScript는 ECMAScript 사양을 준수함
    -   ES6: ECMA-262 표준의 제 6판, 클래스와 모듈 같은 복잡한 응용 프로그램을 작성하기 위한 새로운 문법 추가
    -   참고: [JavaScript와 ECMAScript는 무슨 차이점이 있을까?](https://wormwlrm.github.io/2018/10/03/What-is-the-difference-between-javascript-and-ecmascript.html), [wikipedia - ECMA스크립트](https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
-   CLI(Command Line Interface, 명령어 인터페이스) 
    -   텍스트 터미널을 통해 컴퓨터가 상호 작용하는 방식
    -   **입력**과 **출력**으로 구성. 명령 프롬프트에 명령어를 입력하면 셸 프로그램이 명령어를 해석해 결과를 출력
    -   참고: [[CLI] CLI 기본 개념 및 사용법](https://medium.com/@psychet_learn/cli-cli-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EB%B2%95-c8d000ebc162)
-   IDE(Integrated Development Environment, 통합 개발 환경)
    -   공통된 개발자 툴을 하나의 GUI로 결합하는 애플리케이션을 구축하기 위한 소프트웨어
    -   일반적으로 소스코드 편집기, 로컬 빌드 자동화, 디버거로 구성
    -   참고: [IDE란? - Red Hat](https://www.redhat.com/ko/topics/middleware/what-is-ide)
-   언어별 IDE: [Top IDE index](https://pypl.github.io/IDE.html)
-   Popular JavaScript IDE: Visual Studio Code
    - 참고: [What are the best JavaScript IDEs or editors?](https://www.slant.co/topics/1686/~best-javascript-ides-or-editors)
-   온라인 에디터
    -   [codeopen.io](http://codeopen.io/)
    -   [CodeSandbox](https://codesandbox.io/)
-   How to VSCODE-NODEJS debugging
    -   [https://code.visualstudio.com/docs/editor/debugging](https://code.visualstudio.com/docs/editor/debugging)
-   Modular programming
    -   Module
        - 하나의 프로세스를 수행하는 단위 프로그램. 
        - 코드의 재활용성을 높이고 유지보수를 쉽게 하기 위해 사용한다. 
        - 사이즈가 작아야 수정이 용이하다. 
        - 호스트 환경(자바스크립트가 구동되는 환경)에 따라서 서로 다른 모듈화 방법을 제공한다. 
        - 자신만의 독립적인 실행 영역이 있어야 한다.
    -   require 메소드
        - NodeJS에서 모듈을 로딩(호출)할 때 사용되고 있는 CommonJS 키워드
        - require() 메서드로 경로를 찾아 사용할 수 있게 한다.
        - module.experts를 리턴한다.
    -   experts
        - A.js 함수의 특정 값을 B.js로 넘겨주고 싶을 때 사용한다.
    -   참고
        - [https://nodejs.org/api/modules.html](https://nodejs.org/api/modules.html)
        - [자바스크립트 모듈 - module](https://webclub.tistory.com/343)
        - [생활코딩 - JavaScript 모듈](https://www.opentutorials.org/module/532/4750)
        - [JavaScript 표준을 위한 움직임: CommonJS와 AMD](https://d2.naver.com/helloworld/12864)
        - [require( ) 메서드와 module.exports 모듈](https://codingisgame.tistory.com/15)
        - [require(), exports, module.exports 공식문서로 이해하기](https://medium.com/@chullino/require-exports-module-exports-%EA%B3%B5%EC%8B%9D%EB%AC%B8%EC%84%9C%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-1d024ec5aca3)
    
## :two: 자바스크립트 함수
## :three: 다각형의 넓이구하기
## :four: 배열과 객체연습
## :five: 할일관리프로그램
