import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// insert
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        }
    });
    console.log(res);
}
insertUser("aryan@gmail.com", "aryan@123", "aryan", "chauhan");

interface UpdateParams {
    firstName: string,
    lastName: string
}
// update
async function updateUser(username: string, updatedObj: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName: updatedObj.firstName,
            lastName: updatedObj.lastName
        }
    });
    console.log(res);
}
updateUser("admin@gmail.com", {firstName: "rakesh", lastName: "chauhan"});

//delete
async function deleteUser(username: string) {
    const res = await prisma.user.delete({
        where: { email: username }
    });
    console.log(res);
}
deleteUser('admin@gmail.com');
