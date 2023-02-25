const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.render("main", {someData: ""});
})

app.post("/", (req, res)=>{
    res.render("main", {someData: req.body.someData})
})

app.listen(3000, ()=>{
    console.log("Listening on 3000");
})