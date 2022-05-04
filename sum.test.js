const myChecks = require('./sum.js');

describe('length test', () => {
    test('camiluxThecommunity length', () => {
        expect(myChecks.stringLength('camiluxThecommunity')).toBe(-1);
      });
    test('camilux length', () => {
      expect(myChecks.stringLength('camilux')).toBe(7);
    });  
    test('empty string test', () => {
        expect(myChecks.stringLength('')).toBe(-1);
      });
});

describe('reverser string test', ()=> {
    test('camilux reversed', () => {
        expect(myChecks.reverseString('camilux')).toBe('xulimac');
    });
    test('zetron reversed', () => {
        expect(myChecks.reverseString('zetron')).toBe('nortez');
    }); 
});

describe('calculation tests', ()=> {
    test('sum 45 + 15', () => {
        expect(myChecks.sum(45, 15)).toBe(60);
    });
    test('substract 45 - 15', () => {
        expect(myChecks.substract(45, 15)).toBe(30);
    });
    test('multiply 12 * 6', () => {
        expect(myChecks.multiply(12, 6)).toBe(72);
    });
    test('divide 30 / 15', () => {
        expect(myChecks.divide(30, 15)).toBe(2);
    });
});

describe('Test upper case', ()=> {
    test('make upper case', () => {
        expect(myChecks.capitalise('camilux')).toBe('CAMILUX');
    });
});
 