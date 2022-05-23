const calculator = {
    add: function(a, b){
        return a + b
    },
    minus: function(a, b){
        return a - b
    },
    divide: function(a, b){
        return a / b
    },
    multi: function(a, b){
        return a * b
    },
    power: function(a, b){
        return a ** b
    },

}
const plusResult = calculator.add(1, 3)
const minusResult = calculator.minus(plusResult, 3)
const divideResult = calculator.divide(1, minusResult)
const multiResult = calculator.multi(1, divideResult)
const powerResult = calculator.power(multiResult, 3)

console.log(plusResult)
