
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

let users = [];

// Register User
app.post("/register", async (req, res) => {
    let password = await bcrypt.hash(req.body.password, 10);

    users.push({
        name: req.body.name,
        password: password
    });

    res.send("Registered");
});

// Login User
app.post("/login", async (req, res) => {
    let u = users.find(x => x.name === req.body.name);

    if (u && await bcrypt.compare(req.body.password, u.password)) {
        let token = jwt.sign({ name: u.name }, "secret");
        res.json({ token });
    } else {
        res.send("Invalid Login");
    }
});

app.listen(3000, () => console.log("Server Started"));
