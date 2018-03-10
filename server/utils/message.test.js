const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'admin';
    var text = 'welcome';
    var message = generateMessage(from, text);
    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 30;
    var longitude = 25;
    var url = 'https://www.google.com/maps?q=30,25';
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe('number');
  });
});
