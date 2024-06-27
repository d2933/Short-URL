const shortid = require('shortid');
const URL = require('../models/url');

async function handlecreateShortUrl(req, res) {
    const body = req.body;
    console.log("Request body:", body);  // Log the request body

    const shortId = shortid.generate();  // Generate unique shortId

    if (!body.url) {
        return res.status(400).json({ error: "URL NOT FOUND" });
    }

    try {
        await URL.create({
            shortId: shortId,
            redirectId: body.url,
            visitHistory: []
        });

        return res.render("home",{
            id:shortId
        })
    } catch (error) {
        // Handle duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({ error: "ShortId already exists, please try again." });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handlegetanalytics(req,res){
  const shortId = req.params.shortId;
  //console.log(shortId);
  const result = await URL.findOne({shortId})
  //console.log(result);
      return res.json({ totalclicks:result.visitHistory.length,analytics:result.visitHistory})
}

module.exports = { handlecreateShortUrl ,handlegetanalytics};
