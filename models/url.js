const { Timestamp } = require("bson");
const { time } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const urlSchema = new mongoose.Schema({

   shortId:{
    type:String,
    required:true,
    unique:true
   },
   
   redirectId:{
    type:String,
    required:true
   },
   visitHistory:[{timestamp:{type:Number}}]

},{timestamps:true});

const URL = mongoose.model("URL",urlSchema);

module.exports=URL;
