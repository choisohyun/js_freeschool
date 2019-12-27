/**
 * Call by value, Call by reference 예제
 */

//  ============================================
//  Call by value
function call_by_value() {
    var a = 0;
    console.log(a); // 0
    change_value(a);
    console.log(a); // 0
}

function change_value(value) {
    value = 10;
}

call_by_value();


//  ============================================
// Call by reference
function call_by_ref() {
    var myCar = {
        make: "Honda",
        model: "Accord",
        year: 1990
    }, x;

    x = myCar.make;
    console.log(x);    // Honda

    change_obj(myCar); 
    x = myCar.make;
    console.log(x);    //Toyota
}

function change_obj(object) {
    object.make = "Toyota";
}

call_by_ref();