const express = require("express");
const{handlecreateShortUrl} = require("../controllers/url")
const router = express.Router();


router.route("/").post(handlecreateShortUrl)