// if you see below, making a type of an object looks complex, to make it easier, we use Records
type User = {
    id: string,
    name: string
}

type Users = {
    [key: string]: User
}

const users: Users2 = {
    "aryanc381": {
        id: '381',
        name: 'aryan'
    },
    "mahesh": {
        id: '382',
        name: 'mahesh'
    }
}

// using records
type Users2 = Record<string, User> // key: string, value: number

console.log(users['aryanc381']?.id)