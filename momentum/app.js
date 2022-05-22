//Variable

const a = 5 // 값이 바뀌지 않는다 // number
const b = 2 

let myName = "yoojin"; // 값이 바뀔 수 있다 // string

console.log(a+b)
console.log(a/b)
console.log(a*b)

console.log("hello " + myName)
// const : constant(상수) === 값이 바뀔 수 없다.
// let : 처음 한 번만 선언 / 값이 변경될때는 선언 안하고 변수명과 값만

myName = "yoojinra";

console.log("my name is " + myName)

// boolean : true or false
const amIFat = true;
const amNotIFat = false;

console.log(amIFat + amNotIFat) // 1

//null : 자연적으로 발생하지 않는 값. variable 안에 어떤 것이 없다는 것을 확실히 하기 위해서 사용.
const amIHappy = null;
console.log(amIHappy) // null
//undefined
let something
console.log(something) //undefined

const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const nonsence = [1, 2, "hello", true, null, undefined]
console.log(dayOfWeek, nonsence)
