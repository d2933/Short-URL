const URL = require('../models/url');

async function handlecreateShortUrl(req, res) {
    const body = req.body;
    console.log("Request body:", body);  // Log the request body

    // Use dynamic import for nanoid
    const { nanoid } = await import('nanoid');
    const shortId = nanoid(8);

    if (!body.url) return res.status(400).json({ error: "URL NOT FOUND" });

    await URL.create({
        shortId: shortId,
        redirectId: body.url,
        timestamp: []
    });

    return res.json({ msg: "success", id: shortId });
}

module.exports = { handlecreateShortUrl };
