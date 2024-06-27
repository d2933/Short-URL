const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
async function connectwithmongodb(url){
        mongoose.connect(url)  //It returns a Promise 
        .then(()=>(console.log("Mongo Connected")))
        .catch((err)=>console.log("Mongo error",err));
}

module.exports={connectwithmongodb};