const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Lina',
            room: 'React Course'
        },{
            id: '3',
            name: 'John',
            room: 'Node Course'
        }]
    });

   it('should add new user', () => {
       var users = new Users();
       var user = {
           id: '123',
           name: 'Quyen',
           room: 'A'
       }

       var resUser = users.addUser(user.id, user.name, user.room);

       expect(users.users).toEqual([resUser]);
   });

   it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
   });

   it('should not remove a user', () => {
        var userId = '123';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
   });

   it('should find user', () => {
        var userId = '1';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
        expect(user.name).toBe('Mike')
        expect(user.room).toBe('Node Course');
   });

   it('should not find user', () => {
        var userId = '123';
        var user = users.getUser(userId);

        expect(user).toNotExist();
   });

   it('should return name for Node course', () => {
        var room = 'Node Course';
        var userList = users.getUserList(room);

        expect(userList).toEqual(['Mike', 'John']);
   });

    it('should return name for React course', () => {
        var room = 'React Course';
        var userList = users.getUserList(room);

        expect(userList).toEqual(['Lina']);
    });
});