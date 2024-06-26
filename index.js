const express = require("express")
const app = express();
const PORT=8002;
const urlRoute=require('./routes/user')
const {connectwithmongodb}= require("./connection");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


connectwithmongodb("mongodb://localhost:27017/short-url");
app.route("/url",urlRoute);

app.listen(PORT,(err,data)=>{
    console.log(`Server Started at ${PORT}`);
})

