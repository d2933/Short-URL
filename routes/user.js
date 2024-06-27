const express = require("express");
const { handlecreateShortUrl,handlegetanalytics } = require("../controllers/url");
const router = express.Router();

router.route("/").post(handlecreateShortUrl);
router.get("/analytics/:shortId",handlegetanalytics)

module.exports = router;
