const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const User = require("./models/User");

app.get("/users", async (req, res) => {
    const users = await User.find();

    res.json(users);
});

app.post("/users", async (req, res) => {

    const user = await User.create(req.body);

    res.status(201).json(user);

});

mongoose.connect("mongodb://localhost:27017/learning_mongodb")
    .then(() => console.log("MongoDB Connected"));

app.listen(5000, () => {
    console.log("Server Running");
});