const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/jobApplications")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Create Schema
const Application = mongoose.model("Application", {
    fullName: String,
    email: String,
    phone: String,
    position: String,
    resume: String
});

// Save application
app.post("/apply", async (req, res) => {
    const application = new Application(req.body);
    await application.save();

    res.send("Application Submitted Successfully");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});