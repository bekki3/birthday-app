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

let PORT = process.env.PORT;
if(PORT==null || PORT == "")
{
    console.log("port not found in .env");
    PORT = 5000
}
app.listen(PORT, ()=>{
    console.log("Listening on port:", PORT);
})