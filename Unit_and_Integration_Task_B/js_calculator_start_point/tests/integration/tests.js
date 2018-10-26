var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

// 1. Do the number buttons update the display of the running total?
// 2. Do the arithmetical operations update the display with the result of the operation?
// 3. Can multiple operations be chained together?
// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// 5. If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement).

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

});
