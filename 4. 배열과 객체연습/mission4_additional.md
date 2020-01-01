# 추가미션

## JavaScript set & map 정리 


### Map

- JavaScript의 `key, value pair`로 이루어진 컬렉션
- `key`를 이용해 `value`를 `get, set` 가능
##### `key`  
- 중복 불가, 
- `string, symbol(ES6), object, function` 사용 가능, 
- `number` 사용 불가

### Set
- 중복을 허용하지 않는 데이터 집합
- `value`들로 이루어짐
- 이미 존재하는 값을 추가하려고 하면 추가되지 않음

### 어떻게 사용하는것인가?
#### Map
```
let map = new Map();

// set() 사용하기
map.set('name', 'sohyun');
map.set('age', 28);

// set() 체이닝
myMap.set('bar', 'foo')
     .set(1, 'foobar')
     .set(2, 'baz');

console.log(map);
// Output: Map { 'name' => 'sohyun', 'age' => 28 }

console.log(map.get('name'));
// Output: 'sohyun'
```

#### Set
```
const roles = new Set();

// 추가
roles.add("Admin"); 
roles.add("User");   // Output: Set [ "User", "Admin" ]

roles.size; // Output: 2

roles.delete("User");
roles;   // Output: Set [ "User" ]
roles.delete("User");   // false
```

### object/array와는 어떤 점이 다르지?
#### 비슷한 점
- `Map - Object`: `key, value`를 연결한다는 점에서 비슷하다.
- `Set - Array`: `Set`이 중복을 허용하지 않는 다는 점만 제외하면 비슷하다.
#### 다른 점
- `Object의 단점`
    - 프로토타입 체인 때문에 의도하지 않은 연결 발생
    - 객체 안에 연결된 `key, value`의 개수를 쉽게 알 수 없음
    - `key`: 반드시 문자열, 심볼이기 때문에 객체를 키로 쓸 수 없었음
    - `Property` 순서를 보장하지 않음

### 언제 유용하게 쓰일 수 있을까?
- `key, value`를 연결하려고 할 때



## 참조
- [책-Learning JavaScript](http://www.yes24.com/Product/Goods/42806896)
- [[JS #5] ES6 Map(), Set()](https://medium.com/@hongkevin/js-5-es6-map-set-2a9ebf40f96b)
- [MDN web docs - Map.prototype.set()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/set)