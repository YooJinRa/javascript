// if문 = if(조건 : boolean data) {조건이 참이면 실행되는 함수}
const shoesPrice = 40000
if (shoesPrice < 50000){ // true
    console.log('이 신발을 사겠습니다.') //출력
}

const capPrice = 50000
if (capPrice < 50000){ // false
    console.log('이 모자를 사겠습니다.') //출력되지 않음
}

// else, else if : if 구문의 조건을 만족하지 않았을 때 실행하고 싶은 코드
const pantsPrice = 50000
if (pantsPrice < 40000) { // false
	console.log('바지를 사겠습니다.') //출력되지 않음
} else {
	console.log('너무 비싸요. 바지를 사지 않겠습니다.') //출력
}

// else if : 많은 조건을 판단하고 코드 실행할 수 있음
const jumperPrice = 50000
if (jumperPrice < 40000) { //false
	console.log('점퍼를 사겠습니다.')
} else if (jumperPrice <= 50000) { //true
	console.log('점퍼, 비싸지만 고민해볼게요.')
} else { //false
	console.log('너무 비싸요. 점퍼를 사지 않겠습니다.')
}

//quiz
const distance = 2
if (distance < 2) { //false
	console.log('걸어가자')
} else if (distance >=2 && distance < 5) { //true, 논리연산자 '&&' 활용 가능
	console.log('택시를 타자') 
} else { //false
	console.log('기차를 타자')
}