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

// objects
const player = {
    name: 'yoojin',
    points: 10,
    fat: true,
}

console.log(player)
console.log(player.name)
console.log(player['name'])
player.fat = false // 속성값 바꾸기
player.lastName = 'ra' // 속성명과 속성값 추가하기
console.log(player)
player.points = player.points + 15 // 속성값 더하기
console.log(player.points)

//function
function sayHello() {
    const sayName = ['Amy', 'Brian', 'Candy', 'Diana', 'Emily']
    for(i = 0; i < sayName.length; i++) {
        console.log(`Hello! My name is ${sayName[i]}`)
    }
}
sayHello()

function sayGoodbye(nameOfPerson, age){
    console.log("Good Bye," +nameOfPerson+". Your age is " + age)
}
sayGoodbye('Amy', 29)
sayGoodbye('dd', 30)


const talent = {
    name: "joohyuk",
    saySomething: function(otherPersonsName){
        console.log(otherPersonsName + " Happy day!")
    }
}
console.log(talent.name)
talent.saySomething("iyoo")