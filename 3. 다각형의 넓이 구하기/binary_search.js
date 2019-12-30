/**
 * 추가미션 : binary search 알고리즘을 공부하고, 재귀함수로 구현하기
 * 문제: 정렬된 배열에서(중복된 값은 없다 가정) 타겟이 들어가야할 자리의 인덱스를 리턴해야하는 문제
 * 
 * 출처: https://takeuu.tistory.com/171 [워너비스페셜]
 */


//  일반
const binarySearch = (target, dataArray) => {
    let low = 0;
    let high = dataArray.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = dataArray[mid];

        if (guess === target) {
            return guess;
        } 
        else if (guess > target) {
            high = mid - 1;
        } 
        else {
            low = mid + 1;
        }
    }
    return low;
}


// 재귀
const binaryRescursive = (target, dataArray, low, high) => {
	if (low === undefined) low = 0;
	if (high === undefined) high = dataArray.length - 1;

    var mid = Math.floor((high + low) / 2);
    var guess = dataArray[mid];

    if (low <= high) {

        if (guess === target) {
            return guess;
        }
        else if (guess > target) {
            return binaryRescursive(target, dataArray, low, mid - 1);
        } 
        else {
            return binaryRescursive(target, dataArray, mid + 1, high);
        }
        
    }
    return low;
}

console.log(binarySearch(4, [1, 3, 5, 6]));         // 2
console.log(binaryRescursive(4, [1, 3, 5, 6]));     // 2

