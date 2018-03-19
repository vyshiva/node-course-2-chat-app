const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach( () => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Leh',
      room: 'flowers'
    }, {
      id: '2',
      name: 'Zoi',
      room: 'animals'
    }, {
      id: '3',
      name: 'Poiu',
      room: 'flowers'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Sid',
      room: 'home'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(users.users).not.toMatchObject({id: '1'});
    expect(users.users.length).toBe(2);
    expect(user.id).toBe(userId);
  });

  it('should not remove user', () => {
    var userId = '4';
    var user = users.removeUser(userId);
    expect(users.users.length).toBe(3);
    expect(user).toBeFalsy();
  });

  it('should find user', () => {
    var userId = '2'
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '4'
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for room flowers', () => {
    var userList = users.getUserList('flowers');

    expect(userList).toEqual(['Leh', 'Poiu']);
  });

  it('should return names for room animals', () => {
    var userList = users.getUserList('animals');

    expect(userList).toEqual(['Zoi']);
  });



});
