import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body)

    await client.user.create({
        data: {
            username: req.body.username,
            password: req.body.password!
        }
    })
    return Response.json({
        email: 'aryanc381.work@gmail.com',
        name: 'aryan',
        msg: 'You have logged in!'
    });
}