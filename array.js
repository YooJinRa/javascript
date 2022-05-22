// 배열 Array : 같은 형식의 많은 데이터를 순서대로 저장하고자 할 때 사용하는 것 / 같은 타입의 데이터들을 하나의 변수에 할당하여 관리하기 위해 사용하는 데이터 타입

// 배열 만드는 방법 1.
const arr1 = new Array(1, 2, 3, 4, 5) // array 라는 class사용하여  객체를 만들어 준 방법

// 배열 만드는 방법 2.
const arr2 = [1, 2, 3, 4, 5] // 배열을 바로 만드는 방법(더 많이 활용)
console.log(arr2) // 배열 출력 [1, 2, 3, 4, 5]

// 요소 element : 배열에 있는 각각의 데이터(객체에서 속성명과 같은 역할)
// 인덱스 index : 배열 안의 데이터들이 자리잡은 순서, index는 0부터 시작

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(rainbowColors[0])
console.log(rainbowColors[1])
console.log(rainbowColors[2])
console.log(rainbowColors[3])
console.log(rainbowColors[4])
console.log(rainbowColors[5])
console.log(rainbowColors[6])

// length : 배열의 길이 즉 배열에 저장되어 있는 요소의 개수를 확인하는 속성
console.log(rainbowColors.length)
// 마지막 요소의 접근 하기 : length-1
console.log(rainbowColors[rainbowColors.length-1]) 

// 배열의 요소 추가와 삭제 : push, pop이라는 메소드 활용
rainbowColors.push('ultraviolet') //배열 마지막에 요소 추가 : push()
console.log(rainbowColors)

rainbowColors.pop() // 배열 마지막 요소 삭제 : pop()
console.log(rainbowColors)


// 배열과 반복문
// for (let i = 0; i < rainbowColors.length; i++) {
//     console.log(rainbowColors[i])
// }

for (const color of rainbowColors) { // 배열과 함께 자주 사용되는 간단한 for문
    console.log(color)
}
// 배열에서 요소들을 차례대로 하나씩 찾아 color라는 변수에 할당함. 자동으로 배열의 끝까지 반복문이 실행되기 때문에 첫 번째 for문보다 쓰기 편리.

// quiz
const productPrice = [1000, 2000, 3500, 4000, 5000, 5600, 7000, 9000, 9800, 7900]
let sum = 0

for(i = 0; i < productPrice.length; i++) {
    sum += productPrice[i]
}

const average = sum / productPrice.length
console.log(`합계 : ${sum}, 평균 : ${average}`)