const checks = require('./sum.js');

describe('length test', () => {
    test('camiluxThecommunity length', () => {
        expect(checks.stringLength('camiluxThecommunity')).toBe(-1);
      });
    test('camilux length', () => {
      expect(checks.stringLength('camilux')).toBe(7);
    });  
    test('empty string test', () => {
        expect(checks.stringLength('')).toBe(-1);
      });
});

describe('reverser string test', ()=> {
    test('camilux reversed', () => {
        expect(checks.reverseString('camilux')).toBe('xulimac');
    });
    test('zetron reversed', () => {
        expect(checks.reverseString('zetron')).toBe('nortez');
    }); 
});

describe('calculation tests', ()=> {
    test('sum 45 + 15', () => {
        expect(checks.sum(45, 15)).toBe(60);
    });
    test('substract 45 - 15', () => {
        expect(checks.substract(45, 15)).toBe(30);
    });
    test('multiply 12 * 6', () => {
        expect(checks.multiply(12, 6)).toBe(72);
    });
    test('divide 30 / 15', () => {
        expect(checks.divide(30, 15)).toBe(2);
    });
});

describe('Test upper case', ()=> {
    test('make upper case', () => {
        expect(checks.capitalise('camilux')).toBe('CAMILUX');
    });
});
 