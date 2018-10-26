var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

// `calculator.add()` - add 1 to 4 and get 5
// `calculator.subtract()` subtract 4 from 7 and get 3
// `calculator.multiply()` - multiply 3 by 5 and get 15
// `calculator.divide()` - divide 21 by 7 and get 3

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add two numbers together', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should subtract one number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should multiple two numbers together', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should divide one number by another', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

});
