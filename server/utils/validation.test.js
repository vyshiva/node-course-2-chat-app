const expect = require('expect');

var {isRealString} = require('./validation');

describe ('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 5;
    var isRealS = isRealString(str);
    expect(isRealS).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '   ';
    var isRealS = isRealString(str);
    expect(isRealS).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var str = '_';
    var isRealS = isRealString(str);
    expect(isRealS).toBe(true);
  });
});
