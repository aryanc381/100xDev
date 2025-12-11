import { createClient } from "redis";

const client = createClient();

async function main() {
    console.log('waiting...');
    await client.connect();    
    while(1) {
        const response = await client.brPop('submissions', 0);
        console.log(response);
        // simulating the user code on docker
        await new Promise ((resolve) => setTimeout(resolve, 10000));
        // sending it to the pub-sub
    }
}

main();