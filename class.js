
// 객체 object : 물리적으로 존재하거나 추상적으로 생각할 수 있는 것중에서 자신의 속성을 갖고 있고 다른 것과 식별 가능한 것
// const 변수명 = new 클래스명(생성자에게 정의한 매개변수들)
// 클래스 class : 객체를 만들때 마치 설계도처럼 사용하는 것

class Notebook {
    constructor(name, price, company) {
        this.name = name
        this.price = price
        this.company = company
    }
}

const notebook1 = new Notebook('MacBook', 3000000, 'Apple')

console.log(notebook1)
console.log(notebook1.name)
console.log(notebook1.price)
console.log(notebook1.company)


// 메소드 method : 클래스에는 데이터(값)를 나타내는 속성 뿐만 아니라 함수와 같이 특정 코드를 실행할 수 있는 메소드도 정의 할 수 있다. 객체를 생성한 후, 만들어진 객체의 메소드를 호출하면 된다.

// ** 클래스 선언
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    // ** 메소드 선언
    printInfo() {
        console.log(`상품명 : ${this.name}, 가격 : ${this.price}원`)
    }
}

// ** 객체 생성 및 메소드 호출
const notebook = new Product('Apple MacBook', 3500000)
notebook.printInfo()



// 객체 리터럴 Object Literal : 클래스와 같은 템플릿 없이 빠르게 객체를 만들 수 있는 방법
// const 변수명 = {
//     속성명 : 데이터,
//     속성명 : 데이터,
//     메소드명 : function() {메소드 호출 시 실행할 코드들}
// }
const computer = {
    name: 'Apple MacBook',
    price: 2500000,
    printProduct: function () {
        console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
    }
}
computer.printProduct()



// quiz
class Clothes {
    constructor(color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }
    // ** 메소드 선언
    clothesInfo() {
        console.log(`상품색 : ${this.color}, 사이즈 : ${this.size}, 가격 : ${this.price}원`)
    }
}

// ** 객체 생성 및 메소드 호출
const clothes_info = new Clothes('Red', 95, 35000)
clothes_info.clothesInfo()