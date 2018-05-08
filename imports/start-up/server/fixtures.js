import { Meteor } from 'meteor/meteor';
import { ToDos } from '../../api/todo';
Meteor.startup(() => {
    if (Meteor.users.find().count() === 0) {
        user = Accounts.createUser({
            email: 'cat@cats.com',
            password: 'password'
        });

        if (ToDos.find().count() === 0) {
            ToDos.insert({
                todo: 'Learn React',
                complete: false,
                owner: user
            });
        }
    }
});
