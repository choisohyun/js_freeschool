// =========================================
// 정적 스코프
const f1 = () => console.log('one');
const f2 = () => console.log('two');

f2();
f1();
f2();

// f2 -> f1 -> f2 순으로 함수 실행


// =========================================
// 블록 스코프
// 변수 숨기기 1 - 스코프 하나 끝난 후 다른 스코프가 있음
{
    // block 1
    const x = 'blue';
    console.log(x);         // "blue"
}
console.log(typeof x);     // "undefined"
{
    // block 1
    const x = 'blue';
    console.log(x);         // "3"
}
console.log(typeof x);     // "undefined"


// 변수 숨기기 2 - 스코프가 중첩되는 경우
// 외부 스코프의 변수를 숨겨주는 효과
{
    // 외부 블록
    let a = 'blue';
    console.log(a);     //blue
    {
        // 내부 블록
        let a = 3;
        console.log(a); // 3
    }
    console.log(a);     // blue
}
console.log(typeof a);  // undefined


// 변수 숨기기 3 - 계층적인 스코프
{
    // 외부 블록
    let q = { color: "blue" };
    let w = q;
    let e = 3;

    {
        // 내부 블록
        let q = 5;
        console.log(q);     // 5
        console.log(q.color);   // undefined
        console.log(w.color);   // blue

        w.color = "red";
        console.log(e);     // 3
    }
    console.log(q.color);   // red
    console.log(w.color);   // red
    console.log(e);         // 3
}


// =========================================
// 전역 스코프
let user = {
    name: "Irena",
    age: 25,
};

function greet(user) {
    console.log(`hello, ${user.name}`);
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}

greet(user);
console.log(getBirthYear(user));