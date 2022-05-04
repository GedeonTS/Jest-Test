const checks = require('./sum.js');

describe('length test', () => {
    test('karmashadesinlight length', () => {
        expect(checks.stringLength('karmashadesinlight')).toBe(-1);
      });
    test('karma length', () => {
      expect(checks.stringLength('karma')).toBe(5);
    });  
    test('empty string test', () => {
        expect(checks.stringLength('')).toBe(-1);
      });
});

describe('string reverser test', ()=> {
    test('him reversed', () => {
        expect(checks.reverseString('him')).toBe('mih');
    });
    test('merde reversed', () => {
        expect(checks.reverseString('merde')).toBe('edrem');
    }); 
});

describe('calculation tests', ()=> {
    test('sum 45 + 15', () => {
        expect(checks.sum(45, 15)).toBe(60);
    });
    test('substract 20 - 15', () => {
        expect(checks.substract(20, 15)).toBe(5);
    });
    test('multiply 34 * 2', () => {
        expect(checks.multiply(34, 2)).toBe(68);
    });
    test('divide 12 / 3', () => {
        expect(checks.divide(12, 3)).toBe(4);
    });
});

describe('Test upper case', ()=> {
    test('make upper case', () => {
        expect(checks.capitalise('karis')).toBe('KARIS');
    });
});
 