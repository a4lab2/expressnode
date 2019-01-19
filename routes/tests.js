var express = require('express');
var router = express.Router();



router.get("/api", (req, res) => {
    res.json({
        "text": "my api",
    });
})
router.get("/", (req, res) => {

    res.json({
        "text": "Welcome to api",
    });
})



router.post("/api/login", (req, res) => {
    userId = 3;
    token = jwt.sign({ userId }, "My_key");
    res.json({
        "token": "token"
    });
})

router.get("/api/protected", (req, res) => {
    res.json({
        "text": "This route should be protected",
    });
})

function verifyToken(req, res, next) {

    const bearerHeader = req.headers['authorization']
    if (typeof(bearerHeader) !== 'undefined') {
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

router.get("/", (req, res) => {

    res.json({
        "text": "Welcome to api",
    });
});