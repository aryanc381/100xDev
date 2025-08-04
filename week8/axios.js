const axios = require('axios');

async function axiosFunc() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    console.log(response.data);
}

axiosFunc();