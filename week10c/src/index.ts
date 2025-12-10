import { prisma } from "./lib/prisma"


async function insertUser(username: string, passwrod: string, firstName: string, lastName: string) {
    const user = await prisma.user.create({
        data: {

            username: username,
            firstName: passwrod,
            lastName: lastName,
            password: passwrod
        }
    });
    console.log('Created user : ' + user);
}

insertUser('test', 'test', 'test', 'test');