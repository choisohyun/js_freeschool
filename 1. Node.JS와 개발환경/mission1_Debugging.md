# Debugging 기술문서 정리하기

##   breakpoints
-   디버깅을 목적으로 실행중인 디버깅 대상 프로세스를 의도적으로 멈추게 하는 장소
-   디버깅: 잘못된 코드를 찾아 실행시 오류가 나지 않도록 수정하는 과정
-   Soft Breakpoint
      -   명령을 실행하는 CPU를 일시 중지하는 데 사용
      -   디버깅할 때 가장 흔하게 사용되는 형태의 브레이크포인트
-   Hardware Breakpoint
      -   설정할 브레이크포인트의 개수가 적을 때나 디버깅 할 소프트웨어의 코드가 변경되면 안될 때 유용하게 사용
      -   디버그 레지스터(8개) 를 이용하여 CPU 레벨에서 브레이크포인트를 설정하는 것
      -   소프트 브레이크포인트와 동일한 방법으로 처리되지만 로우 레벨에서 수행함
-   Memory Breakpoint
      -   실제 브레이크포인트는 아님
      -   메모리 브레이크포인트를 설정하면 메모리의 영역이나 페이지의 접근 권한이 바뀜
      -   Guard page(보호 페이지)를 이용해 브레이크포인트처럼 사용 가능
            -   Guard page에 어떤 종류의 접근이라도 발생하면 예외를 발생시킴. 이후에는 페이지의 원래 상태로 복귀됨
            -   스택에서 힙을 분리해내거나 특정 메모리 영역이 어떤 범위 이상으로 커지는지 확인하는 데 유용함
            -   특정 메모리 영역에 대한 접근이 발생할 때 프로세스를 중지시키고자 할 때 매우 유용함
            -   memory page(OS가 메모리를 처리하는 가장 작은 단위)가 접근 권한을 가짐
-   참고: [[리버싱] 브레이크포인트란](https://to-paz.tistory.com/106), [BreakPoint (브레이크포인트)](https://sharin.tistory.com/5)
##   Watch
-   프로그램의 상태와 변수 검사  
![](https://code.visualstudio.com/assets/docs/editor/debugging/watch.png)
##   call stack
- Breakpoint를 다중으로 설정했을 때, 개별 세션이 실행될 때마다 최상위 요소로 표시되는 것  
![](https://miro.medium.com/max/600/1*E3zTWtEOiDWw7d0n7Vp-mA.gif)
- call stack에서 다른 세선을 선택해 활성화시킬 수 있음  
![](https://code.visualstudio.com/assets/docs/editor/debugging/debug-callstack.png)
- 참고: [Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
    
##   Step over
-   단축키 : F10
-   기능 : 현재 break 된 파일에서 다음 라인 이동, break 걸린 라인을 전부 실행 후, 다음라인으로 이동한다.
##   Step into
-   단축키 : F11
-   기능 : 현재 break 된 라인에서 실행하고 있는 라인으로 이동한다.
##   Step out
-   단축키 : shift+F11
-   기능 : 현재 break 된 라인에서 호출한 곳으로 이동한다.
-   사진 출처: [IntelliJ 디버깅 해보기](https://jojoldu.tistory.com/149)
##   How to Debugging in VSC
-   [https://code.visualstudio.com/docs/editor/debugging](https://code.visualstudio.com/docs/editor/debugging)
