interface User {
    id: string,
    email: string
}

const userMap = new Map<string, User>();

userMap.set('aryan', { id: '381', email: 'aryanc381.work@gmail.com'});
userMap.set('mana', { id: '382', email: 'manac381.work@gmail.com'});

console.log(userMap);

const user = userMap.get('aryan');
console.log(user);