const express = require("express")
const app = express();
const path = require("path");
const PORT=8002;
const URL = require("./models/url");
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

//app.get()

const urlRoute=require('./routes/user');
const staticRoute  =require("./routes/staticRouter");



const {connectwithmongodb}= require("./connection");
connectwithmongodb("mongodb://localhost:27017/short-url");

app.use("/url",urlRoute);
app.use("/",staticRoute);
app.get("/url/:shortID",async (req,res)=>{

   const shortId = req.params.shortID;
   const entry= await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
    $push: {visitHistory:{timestamp:Date.now()}}
    })
     
    //console.log(entry.redirectId)
     res.redirect(entry.redirectId);
});

app.listen(PORT,(err,data)=>{
    console.log(`Server Started at ${PORT}`);
})

