const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should play FizzBuzz numbers', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 27, expected: 'fizz'},
      {num: 300, expected: 'fizz-buzz'},
      {num: 50, expected: 'buzz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if arg not number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0], input[1])
      }).should.throw(Error);
    });
  });
});
