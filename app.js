console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();


//Mongodbni chaqirish
const db = require("./server").db();
const Mongodb = require("mongodb");


// 1 : Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3 Views code
app.set("views", "views");           
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
   console.log(data.ops);
    res.json(data.ops[0]);

    
  });
 
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;

  db.collection("plans").deleteOne(
    { _id: new ObjectId(id) },
    function (err, data) {
      if (err) {
        return res.status(500).json({ state: "error", message: err.message });
      }
      res.json({ state: "success" });
    }
  );
});


app.get("/", function (req, res)  {
  console.log("user entered /");
  db.collection("plans").find().toArray((err, data) => {
    if (err) {
      console.log(err);
    res.end("something went wrong");
} else {
 
  res.render("reja",  { items: data });
 }
});
 
});

module.exports = app;









