var jwt = require('jsonwebtoken');

// authentication 
module.exports.authenticate = function(req, res, next) {
    try {
        var token = req.headers.token || req.body.token;
        if (token) {
            var decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded.user;
            next();
        } else throw ("unauthorized");
    } catch (err) {
        res.json("unauthorized");
    }
}