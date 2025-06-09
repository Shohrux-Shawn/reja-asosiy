const http = require("http");

const mongodb = require("mongodb");


let db;

const connectionString = "mongodb+srv://SHAWN:MASTERSHOX7057sh.@cluster0.gfp7li6.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0";

mongodb .connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err,client) =>{
  if(err) console.log("ERROR ON CONNECTION MONGODB");
  else{
    console.log("MongoDb connection succeed");
    module.exports = client;
    const app = require("./app");
   const server = http.createServer(app);
   let PORT = 3000;
   server.listen(PORT, function () {
   console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
      });

     }
});



