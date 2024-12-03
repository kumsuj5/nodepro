const jwt = require('jsonwebtoken');

module.exports = (requiredRole) => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, 'this is dummy text');
            req.userData = { userId: decodedToken.userId, userType: decodedToken.userType };

            if (decodedToken.userType === requiredRole) {
                next(); // User has the required role
            } else {
                return res.status(403).json({
                    msg: 'Access forbidden: insufficient permissions'
                });
            }
        } catch (err) {
            return res.status(401).json({
                message: 'Authentication failed'
            });
        }
    };
};
