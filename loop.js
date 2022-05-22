// 반복문 : 특정 코드를 반복해서 실행할 수 있다. 조건을 설정해서 우리가 원하는 만큼만 반복할 수 있도록 한다. 
// while (조건) {조건 만족할 때 실행할 코드}

let temperature = 20
while (temperature < 25) {
    console.log(`${temperature}도 정도면 적당한 온도입니다.`)
    temperature ++ //증감연산자를 활용해 온도 변화를 줌
}
// 반복문 주의 사항 : 조건에 포함된 변수의 값을 계속 변화시켜줘서 언젠가는 반복문이 끝날 수 있도록 해줘야 함.
// 무한루프에 빠져서 프로그램 실행이 끝나지 않는다면 ctrl+c 를 눌러서 중단시켜야 함.



// for문 : while 반복문 보다 명시적으로 반복문을 표현할 수 있다. 
// for (begin; condition; step) {조건을 만족할 때 실행할 코드}

for (let temp = 20; temp < 25; temp ++) {
    console.log(`${temp}도 정도면 적당한 온도입니다.`)
}

// ** for문 실행 순서 **
// begin : 변수를 선언하고 값을 할당한다.
// condition : 조건이 맞는지 연산한다. true : 계속 실행 / false : for문 종료
// {} 중괄호 안의 코드 실행한다.
// step : 증감연산자를 통해 값을 재할당하고 condition 과정부터 다시 반복한다. 



// 반복문 조건문 활용 연습
for (let number = 1; number <= 10; number ++) {
    if(number % 3 === 0) {
        console.log(`${number}는 3으로 나눠서 떨어지는 숫자입니다.`)
    }
}



// quiz 
for (let num = 1; num <= 20; num ++) {
    if (num % 2 === 0) {
        console.log(`${num}은 짝수입니다.`)
    } else {
        console.log(`${num}은 홀수입니다.`)
    }
}