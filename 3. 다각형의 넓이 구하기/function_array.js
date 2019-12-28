// delete와 filter
const a = [1,2,3,4,5];

delete a[1];
console.log(a);     //[ 1, <1 empty item>, 3, 4, 5 ]

console.log(a.filter(x => x !== undefined));    //[ 1, 3, 4, 5 ]


