const jwt = require('jsonwebtoken');

// Create a middleware function to verify the access_token
function auth(req, res, next) {
    const accessToken = req.query.token;
   
    if (!accessToken) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    jwt.verify(accessToken, "secret", (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Unauthorized' });
        }

        req.userId = decoded.id; 
        next();
    });
}


module.exports = auth;