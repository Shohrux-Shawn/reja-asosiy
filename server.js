console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require('http');





//1 : Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //html dan tradition form dan post qilingan narsani serverga oladi

//2 Session

//3   Views code
app.set("view", "views");
app.set("view engine", "ejs");

//4 Routing code

app.get("/", function (req, res){
    res.end("<h1>Hello World</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function()  {
    console.log(`Server is running on port ${PORT}`);


    
});