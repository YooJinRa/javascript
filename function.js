// 함수 : 특정 작업을 수행하는 코드의 집합
// 함수의 선언 : 변수를 선언하고 해당 변수에 값을 할당했던 것처럼, 함수도 선언을 하고 해당 함수가 실행할 코드의 집합을 만들어서 저장한다.
// function 함수명(매개변수들) {
// 함수에서 실행할 코드
// return 반환값
// }
// 매개변수 parameter : 해당 함수의 바디에 있는 코드에서 사용할 수 있는 일종의 변수이며, 함수 호출 시 전달하게 된다. 중괄호 안에는 이 함수가 해야할 일들을 코드로 쭉 작성하고, 반환해야 할 값을 명시해준다.

// ** 함수의 정의 **
function calculateAvg(price1, price2) { //순서 4
    const sum = price1 + price2 //순서 5
    console.log(`두 상품의 가격 총 합은 ${sum}입니다.`) //순서 6
    const avg = sum / 2 //순서 7
    return avg //순서 8
}

// 함수의 호출 : 함수를 사용하기 위해 호출하는 것
// const 변수명 = 선언한 함수명(매개변수들)

// ** 함수의 호출 **
const priceA = 1000 //순서 1
const priceB = 2000 //순서 2
const avg1 = calculateAvg(priceA, priceB) //순서 3
console.log(`두 상품(A, B)의 평균은 ${avg1}입니다.`) //순서 9

const priceC = 3000
const priceD = 4000
const avg2 = calculateAvg(priceC, priceD)
console.log(`두 상품(C, D)의 평균은 ${avg2}입니다.`)


// quiz
function average (a, b, c) {
    const totalPrice = a + b + c
    const totalAverage = totalPrice / 3

    return totalAverage
}

const price_a = 50000
const price_b = 70000
const price_c = 66000

const priceList = average(price_a, price_b, price_c)
console.log(`세 개 물건 가격의 평균은 ${priceList}원 입니다.`)

