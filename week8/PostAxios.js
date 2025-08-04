const axios = require("axios");

async function main2() {
    const response = await axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "PUT",
        headers: {
            Authorization: "Bat@69"
        }, 
        data: {
            username: "Arnab",
            password: "Goswami"
        }
    });
    console.log(response.data);

}

main2();