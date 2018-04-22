const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer.js')

describe('fizzBuzzer', function() {
    it('should print the correct output', function(){
        const normalCases = [
            { num: 5, expected: 'buzz'},
            { num: 3, expected: 'fizz' },
            { num: 15, expected: 'fizz-buzz' },
            { num: 22, expected: 22}
        ]
       normalCases.forEach(function(input){
          const answer = fizzBuzzer(input.num);
          expect(answer).to.equal(input.expected);
       });
    });
    it('should raise error if args not numbers', function () {
        const badInputs = ['y', false];
        badInputs.forEach(function(input) {
            expect(function () {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    }); 
});