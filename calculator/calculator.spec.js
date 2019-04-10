const { add } = require('./calculator.js');

//test suite
describe('the calculator module', () => {
    //test suite
    describe('the add function', () => {
       
        //test
        it('should add two numbers together', () => {
        //assertion
        expect(add(2,2)).toBe(4);
        // expect(2+2).toBe(4); // autopass way
        });
    });
});
// test away!
