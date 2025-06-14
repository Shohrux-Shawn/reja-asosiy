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
  
    res.json(data.ops[0]);

    
  });
 
});
//delete qism
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id);

  db.collection("plans").deleteOne(
    { _id: new Mongodb.ObjectId(id) },
    function (err, data) {
      if (err) {
        return res.status(500).json({ state: "error", message: err.message });
      }
      res.json({ state: "success" });
    }
  );
});

//edit qism
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);

  db.collection("plans").findOneAndUpdate(
    { _id: new Mongodb.ObjectId(data.id) },          // ID orqali topish
    { $set: { reja: data.userInput } },              // yangi qiymatni o'rnatish
    function (err, result) {
      if (err) {
        console.log("Xatolik:", err);
        return res.status(500).json({ state: "error", message: err.message });
      }

      // Faqat bitta javob qaytariladi
      res.json({ state: "success" });
    }
  );      
});

//delete all qism

app.post("/delete-all", (req, res) => {
  if(req.body.delete_all){
    db.collection("plans").deleteMany(function() {
      res.json({ state: "all success deleted" });

    });
  
    
    
  }
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









