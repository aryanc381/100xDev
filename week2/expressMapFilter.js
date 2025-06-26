const express = require("express")

const app = express();
app.use(express.json());

const arr1 = {
    name: "arr1",
    content: [1, 2, 3, 4, 5]
}

const arrs = [arr1]

function map(arr) {
    const newArr = {
        name: "newArr",
        content: []
    }

    for(let i = 0; i < arr.content.length; i++) {
        if(arr.content[i] % 2 == 0) {
            newArr.content.push(arr.content[i]);
        }
    }

    return newArr;
}

app.get("/", (req, res) => {
    res.send("Server is working!")

})
app.put("/", (req, res) => {
    const ans = map(arrs[0]);
    res.json(ans.content);
})
app.listen(3000);