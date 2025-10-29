// pick allows you to create new types by selecting a set of properties from an existing type.
interface User {
    id: number;
    name: string;
    age: number;
    createdAt: string;
}

type UserBasic = Pick<User, 'name' | 'age'>

function sumOfAge(user1: UserBasic, user2: UserBasic) {
    return user1.age + user2.age;
}

const age = sumOfAge({ name: 'Varo', age: 20}, { name: 'Aryan', age: 18 });
console.log(age);