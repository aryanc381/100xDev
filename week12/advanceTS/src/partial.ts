// parital makes all properties of a type optional, it's basically creating a type with the same properties but marked as optional 
interface User {
    id?: number;
    name?: string;
    age?: number;
    createdAt?: string;
}

type UserBasic = Pick<User, 'name' | 'age'>

function sumOfAge(user1: UserBasic, user2: UserBasic) {
    return user1.age! + user2.age!;
}

const age = sumOfAge({ name: 'Varo', age: 20}, { name: 'Aryan', age: 18 });
console.log(age);