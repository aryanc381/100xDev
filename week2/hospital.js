// making a user for the hospital
const user1 = {
    name: "Aryan",
    kidneys: [
        {healthy: true}, 
        {healthy: false}
    ]
}
// array of users
const users = [user1]
// calling express
const express = require("express")
// making the fuckin app
const app = express()
app.use(express.json());

app.get("/", (req, res) => { // check how many kidneys they have and their health
    const Aryankidneys = users[0].kidneys;
    const nok = users[0].kidneys.length;
    let nohk = 0;
    for(let i = 0; i < nok; i++) {
        if(Aryankidneys[i].healthy) {
            nohk += 1;
        }
    }
    nouk = nok - nohk;


    res.json({
        Aryankidneys,
        nok,
        nohk,
        nouk
    })
})

app.post("/", (req, res) => { // user can ass new kidney
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/pure", (req, res) => { // user can replace a new kidney, make it healthy if they want
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({"kidneyPurified":true});
})

app.put("/unpure", (req, res) => { // user can replace a new kidney, make it healthy if they want
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = false;
    }
    res.json({"kidneyDestroyed":true});
})

app.delete("/", (req, res) => { // user can remove a kidney
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Unhealthy kidneys removed."})
})




// listening like i always do
app.listen(3001)